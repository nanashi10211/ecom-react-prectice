
import {Component} from 'react'

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

// firebase
// import { auth, createUserProfileDocument,TOKEN } from "../../firebase/firebase.utils";
// import { signInWithCustomToken, getAuth } from 'firebase/auth';

import "./sign-up.styles.scss";

class SignUp extends Component {

    constructor() {
        super();

        this.state = {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        
        if(password !== confirmPassword) {
            alert('Password don\'t match');
            return;
        }
        try {
           

        } catch(error) {
            console.error(error.message);
        }
    }
    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({ [name]: value });
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className="sign-up">
                <h2 className='title'>I do not have a account</h2>
                <span>Sign up with email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput 
                      type="text"
                      name="displayName"
                      value={displayName}
                      label='Display Name'
                      handleChange={this.handleChange}
                      required
                    />
                    <FormInput 
                      type="email"
                      name="email"
                      value={email}
                      label='Email'
                      handleChange={this.handleChange}
                      required
                    />
                    <FormInput 
                      type="password"
                      name="password"
                      value={password}
                      label='Password'
                      handleChange={this.handleChange}
                      required
                    />
                    <FormInput 
                      type="password"
                      name="confirmPassword"
                      value={confirmPassword}
                      label='Confirm Password'
                      handleChange={this.handleChange}
                      required
                    />

                    <CustomButton type="submit">SIGN UP</CustomButton>

                </form>
            </div>
        )
    }



}

export default SignUp



