import React ,{useState} from 'react';
import './App.css';
import Expanse from './components/expanse/ExpanSe';
import ExpanseTypes from './components/expanse/ExpanseTypes';
import NewExpanse from './components/newexpanse/NewExpanse';

let DummyExpanse =[
    {
        id:'e1',
        title : 'car',
        price:7007,
        date : new Date(2023,5,7)
    },

    {
        id:'e2',
        title : 'activa ',
        price : 7697,
        date : new Date(2023,8,7)
    },

    {
        id:'e3',
        title :'mesh ',
        price : 7887,
        date : new Date(2023,11,15)
    },

    {
        id: 'e2',
        title : 'hostel ',
        price : 9999,
        date: new Date(2024,9,7)
    },


];

const App=()=>
{
    const[expanses,SetExpanses] = useState(DummyExpanse);

    const addExpanseDataHandler = (expanse)=>{
 
        const updatedExpanse =[expanse, ...expanses];
        SetExpanses(updatedExpanse);

        console.log(expanse);

    };
    return (
        <div className="backout">
        <h1>Welcome to SpendWise react app </h1>
        <NewExpanse onaddExpanseData ={addExpanseDataHandler}/>
        <ExpanseTypes item ={expanses}/>

        </div>
    ); 
}
export default App;