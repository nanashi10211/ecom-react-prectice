import {connect} from "react-redux";
import { selectColletion } from "../../redux/shop/shop.selector";

import CollectionItem from "../collection-item/collection-item.component";
import {CollectionsItems,CollectionsBox,CollectionsTitle} from "./collections.styles"


const Collections = ({id, collection, isCollectionsLoaded}) => {
   const {title, items} =collection;

    return (
    <CollectionsBox>
        <CollectionsTitle>{title}</CollectionsTitle>
        <CollectionsItems>
            {
                items.map(item => <CollectionItem key={item.id} item={item} />)
            }
        </CollectionsItems>
    </CollectionsBox>
)};

const mapStateToProps = (state, ownProps) => ({
    collection: selectColletion(ownProps.id)(state)
})


export default connect(mapStateToProps)(Collections);