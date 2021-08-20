import '../css/expense.css';

export default function Expense (props) {
        return (
            <div id="expense-card">
                <h1>{props.description}</h1>
                <h2>{props.amount}</h2>
                <h3>{props.date}</h3>
            </div>
        )
}