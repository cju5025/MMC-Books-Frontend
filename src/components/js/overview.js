import { Component } from 'react';

import Header from './header';
import Expense from './expense';
import SearchBar from './searchbar';
import '../css/overview.css';

export default class Overview extends Component {
    
    state = {
        expenses: [],
        deletedExpense: false,
        searchInput: ""
    }

    componentDidMount = () => {
        fetch("http://localhost:4000/expenses")
            .then(response => response.json())
            .then(result => result.expenses)
            .then(expenses => expenses.forEach(expense => {
                this.setState({ expenses: [...this.state.expenses, expense]})
            }))
            .then(this.filterExpenses())
    }

    setSearchInput = (searchInput) => {
        this.setState({ searchInput: searchInput })
    }

    filterExpenses = () => {
        if (this.state.searchInput !== ""){
            this.setState(({ 
                expenses: this.state.expenses.filter(expense => {
                let description = this.lowerCaser(expense.description)
                let searchQuery = this.lowerCaser(this.state.searchInput)
                return description.split(" ").includes(searchQuery)
                })
            }))
        } 
    }
    // abstract lowerCaser into new helperFunction file

    lowerCaser = (string) => {
        let stringArray = string.split("")
        
        stringArray = stringArray.map(char => {
            return char = char.toLowerCase()
        })

        string = stringArray.join("")
        return string
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
                <SearchBar setSearchInput={this.setSearchInput} filterExpenses={this.filterExpenses}/>
                <section id="expense-section">
                    {this.showExpenses()}
                </section>
            </main>
        )
    }
}