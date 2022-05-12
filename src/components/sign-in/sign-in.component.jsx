import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

// firebase function
import { signInWithGoogle } from "../../firebase/firebase.utils";

import {connect} from 'react-redux';
import { setCurrentUser } from "../../redux/user/user.actions";

import "./sign-in.styles.scss";

class SignIn extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const userData = this.state;
        const { setCurrentUser } = this.props;
        this.setState({
            email: "",
            password: ""
        });
        fetch("http://localhost:5000/auth", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData),
            
        }).then(res => {
            if (res.status !== 200 & res.status !== 201) {
                throw new Error("Server error");
            }
            return res.json();
        }).then(resData => {
            console.log("from sign in",resData);
            setCurrentUser(resData);
        })
        
    }

    handleChange = (event) => {
        const {name, value} = event.target;

         this.setState({ [name]: value });
    }

    render() {

        return (
            <div className="sign-in">
                <h2>Already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email"
                        type="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label="Email"
                        required 
                        />
                    <FormInput 
                        name="password" 
                        type="password" 
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        label="Password"
                        required 
                    />
                    <div className="buttons">

                    <CustomButton type="submit"> Sign in</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn > Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }


}

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})


export default connect(null, mapDispatchToProps)(SignIn);



