import React from 'react';
import styled from 'styled-components';

export const StyledButton = styled.button`
    border: none;
    color: 9292d8;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    color: #8a8ae7;

    &:hover {
        background-color: #8080ca;
        color: white;
       
    }

    
`;

const Button = (props) => {
    return <StyledButton>{props.buttonText}</StyledButton>
}

export default Button;