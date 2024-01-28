import React, { useState } from 'react';
import './ExpanSe.css';
import ExpanSeDate from './ExpanseDate';
import Card from '../ui/Card';
const Expanse =(props )=>{

      return(
         < Card className="item">
         <ExpanSeDate date={props.date}/>
          <div className="description"><h3>{props.title} </h3>
          <div className="price"><h3>{props.price}</h3> </div>
          </div>
      </Card>
      );
}
export default Expanse;