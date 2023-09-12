import "./ExpenceDate.css";

export default function ExpenceDate(props) {
    const month = props.calendar.toLocaleString('en-US', {month: 'long'});
    const day = props.calendar.toLocaleString('en-US', {day: 'numeric'});
    const year = props.calendar.getFullYear();

    return(
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{day}</div>
        </div>
    );
}