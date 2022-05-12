import { Component } from "react";
import styled from "styled-components"


const Text = styled.p`
    color: red;
    font-weight: blod;
    cursor: pointer;
    &:hover {
        color: blue;
    }
`;
const Box = styled.div`
    background: blue;
    margin: 50px auto;
    padding: 50px;
    display: ${({show}) => show ? "block" : "none"};
    height: 100px;
    width: 100px;
`;


class TestStyled extends Component {
    constructor() {
        super();
        this.state = {
            isShow: true,
        }
    }

    render() {

        return (
            <div>
                <Text onClick={() => this.setState({isShow: !this.state.isShow})}>Test me</Text>
                <Box show={this.state.isShow} />
            </div>
        )
    }
}


export default TestStyled