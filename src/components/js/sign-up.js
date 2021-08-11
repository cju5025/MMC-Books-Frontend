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

        if (this.state.email !== '921massive@gmail.com'){
            this.setState({ emailIsMassive: false })
        }

        console.log(this.state)
    }

    render () {
        return (
            <div id="signup">
                <h1>MMC BOOKS SIGN UP</h1>
                {
                    this.state.emailIsMassive
                    ?
                    null
                    :
                    <p>GTFO POSER</p>
                }
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
                </form>
            </div>
        )
    }
}