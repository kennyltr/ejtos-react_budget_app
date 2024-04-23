import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { expenses, budget, currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        if (newBudget > 20000) {
            alert("Budget cannot exeed £20,000");
            setNewBudget(20000);        
        }
        else if (newBudget < totalExpenses) {
            alert("Cannot reduce the budget value lower than the spending");
            setNewBudget(totalExpenses);
        }
        else {
            setNewBudget(event.target.value);
        }
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
