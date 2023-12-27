import React from "react";
import styled from "styled-components";

export const StyledDiv = styled.div`
  background-color: aqua !important;
  text-align: left !important;
  color: white !important;
  font-size: 20px;
  margin: 10px;
  padding: 30px;
  border-radius: 10px 10px 0 0;
`;

const TextComponent = (props) => {
  return <StyledDiv>{props.text}</StyledDiv>;
};

export default TextComponent;
