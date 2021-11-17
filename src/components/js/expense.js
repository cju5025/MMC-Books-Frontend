import { Component } from 'react';

import '../css/expense.css';

export default class Expense extends Component {
    
    state = {
        deleteButtonClicked: false,
        areYouSure: false,
        dropdownClicked: false
    }

    deleteButtonClicked = () => {
        this.setState({ deleteButtonClicked: !this.state.deleteButtonClicked })
    }

    dropdownClicked = () => {
        this.setState({ dropdownClicked: !this.state.dropdownClicked})
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
                <div id="card-content">
                    <section id="left-section">
                        {
                            this.state.dropdownClicked
                            ?
                            <div>
                                <button id="delete-button" onClick={this.deleteButtonClicked}>X</button>
                                <button id="update-button" onClick={this.updateExpense}>Update</button>
                            </div>
                            :
                            <button id="dropdown-button" onClick={this.dropdownClicked}>⬐</button>
                        }
                    </section>
                    <section id="center-section">
                        <p>{this.props.type}</p>
                        <p>{this.props.description}</p>
                        <p>${this.props.amount}</p>
                        <p>{this.props.date}</p>
                    </section>
                    <section id="right-section">
                        
                    </section>
                </div>
            </div>
        )
    }
}