import React from 'react';
import { useState } from "react";

import './ExpenseFilter.css';

const ExpensesFilter = (props) => {
    const [years, setYears] = useState(2023);

    const YearChanger = (event) => {
        setYears((prevState) => {
            console.log(event.target.value);
            return event.target.value;
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        props.onUserInput(years);
    }

    const filterYear = (event) => {
        props.onSelectYear(event.target.value);
    }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value = {props.year} onChange={filterYear}>
		      <option value='2023'>2023</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
		      <option value='2018'>2018</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;