import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const AllocationForm = (props) => {
    const { dispatch,remaining,currency } = useContext(AppContext);

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [action, setAction] = useState('');

    const submitEvent = () => {

            if(cost > remaining) {
                alert("The value cannot exceed remaining funds  £"+remaining);
                setCost("");
                return;
            }

        const expense = {
            name: name,
            cost: parseInt(cost),
        };
        if(action === "Reduce") {
            dispatch({
                type: 'RED_EXPENSE',
                payload: expense,
            });
        } else {
                dispatch({
                    type: 'ADD_EXPENSE',
                    payload: expense,
                });
            }
    };

    return (
        <div className="container">
            <div className='row'>
                <div className="col">
                    <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                        <div className="input-group-prepend">
                            <label className="input-group-text" htmlFor="inputGroupSelect01">Department</label>
                        </div>
                        <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
                            <option defaultValue>Choose...</option>
                            <option value="Marketing" name="marketing"> Marketing</option>
                            <option value="Sales" name="sales">Sales</option>
                            <option value="Finance" name="finance">Finance</option>
                            <option value="HR" name="hr">HR</option>
                            <option value="IT" name="it">IT</option>
                            <option value="Admin" name="admin">Admin</option>
                        </select>
                    </div>
                </div>
                <div className="col">
                    <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                        <div className="input-group-prepend" style={{ marginLeft: '2rem' }}>
                            <label className="input-group-text" htmlFor="inputGroupSelect02">Allocation</label>
                        </div>
                        <select className="custom-select" id="inputGroupSelect02" onChange={(event) => setAction(event.target.value)}>
                            <option defaultValue value="Add" name="Add">Add</option>
                            <option value="Reduce" name="Reduce">Reduce</option>
                        </select>
                    </div>
                </div>
                <div className="col">
                    <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                        <div className="input-group-prepend" style={{ marginLeft: '2rem' }}>    
                            <label className="input-group-text">{currency}</label>
                        </div>
                        <input
                            required='required'
                            type='number'
                            id='cost'
                            value={cost}
                            placeholder="Allocation Value" 
                            aria-label="Allocation Value" 
                            aria-describedby="basic-addon2"
                            onChange={(event) => setCost(event.target.value)}>
                        </input>
                    </div>
                </div>
                <div className="col">
                    <button className="btn btn-success" style={{ marginLeft: '4rem', width:'300px' }} onClick={submitEvent}>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AllocationForm;
