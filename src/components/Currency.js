import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const { dispatch } = useContext(AppContext);

    const changeCurrency = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }

  return (
        <div className='alert alert-secondary' style={{ height: '58px'}}> 
          <span>Currency:</span>
          <select className="custom-select" name="Currency" id="Currency" style={{ height: '38px'}} onChange={event=>changeCurrency(event.target.value)}>
            <option value="£">UK(£)</option>
            <option value="₹">Singapore($)</option>
            <option value="€">Europe(€)</option>
            <option value="CAD">Canada(CAD)</option>
          </select>	
        </div>
    );
};

export default Currency;