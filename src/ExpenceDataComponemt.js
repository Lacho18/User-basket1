import Expence from "./ExpenceItem.js";
import "./Expences.css";
import Card from "./Card.js";
import ExpenseItem from "./ExpenceItem.js";
import ExpensesFilter from "./NewExpences/ExpenseFilter.js";
import {useState} from "react";
import Chart from "./NewExpences/Chart/Chart.js";
import ExpensesChart from "./ExpensesChart.js";

export default function Funkcia(props) {
    const [year, setYear] = useState("2023");

    const YearHandler = (selectedYear) => {
    props.onYear(selectedYear);
  }

  function onDelete(id) {
    props.DeleteHandler(id);
  }
    console.log(props);
    return(
        <Card className="expenses">
            <ExpensesFilter userSelect = {year} onSelectYear = {YearHandler}/>
            <ExpensesChart expenses={props.items}/>
            {props.items.map((item) => {
                return (<Expence key={item.id} id={item.id} title={item.title} price={item.amount} date={item.date} Delete={onDelete}/>)
            })}

        </Card>
        
    );
}


/* 
{array} = {
    <Expence title={masiv[0].title}
            amount={masiv[0].amount}
            date={masiv[0].date}/> 

     <Expence title={masiv[1].title}
            amount={masiv[1].amount}
            date={masiv[1].date}/> 
        
    <Expence title={masiv[2].title}
            amount={masiv[2].amount}
            date={masiv[2].date}/> 
}
*/