import '../css/sign-up.css';

import { Component } from 'react';

export default class SignUp extends Component {

    state = {
        username: '',
        email: '',
        password: '',
        passwordVerification: '',
        passwordsMatch: true,
        emailIsMassive: true,
        redirect: false
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault()


        if (this.state.passwordVerification === this.state.password
            && this.state.email === '921massive@gmail.com'){
            fetch('http://localhost:4000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    user: {
                        username: this.state.username,
                        email: this.state.email,
                        password: this.state.password
                    }
                })
            })
            .then(this.setState({ redirect: !this.state.redirect }))
        } else {
            this.setState({ emailIsMassive: false })
        }
    }

    render () {
        return (
            <div id="signup">
                <h1>MMC BOOKS SIGN UP</h1>
                <form id="signup-form" onSubmit={this.handleSubmit}>
                    <label>Username:</label>
                    <input onChange={this.handleChange} value={this.state.username} type="text" name="username" placeholder="Username"/>

                    <label>Email:</label>
                    <input onChange={this.handleChange} value={this.state.email} type="text" name="email" placeholder="Email"/>

                    <label>Password:</label>
                    <input onChange={this.handleChange} value={this.state.password} type="password" name="password" placeholder="Password"/>

                    <label>Verify Password:</label>
                    <input onChange={this.handleChange} value={this.state.passwordVerification} type="password" name="passwordVerification" placeholder="Verify Password"/>
                    
                    <input type="submit" value="Sign Up" id="sign-up-button" /> 
                    {
                        this.state.emailIsMassive
                        ?
                        null
                        :
                        <p>Either incorrect password or you ain't massive</p>
                    }
                </form>
            </div>
        )
    }
}