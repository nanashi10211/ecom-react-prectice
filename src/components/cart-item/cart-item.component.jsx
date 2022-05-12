
import {CartItemContainer, CartItemImage, CartItemDetails,CartItemDetailsName} from "./cart-item.styles";


const CartItem = ({ item: {imageUrl, price, name, quantity}}) => {
    return (
        <CartItemContainer >
            <CartItemImage src={imageUrl} alt="item" />
            <CartItemDetails >
                <CartItemDetailsName >{name}</CartItemDetailsName>
                <span className="price">{quantity} x ${price}</span>
            </CartItemDetails>
        </CartItemContainer>
    )
}

export default CartItem;

