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
import Footer from "../Footer/Footer";
import { toast } from "react-toastify";
import Tooltip from "@material-ui/core/Tooltip";
import { register } from "../../Services/userService";
// import Joi from "@hapi/joi";
// import Joi from "joi";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  CircularProgress,
} from "@material-ui/core";
import { LoadingImage, LoadingText } from "../Categories/LoadingAnimation";
import infinity from "../../icons/infinity.png";

export default function SignUp(props) {
  const [inputFeilds, setInputFeilds] = useState({
    userName: "",
    email: "",
    password: "",
    checkBox: false,
  });

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // const schema = {
  //   userName: Joi.string().min(5).required().label("Username"),
  //   email: Joi.string().email().required().label("Email"),
  //   password: Joi.string().min(8).required().label("Password"),
  // };

  const handleInputChange = (input) => {
    const inputs = { ...inputFeilds };
    inputs[input.currentTarget.id] = input.currentTarget.value;
    setInputFeilds(inputs);
  };

  const handleRegisterClick = async (e) => {
    e.preventDefault();
    const user = {
      userName: inputFeilds.userName,
      email: inputFeilds.email,
      password: inputFeilds.password,
    };

    // const { error } = Joi.validate(user, schema);
    // if (error) {
    //   toast.error(error.details[0].message);
    //   return;
    // }
    if (!inputFeilds.checkBox) {
      toast.error('"Terms and Conditions" must be checked');
      return;
    }

    setIsDialogOpen(true);
    try {
      const result = await register(user);
      localStorage.setItem("token", result.headers["x-auth-token"]);
      toast.success("Successfully Registered");
      setIsDialogOpen(false);
      window.location = "/";
    } catch (err) {
      setIsDialogOpen(false);
      toast.error("User with the same email already exists");
    }
  };

  const handleCheckboxClicked = () => {
    const input = { ...inputFeilds };
    if (input.checkBox) {
      input.checkBox = false;
    } else {
      input.checkBox = true;
    }

    setInputFeilds(input);
  };

  const handleLoginClick = () => {
    props.history.push("/login");
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
            <Tooltip title="User name cannot be empty" arrow placement="right">
              <InputFeild
                id="userName"
                value={inputFeilds.userName}
                onChange={handleInputChange}
                placeholder="User Name"
              ></InputFeild>
            </Tooltip>
          </InputFeildContainer>
          <InputFeildContainer>
            <Icon className="fa-3x" icon={faEnvelope} top="113px" />
            <Tooltip
              title="Email should be a valid email address"
              arrow
              placement="right"
            >
              <InputFeild
                id="email"
                value={inputFeilds.email}
                onChange={handleInputChange}
                placeholder="Email"
              ></InputFeild>
            </Tooltip>
          </InputFeildContainer>
          <InputFeildContainer>
            <Icon className="fa-3x" icon={faKey} top="183px" />
            <Tooltip
              title="Password must be atleast 8 characters long"
              arrow
              placement="right"
            >
              <InputFeild
                id="password"
                value={inputFeilds.password}
                onChange={handleInputChange}
                type="password"
                placeholder="Password"
              ></InputFeild>
            </Tooltip>
          </InputFeildContainer>
          <TermsAndServices>
            <Checkbox onClick={handleCheckboxClicked} />
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
            Already using Backgrounds? <b onClick={handleLoginClick}>Log in</b>
          </Login>
          <FontAwesomeIcon
            className="fa-2x"
            onClick={handleLoginClick}
            style={{
              transform: "scale(0.7)",
              color: "#271b29",
              paddingBottom: "5px",
              cursor: "pointer",
            }}
            icon={faSignInAlt}
          />
        </LoginContainer>
        <Dialog
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          open={isDialogOpen}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title" style={{ alignItems: "center" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <LoadingImage src={infinity} animate />
              <LoadingText>Registring your details please wait...</LoadingText>
            </div>
          </DialogTitle>
        </Dialog>
      </RegisterFormContainer>
      <Footer hidden="true" />
    </RegisterPage>
  );
}
