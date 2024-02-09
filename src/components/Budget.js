import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, remaining ,currency} = useContext(AppContext);
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const upperLimitValue = 20000

    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }

    const handleKeyDown = (e) => {
        if ( e.key === 'Enter' && newBudget <= upperLimitValue && remaining > 0) {
          dispatch({ type: "SET_BUDGET", payload: newBudget });
        }else if (newBudget > upperLimitValue) {
            alert(`The value cannot exceed remaining funds  ${currency}` + remaining);   
        }else if ( remaining <= 0) {
            alert("You cannot reduce the budget value lower than the spending");   
        }
    };

    return (
<div className='alert alert-secondary'>
<span>Budget {currency}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange} onKeyDown={handleKeyDown}></input>
</div>
    );
};
export default Budget;
