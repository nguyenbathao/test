import React from "react";
import styled from "styled-components";

const StyledWrapperInputForm = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  padding: 5px;
  border-radius: 10px ;
  width: 100%;
  height: 40px;
  padding-left: 0px;
`;
function LabeledInput({ label, id, type = "text", value, onChange }) {
  return (
    <StyledWrapperInputForm>
      <label >{label}</label>
      <input  type={type} value={value} onChange={onChange} />
    </StyledWrapperInputForm>
  );
}

export default LabeledInput;
