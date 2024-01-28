import React, { useState } from 'react';
import './ExpanseForm.css';

const ExpanseForm=(props)=>
{
    const[enteredTitle ,setEnteredTitle ] =useState('');
    const[enteredAmount ,setEnteredAmount ] =useState('');
    const[enteredDate ,setEnteredDate ] =useState('');

    const titleChangeHandler = (event)=>{
        setEnteredTitle(event.target.value);
    };
    const amountChangeHandler = (event)=>{
        setEnteredAmount(event.target.value);
    };
    const dateChangeHandler = (event)=>{
        setEnteredDate(event.target.value);
    };

    const onSubmitHandler =(event)=>{
        event.preventDefault();

        const expanseData = {
            title: enteredTitle,
            price :enteredAmount,
            date: new Date(enteredDate)
            
        }
        props.onsaveExpanseData(expanseData);

        console.log(expanseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

    };


    return(
        <form onSubmit={onSubmitHandler} >
            <div className="new-expense_controls">
             <div className="new-expense_control" >
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
             </div>

             <div className="new-expense_control" >
                <label>Amount</label>
                <input type ="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}  />
             </div>

             <div className="new-expense_control" >
                <label>Date</label>
                <input type="date" value={enteredDate} onChange={dateChangeHandler}  />
             </div>

            </div>
            <div className="new-expense_actions" >
                <button type="submit">Add Expanse</button>
            </div>
        </form>
    );
    
}

export default ExpanseForm;