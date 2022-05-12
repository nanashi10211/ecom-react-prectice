import { createSelector } from "reselect";


const selectShop = state => state.shop;

export const selectColletions = createSelector(
    [selectShop],
    shop => shop.collections,
);

export const selectCollectionsForPreview = createSelector(
    [selectColletions],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectColletion = collectionUrlParam => createSelector(
    [selectColletions],
    collections => collections ? collections[collectionUrlParam]: null
);

export const selectColletionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
);

