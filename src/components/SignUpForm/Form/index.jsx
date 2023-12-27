import { useState } from "react";
import styled from "styled-components";
import LabeledInput from "..";
import { StyledButton } from "../Button";
import Text from "../../Sidebar/Text/index2";

// const StyledWrapperInputForm = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 6px;
//   margin-bottom: 24px;
// `;

const InputForm = (props) => {
  const [userName, setUsername] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmpassword] = useState();
  const [email, setEmail] = useState();

  const handleSubmitForm = (event) => {
    if (!userName) {
      console.log("Bạn chưa nhập Username");
    }
    if (!password) {
      console.log("Bạn chưa nhập Password");
    }
    if (!confirmPassword) {
      console.log("Bạn chưa nhập Confirm Password");
    }
    if (!email) {
      console.log("Bạn chưa nhập Email");
    }
    if (password !== confirmPassword) {
      console.log("Password phải giống với Password Confirm");
    }
  };

  const obj = {
    username: userName,
    password: password,
    confirmPassword: confirmPassword,
    email: email,
  };
  return (
    <form onSubmit={handleSubmitForm}>
      <LabeledInput
        value={userName}
        label="Username"
        id="username"
        type="text"
        handleSetValue={(e) => {
          setUsername(e.target.value);
        }}
      />
      <LabeledInput
        value={password}
        label="Password"
        id="password"
        type="password"
        handleSetValue={(e) => {
          setPassword(e.target.value);
        }}
      />
      <LabeledInput
        value={confirmPassword}
        label="Password Comfirm "
        id="passwordconfirm"
        type="password"
        handleSetValue={(e) => {
          setConfirmpassword(e.target.value);
        }}
      />
      <LabeledInput
        value={email}
        label="Email"
        id="email"
        type="email"
        handleSetValue={(e) => {
          setEmail(e.target.value);
        }}
      />
      <h5>By clicking up the 'Sign up' below, I certify that i have read and agree to the TMDB term of use and privacy policy</h5>
      <StyledButton type="submit">Đăng ký</StyledButton>
      <StyledButton>Cancel</StyledButton>
    </form>
  );
};

export default InputForm;
