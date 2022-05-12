import ShopActionTypes from "./shop.types";


export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTION_START
});

export const fetchCollectionsSuccess = (collectionMap) => ({
    type: ShopActionTypes.FETCH_COLLECTION_SUCCESS,
    payload: collectionMap
});

export const fetchCollectionsFailure = (errorMessage) => ({
    type: ShopActionTypes.FETCH_COLLECTION_FAILURE,
    payload: errorMessage
})

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        dispatch(fetchCollectionsStart())
        fetch("http://localhost:5000/shop")
        .then(res => res.json())
        .then(resData => {
         dispatch(fetchCollectionsSuccess(resData))
        }).catch(error => {
           dispatch(fetchCollectionsFailure(error.message))
        })
    }
}


