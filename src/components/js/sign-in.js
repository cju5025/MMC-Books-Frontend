import { Component } from 'react';

export default class SignIn extends Component {

    state = {
        username: '',
        email: '',
        password:''
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        fetch('http://localhost:4000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ user: {
                email: this.state.email,
                password: this.state.password
            }})
        }).then(response => response.json())
        .then(response => {
            if (response.token)  {
                localStorage.setItem('token', response.token)
                localStorage.setItem('user_id', response.user.id)
                window.location.replace('http://localhost:3000/home')
            }
            else {
                throw new Error(response)
            }
        }).catch(error => alert(error.message))
    }

    render () {
        return (
            <div id="sign-in">
                <h1>Sign In</h1>
                <form id="sign-in-form" onSubmit={this.handleSubmit}>
                        <label>Email:</label>
                        <input onChange={this.handleChange} value={this.state.email} type="text" name="email" placeholder="Email"/>

                        <label>Password:</label>
                        <input onChange={this.handleChange} value={this.state.password} type="password" name="password" placeholder="Password"/>

                        <input type="submit" value="Sign In" id="sign-up-button" /> 
                </form>
            </div>
        )
    }
}