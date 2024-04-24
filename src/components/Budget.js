import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { expenses, budget, currency, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }
    const updateBudget = () => {
        dispatch ({
            type: 'SET_BUDGET',
            payload: newBudget,
        });
    }
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const alertType = totalExpenses > newBudget || newBudget > 20000 ? 'alert-danger' : 'alert-success';
    return (
        <div className={`alert ${alertType}`} style={{ height: '58px'}}>
            <div className="input-group mb-3">
                <span>Budget: {currency}</span>
                <input type="number" className="form-control" step="10" value={newBudget} onChange={handleBudgetChange}></input>
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" onClick={updateBudget}>Update</button>
                </div>
            </div>
        </div>
    );
};

export default Budget;
