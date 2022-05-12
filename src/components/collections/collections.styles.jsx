import styled from 'styled-components';


export const CollectionsBox = styled.div`

`;

export const CollectionsTitle = styled.h2`
    font-size: 38px;
    margin: 0 auto 30px;
    text-align: center;
`;

export const CollectionsItems = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
    & .collection-item {
        margin-bottom: 30px;
    }
`;

