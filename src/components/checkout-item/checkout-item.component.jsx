
import { connect } from "react-redux";
import { clearItemFromCart , addItem, removeItem} from "../../redux/cart/cart.actions";

import {
    CheckoutItemContainer, 
    ImageContainer,
    ItemQuantity,
    ItemQuantityArrow, 
    ItemQuantityValue, 
    RemoveItem,
    ItemName,
    ItemPrice 
} from "./checkout-item.styles"


const CheckoutItem = ({ cartItem, clearItem , addItem, removeItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    return (
    <CheckoutItemContainer className="checkout-item">
        <ImageContainer className="image-container">
            <img src={imageUrl} alt="item"/>
        </ImageContainer>
        <ItemName>{name}</ItemName>
        <ItemQuantity >
            <ItemQuantityArrow  onClick={() => removeItem(cartItem)}>&#10094;</ItemQuantityArrow>
            <ItemQuantityValue >{quantity}</ItemQuantityValue>
            <ItemQuantityArrow  onClick={() => addItem(cartItem)}>&#10095;</ItemQuantityArrow>
            
        </ItemQuantity>
        <ItemPrice >{price}</ItemPrice>
        <RemoveItem  onClick={() => clearItem(cartItem)}>
            &#10005;
        </RemoveItem>
    </CheckoutItemContainer>
)};

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
});

export default  connect(null, mapDispatchToProps)(CheckoutItem);