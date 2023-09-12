import React, {useState} from 'react';
import "./ExpenceItem.css";
import ExpenceDate from "./ExpenceDate";
import Card from "./Card";


function ExpenseItem(props) {
const [zaglavie, PromeniZaglavie] = useState(props.title);
const [amont, SetAmount] = useState(props.amont);
const [date, setDate] = useState(props.date);

function onDelete(id) {
    props.Delete(id);
}

/*const selectedYear = props.items.filter((item) => {
  return item.date.getFullYear().toString() === year;
}) */

  return (
    <Card className="expense-item">
        <ExpenceDate calendar={props.date}/>
      <div className="expense-itemdescription">
        <h2>{zaglavie}</h2>
      </div>
      <div className="expense-itemprice">
        <h2>{props.price} лв.</h2>
      </div>
      <button className="expense-itemprice" onClick={() => {onDelete(props.id)}}>Delete</button>
      
    </Card>
  );
}
export default ExpenseItem;