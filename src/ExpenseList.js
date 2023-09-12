import React from "react";
import ExpenseItem from "./ExpenceItem";
import "./ExpensesList.css";

const ExpenseList = (props) => {
    let filteredData = <p>No expenses found</p>;

    if(props.filter.length === 0) {
        return <h2 className = "expenses-list__fallback">No expences found</h2>
    }

    return(
        <u1>
            {props.filter.map((expense) => {
                return (
                    <ExpenseItem 
                    key={expense.id}
                    title={expense.title}
                    price={expense.amount}
                    date={expense.date}
                    ></ExpenseItem>
                );
            })}
        </u1>
    );
} 