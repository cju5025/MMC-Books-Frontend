import { Component } from 'react';

import '../css/expense.css';

export default class Expense extends Component {
    
    state = {
        deleteButtonClicked: false,
        areYouSure: false
    }

    deleteButtonClicked = () => {
        this.setState({ deleteButtonClicked: !this.state.deleteButtonClicked })
    }

    deleteExpense = () => {
        const id = this.props.id
        fetch(`http://localhost:4000/expenses/${id}`, { method: "DELETE" })
    }

    updateExpense = () => {
        console.log("lets update it")
    }

    render () {
        return (
            <div id="expense-card">
                <section id="top-section">
                    <p>{this.props.type}</p>
                    <button id="delete-button" onClick={this.deleteButtonClicked}>X</button>
                    <button id="update-button" onClick={this.updateExpense}>Update</button>
                    {
                        this.state.deleteButtonClicked
                        ?
                        <div id="modal">
                            <p>Are You Sure?</p>
                            <button onClick={this.deleteExpense}>Yes</button>
                            <button onClick={this.deleteButtonClicked}>No</button>
                        </div>
                        :
                        null
                    }
                </section>
                <p>{this.props.description}</p>
                <p>${this.props.amount}</p>
                <p>{this.props.date}</p>
            </div>
        )
    }
}