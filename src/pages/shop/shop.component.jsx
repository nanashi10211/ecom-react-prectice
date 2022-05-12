import React from "react";
import {Routes, Route} from "react-router-dom";

import {connect} from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionsPage from "../collections-page/collections-page.component";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import { selectColletionFetching , selectIsCollectionsLoaded} from "../../redux/shop/shop.selector";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

import "./shop.styles.scss";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner =WithSpinner(CollectionsPage);


class ShopPage extends React.Component {  
 
    componentDidMount(){
        const { fetchCollectionsStartAsync } = this.props;
        fetchCollectionsStartAsync();
    }
   
    render() {
        const { isFetching,isCollectionsLoaded } = this.props;
        console.log("isFetching is", isFetching);
        return ( <div className="shop-page">
            <Routes>
                <Route path="*" element={<CollectionsOverviewWithSpinner isLoading={isFetching} />} />
                <Route path=":collectionId" element= { <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} />} />
            </Routes>
        </div>);
    };
 }
   
const mapStateToProps = createStructuredSelector({
    isFetching: selectColletionFetching,
    isCollectionsLoaded: selectIsCollectionsLoaded
});

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(mapStateToProps,mapDispatchToProps)(ShopPage);

