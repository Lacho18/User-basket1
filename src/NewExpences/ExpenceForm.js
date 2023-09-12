import { useState } from "react";
import "./ExpenceForm.css";

const ExpenceForm = (props) => {

    //const [title, setTitle] = useState("");
    //const [amount, setAmount] = useState("");
    //const [date, setDate] = useState("");

    const [userData, setUserData] = useState({
        title: '',
        amount: '',
        date: ''
    })

    const titleChangeHandle = (event) => {
        //setTitle(event.target.value);
        //console.log(event.target.value);
        //setUserData({...userData, enterTitle: event.target.value});

        setUserData((prevState) => {
            return(
                {
                ...prevState,
                title: event.target.value}
            );
        });
    }

    const amountHandle = (event) => {
        setUserData((prevState) => {
            return(
                {
                ...prevState,
                amount: event.target.value}
            );
        });
    }

    const dateAmount = (event) => {
        setUserData((prevState) => {
            console.log(event.target.value);
            return(
                {
                ...prevState,
                date: event.target.value}
                
            );
        });
    }

    const submitHandler = (event) => {
        event.preventDefault();
        props.onUserInput({...userData, date: new Date(userData.date)});

        /*setUserData({enterTitle: "",
                    enterAmount: "",
                    enterDate: ""}); */
    } 

    return (
        <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={userData.title} onChange={titleChangeHandle}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" value={userData.amount} min="0.01" step="0.01" onChange={amountHandle}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" value={userData.date} min="2019-01-01" max="2024-12-31" onChange={dateAmount}/>
            </div>
            <div className="new-expense__action">
            <button type="submit">Add Expense</button>
            <button type="button" onClick={props.onUserCansel}>Cancel</button>
            </div>
        </div>
        </form>
    );
}

export default ExpenceForm;