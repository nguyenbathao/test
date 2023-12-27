import React from "react";
import { FaCheck } from "react-icons/fa";
import styled from "styled-components";

export const StyledDiv = styled.div`
  background-color: white !important;
  text-align: left !important;
  color: black !important;
  font-size: 20px;
  padding:10px;
  margin:20px;
`;

const Text = (props) => {
  return <StyledDiv> <FaCheck/> {props.text}</StyledDiv>;
};

export default Text;
