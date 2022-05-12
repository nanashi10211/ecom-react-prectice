
import { ReactComponent as Logo } from "../../assets/crown.svg";
// import { auth } from "../../firebase/firebase.utils";

// redux
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";

import {setCurrentUser} from "../../redux/user/user.actions";
import { selectCartHidden } from "../../redux/cart/cart.selector";
import { selectCurrrentUser } from "../../redux/user/user.selector";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { HeaderContainer, LogoContainer,OptionsContainer,OptionLink } from "./header.styles";

const Header = ({ currentUser, setCurrentUser, hidden}) => {
   
    const signOut = () => {
        fetch("http://localhost:5000/auth/signout")
        .then(res => {
            console.log(res);
            return res.json()
        }).then(resData => {
            setCurrentUser(resData)
            console.log(resData);
        }).catch(err => {
            setCurrentUser(err);
            console.log(err);
        })
    }
   return (
   
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className="logo" />
        </LogoContainer>
        <OptionsContainer >
            <OptionLink to="/shop" >
                SHOP
            </OptionLink>
            <OptionLink to="/shop" >
                CONTACT
            </OptionLink>
           
            {
                currentUser ?
                <OptionLink as="div" onClick={signOut}>SIGN OUT</OptionLink>
                :
                <OptionLink to="/signin" >
                 SIGN IN
                </OptionLink>
            }
            <CartIcon />
        </OptionsContainer>
        {
            hidden ? null:
             <CartDropdown />
        }
    </HeaderContainer>
)}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrrentUser,
    hidden: selectCartHidden
});

const mapDispatchToProps = dispatch =>({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})


export default  connect(mapStateToProps, mapDispatchToProps)(Header);
