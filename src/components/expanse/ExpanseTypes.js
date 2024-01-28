import React from 'react';
import './ExpanseTypes.css';
import Expanse from './ExpanSe';
import Card from '../ui/Card';
const ExpanseTypes = (props)=>{
    return(
        <div className="typescs">
        {
            props.item.map(expanse =>(<Expanse date = {expanse.date}
        price={expanse.price}
        title = {expanse.title}>
        </Expanse>)
        )
        }
            
        </div>
    );
}

export default ExpanseTypes;