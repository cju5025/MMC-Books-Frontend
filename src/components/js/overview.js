import { Component } from 'react';

import Header from './header';
import Expense from './expense';
import SearchBar from './searchbar';
import '../css/overview.css';

export default class Overview extends Component {
    
    state = {
        expenses: [],
        deletedExpense: false
    }

    componentDidMount = () => {
        fetch("http://localhost:4000/expenses")
            .then(response => response.json())
            .then(result => result.expenses)
            .then(expenses => expenses.forEach(expense => {
                this.setState({ expenses: [...this.state.expenses, expense]})
            }))
    }

    showExpenses = () => {
        return this.state.expenses.map(expense => {
            return <Expense 
            key={expense.id}
            id={expense.id}
            amount={expense.amount} 
            type={expense.type} 
            date={expense.date} 
            description={expense.description}
            deletedExpense={this.state.deletedExpense} 
            />
        })
    }
    
    render () {
        return (
            <main id="overview">
                <Header />
                <h1>Overview</h1>
                <SearchBar />
                <section id="expense-section">
                    {this.showExpenses()}
                </section>
            </main>
        )
    }
}