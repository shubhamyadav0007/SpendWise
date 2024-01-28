import React from 'react';
import './ExpanseDate.css';
const ExpanSeDate=(props)=>
{
    const month = props.date.toLocaleString('en-us', {month:'long'});
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString('en-us', {day:'2-digit'});
    return(
     <div className="date" >
          <div><h3>{month}</h3></div>
          <div><h3>{day}</h3></div>
          <div><h3>{year}</h3></div>
    </div>
    );

}
export default ExpanSeDate;