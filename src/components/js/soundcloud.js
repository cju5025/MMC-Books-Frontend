import { Component } from 'react';

import Header from './header';
import '../css/expense-page.css';

export default class Soundcloud extends Component {
    
    state = {
        type: "Soundcloud",
        amount: 0,
        date: "",
        description: ""
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        fetch('http://localhost:4000/expenses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ expense: {
                type: this.state.type,
                amount: this.state.amount,
                date: this.state.date,
                description: this.state.description
            }})
        })
    }
    
    render () {
        return (
            <>
            <Header />
            <main className="expense">
                <h1>Soundcloud Expenses</h1>
                <form  onSubmit={this.handleSubmit} id="expense-form">
                    <label>Amount:</label>
                    <input onChange={this.handleChange} type="float" name="amount" placeholder="0.00" />

                    <label>Date:</label>
                    <input onChange={this.handleChange} type="date" name="date" />

                    <label>Description:</label>
                    <input onChange={this.handleChange} type="text" name="description" placeholder="Sales etc..." />

                    <input type="submit" value="Submit" id="submit" />
                </form>
            </main>
            </>
        )
    }
}