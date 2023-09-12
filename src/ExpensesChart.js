import React from "react";
import Chart from "./NewExpences/Chart/Chart";

const ExpensesChart = (props) => {
const chartDataValues = [
    {label: "Jan", value: 0},
    {label: "Feb", value: 0},
    {label: "March", value: 0},
    {label: "April", value: 0},
    {label: "May", value: 0},
    {label: "June", value: 0},
    {label: "July", value: 0},
    {label: "August", value: 0},
    {label: "Sep", value: 0},
    {label: "Okt", value: 0},
    {label: "Nov", value: 0},
    {label: "Dec", value: 0},
];

for(const expense of props.expenses) {
        const expenseMounth = expense.date.getMonth();
        chartDataValues[expenseMounth].value += expense.amount;
}

    return(
        <Chart dataValues={chartDataValues} />
    );
}

export default ExpensesChart;