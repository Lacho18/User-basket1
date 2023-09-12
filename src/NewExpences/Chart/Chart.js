import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const mouthExpenses = props.dataValues.map((mouthExpens) => {
    return mouthExpens.value;
  })
const maxExpense = Math.max(...mouthExpenses);

    return(
        <div className="chart">
          {props.dataValues.map((dataValue) => {
            return(
              <ChartBar 
                      key={dataValue.label}
                      value={dataValue.value} 
                      maxValue={maxExpense}
                      label={dataValue.label} 
            />
            );
            
          })}  
        </div>
    );
}

export default Chart;