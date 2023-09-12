//import Expence from "./ExpenceItem.js";
import masiv from "./MasivData";
import {useState} from "react";
import Expences from "./ExpenceDataComponemt";
import NewExpense from "./NewExpences/NewExpense";

function MyApp() {
const [expenses, setExpenses] = useState(masiv);
const [curent_year, setCurent_year] = useState(2023);


const cuyrent_Year = (input) => {
    setCurent_year((prevExpenses) => {
        console.log(input);
        return input;
    })
}

    const UserDataHandler = (input) => {
        console.log(input);
        setExpenses((prevExpenses) => {
            return [input, ...prevExpenses]
        })
    }

    let i = 0;
    const arrayByYears = expenses.filter((index) => 
    {
        let years = expenses[i].date.getFullYear();
        i++;    
        return (years == curent_year);
    });

    function DeleteFunction(id) {
        setExpenses(oldExpence => {
            oldExpence = oldExpence.filter(indexValue => {
                if(indexValue.id === id) {
                    return false;
                }
                else {
                    return true;
                }
            });
            return oldExpence;
        })
    }

    return(
        <div>
        <NewExpense onData = {UserDataHandler}/>
        <Expences items = {arrayByYears}  onYear = {cuyrent_Year} DeleteHandler = {DeleteFunction}/>
        {arrayByYears.length == 0 && <p>No elements found</p>}
        </div>
    );
}

export default function Web() {
    return (
        <MyApp />
    );
}