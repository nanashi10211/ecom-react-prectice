import React from "react";

import {connect} from "react-redux";

import { addItem } from "../../redux/cart/cart.actions";


import {CollectionButtom,CollectionFooter,CollectionFooterName,CollectionFooterPrice,CollectionImage,CollectionItemContainer} from "./collection-item.styles";

const CollectionItem = ({ item, addItem }) => {
    const {name, price, imageUrl} = item;
    return (
    <CollectionItemContainer >
        <CollectionImage className="image"  imageUrl={imageUrl} />
        <CollectionFooter>
            <CollectionFooterName>{ name }</CollectionFooterName>
            <CollectionFooterPrice>${ price }</CollectionFooterPrice>

        </CollectionFooter>  

        <CollectionButtom className="custom-button" onClick={() => addItem(item)} inverted> Add To Cart </CollectionButtom>
    </CollectionItemContainer>
)}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem)
