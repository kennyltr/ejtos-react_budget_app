import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Import components
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import Currency from './components/Currency';
import { AppProvider } from './context/AppContext';

const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        {
                        // Budget component
                        <div className='col-sm'>
                            <Budget />
                        </div>
                        }        
                        {
                        // Currency component
                        <div className='col-sm'>
                            <Currency />
                        </div>
                        }
                        {
                        //Remaining component
                        <div className='col-sm'>
                            <Remaining />
                        </div>
                        }        

                        {
                        //ExpenseTotal component
                        <div className='col-sm'>
                            <ExpenseTotal />
                        </div>
                        }        
                    </div>
                    <h1 className='mt-3'>Allocation</h1>
                    <div className='row '>
                        {
                        //ExpenseList component
                        <div className='col-sm'>
                            <ExpenseList />
                        </div>                        }         
                    <h1 className='mt-3'>Change Allocation</h1>
                        {
                        //AllocationForm component
                        <div className='col-sm'>
                            <AllocationForm />
                        </div>
                        }        

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
