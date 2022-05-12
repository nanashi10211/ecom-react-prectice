const INITIAL_STATE = {
    sections: [
        {
            title: "hats",
            imageUrl: "http://localhost:5000/18.jpg",
            id: 1,
            linkUrl: "shop/hats"
        },
        {
            title: "jackets",
            imageUrl: "http://localhost:5000/20.jpg",
            id: 2,
            linkUrl: "shop/jackets"
        },
        {
            title: "sneakers",
            imageUrl: "http://localhost:5000/30.jpg",
            id: 3,
            linkUrl: "shop/sneakers"

        },
        {
            title: "womens",
            imageUrl: "http://localhost:5000/27.jpg",
            size: "large",
            id: 4,
            linkUrl: "shop/womens"

        },
        {
            title: "mens",
            imageUrl: "http://localhost:5000/13.jpg",
            size: "large",
            id: 5,
            linkUrl: "shop/mens"

        },
    ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
}


export default directoryReducer;