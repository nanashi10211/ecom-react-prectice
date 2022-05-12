
import { useParams } from "react-router-dom"

import Collections from "../../components/collections/collections.component";

import { CollectionPageBox } from "./collection-page.styles";

const CollectionsPage = ({...allprops}) => {
    const params = useParams();
    return (
    <CollectionPageBox>
        <Collections id={params.collectionId}/>
    </CollectionPageBox>
)};

export default CollectionsPage;



