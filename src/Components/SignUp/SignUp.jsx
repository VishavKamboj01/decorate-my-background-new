import React, { useState } from "react";
import {
  BackgroundCutOut,
  Checkbox,
  Icon,
  Heading,
  InputFeild,
  Register,
  RegisterForm,
  RegisterFormContainer,
  RegisterPage,
  SubHeading,
  TermsAndServices,
  TermsText,
  InputFeildContainer,
  Login,
  LoginContainer,
} from "./SignUpComponents";
import {
  faUser,
  faEnvelope,
  faKey,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SignUp(props) {
  const [inputFeilds, setInputFeilds] = useState({
    fullName: "",
    emailAddress: "",
    password: "",
  });

  const handleInputChange = (input) => {
    const inputs = { ...inputFeilds };
    inputs[input.currentTarget.id] = input.currentTarget.value;
    setInputFeilds(inputs);
  };

  const handleRegisterClick = () => {
    props.history.replace("/");
  };

  return (
    <RegisterPage>
      <BackgroundCutOut />
      <RegisterFormContainer>
        <Heading>Registration</Heading>
        <SubHeading>Start downloading HD wallpapers today.</SubHeading>
        <RegisterForm>
          <InputFeildContainer>
            <Icon className="fa-3x" icon={faUser} top="43px" />
            <InputFeild
              id="fullName"
              value={inputFeilds.fullName}
              onChange={handleInputChange}
              placeholder="Full Name"
            ></InputFeild>
          </InputFeildContainer>
          <InputFeildContainer>
            <Icon className="fa-3x" icon={faEnvelope} top="113px" />
            <InputFeild
              id="emailAddress"
              value={inputFeilds.emailAddress}
              onChange={handleInputChange}
              type="email"
              placeholder="Email address"
            ></InputFeild>
          </InputFeildContainer>
          <InputFeildContainer>
            <Icon className="fa-3x" icon={faKey} top="183px" />
            <InputFeild
              id="password"
              value={inputFeilds.password}
              onChange={handleInputChange}
              type="password"
              placeholder="Password"
            ></InputFeild>
          </InputFeildContainer>
          <TermsAndServices>
            <Checkbox />
            <TermsText>
              I have read and agree to the{" "}
              <b>
                <u>terms of service</u>
              </b>
            </TermsText>
          </TermsAndServices>
          <Register onClick={handleRegisterClick}>Register</Register>
        </RegisterForm>
        <LoginContainer>
          <Login>
            Already using Backgrounds? <b>Log in</b>
          </Login>
          <FontAwesomeIcon
            className="fa-2x"
            style={{
              transform: "scale(0.7)",
              color: "#271b29",
              paddingBottom: "5px",
              cursor: "pointer",
            }}
            icon={faSignInAlt}
          />
        </LoginContainer>
      </RegisterFormContainer>
    </RegisterPage>
  );
}
