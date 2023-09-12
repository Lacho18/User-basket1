import React, { useState } from "react";
import "./NewExpence.css";
import ExpenceForm from "./ExpenceForm";
//import ExpensesFilter from "./ExpenseFilter";

const NewExpense = (props) => {
    const [Isclicked, setIsclicked] = useState(false);
    
    function openForm() {
        setIsclicked(true);
    }

    function onCancel() {
        setIsclicked(false);
    }

    const userDataHandler = (userData) => {
        props.onData(userData);
    }

    const YearHandler = (selectedYear) => {
        props.onYear(selectedYear);
    }

    return (
        <div className="new-expense">
            {!Isclicked && <button onClick={openForm}>Add New Expence</button>}
            {Isclicked && <ExpenceForm onUserInput = {userDataHandler} onUserCansel = {onCancel}/>}
           
        </div>
    );
}

export default NewExpense;