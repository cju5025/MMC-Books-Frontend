import '../css/sign-up.css';

import { Component } from 'react';

export default class SignUp extends Component {

    render () {
        return (
            <div id="signup">
                <h1>MMC BOOKS SIGN UP</h1>
                <form id="signup-form">
                    <label>Username:</label>
                    <input type="text" name="username" placeholder="Username"/>

                    <label>Email:</label>
                    <input type="text" name="email" placeholder="Email"/>

                    <label>Password:</label>
                    <input type="text" name="password" placeholder="Password"/>

                    <label>Verify Password:</label>
                    <input type="text" name="verify-password" placeholder="Verify Password"/>
                </form>
            </div>
        )
    }
}