import { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from './header';
import '../css/expense-page.css';

export default class Shows extends Component {

    state = {
        type: "Shows",
        amount: 0,
        inOrOut: "",
        date: "",
        description: "",
        selectInOrOut: false,
        submitted: false
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();

        if (this.state.inOrOut === "in") {
            this.setState({ selectInOrOut: false })
            fetch("http://localhost:4000/expenses", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({ expense: {
                    type: this.state.type,
                    amount: parseFloat(this.state.amount),
                    date: this.state.date,
                    description: this.state.description
                }})
            })
            .then(this.setState({ submitted: true }))
        } else if (this.state.inOrOut === "out") {
            this.setState({ selectInOrOut: false })
                fetch("http://localhost:4000/expenses", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify({ expense: {
                        type: this.state.type,
                        amount: parseFloat(-Math.abs(this.state.amount)),
                        date: this.state.date,
                        description: this.state.description
                    }})
                })
                .then(this.setState({ submitted: true }))
            } else {
            this.setState({ selectInOrOut: true })
                }
    }

    refreshWindow = () => {
        window.location.replace("http://localhost:3000/shows")
    }

    render () {
        return (
            <>
            <Header />
            <main className="expense">
                <h1>{this.state.type} Expenses</h1>
                <form  onSubmit={this.handleSubmit} id="expense-form">
                    <div id="amount-container">
                        <label>Amount:</label>
                        <div id="amount-inputs">
                            <input onChange={this.handleChange} type="float" name="amount" placeholder="0.00" />
                            <select onChange={this.handleChange} name="inOrOut" id="in-out-select" defaultValue={'DEFAULT'}>
                                <option value="DEFAULT" disabled>In or Out?</option>
                                <option value="in">In</option>
                                <option value="out">Out</option>
                            </select>
                        </div>
                    </div>
                    <label>Date:</label>
                    <input onChange={this.handleChange} type="date" name="date" />

                    <label>Description:</label>
                    <input onChange={this.handleChange} type="text" name="description" placeholder="Sales etc..." />

                    <input type="submit" value="Submit" id="submit" />
                    {
                        this.state.selectInOrOut
                        ?
                        <p>Please Select Whether The Expense Is Incoming Or OutGoing</p>
                        :
                        null
                    }
                </form>
                {
                    this.state.submitted 
                    ?
                    <div id="successful-submit-section">
                        <p>Submitted! Need to do another {this.state.type} expense?</p>
                        <button onClick={this.refreshWindow}>Yes</button>
                        <Link to="/home" ><button>No</button></Link>
                    </div>
                    :
                    null
                }
            </main>
            </>
        )
    }
}