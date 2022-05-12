import { Component } from 'react';
import { Route ,Routes, Navigate} from 'react-router-dom';

// redux
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";

import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrrentUser } from './redux/user/user.selector';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

// test
import TestStyled from './test-styled-components/test-styled-page.component';



// firebase auth
// import {auth, createUserProfileDocument} from "./firebase/firebase.utils";
// import {getDoc} from "firebase/firestore";


class App extends Component {

  // unsubscribeFromAuth = null;

  componentDidMount() {
    /**
     * Firebase code
     */
    //  this.unsubscribeFromAuth =  auth.onAuthStateChanged( async userAuth => {
    //   if(userAuth) {
    //     const userRef =  createUserProfileDocument(userAuth);

    //     const userSnap = await getDoc(await userRef);

    //     if(userSnap.exists()) {
    //       this.setState({
    //         currentUser: {
    //           id: userSnap.id,
    //           ...userSnap.data()
    //         }
    //       }, () => {
    //         console.log(this.state.currentUser);
    //       });
    //     } 
    //   }
    //   this.setState({ currentUser: userAuth });
    // });
    const {setCurrentUser} = this.props;
    fetch("http://localhost:5000/auth")
    .then(res => {
      return res.json()
    }).then(resData => {
      console.log("res data is ",resData);
      setCurrentUser(resData)
    }).catch(err => {
      setCurrentUser(null)
    })


  }


  render() {
    console.log("from apps ",this.props.currentUser);
    return (
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/shop/*' element={<ShopPage />} />
          <Route path='/checkout' element={<CheckoutPage />} />
          <Route path="/signin" element={ this.props.currentUser ? <Navigate to="/" /> : <SignInAndSignUpPage />} />
          <Route path='/test' element={ <TestStyled />} />
        </Routes>
      </div>
    );
  }
  
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});


export default  connect(mapStateToProps, mapDispatchToProps )(App);
