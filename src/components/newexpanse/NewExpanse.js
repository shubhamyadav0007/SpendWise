import React from "react";
import './NewExpanse.css';
import ExpanseForm from "./ExpanseForm";

const NewExpanse =(props)=>{

    const saveExpanseDataHandler=(enteredExpanseData)=>{
        const expansedata = {
            ...enteredExpanseData,
            id:Math.random().toString()
        }
        props.onaddExpanseData(expansedata);
        console.log(expansedata);
    }; 

    return(
        <div className=" newexpanse ">
            <ExpanseForm onsaveExpanseData = {saveExpanseDataHandler}/>
        </div>
    );
}
export default NewExpanse;