import React, { useState } from "react";
import {
  BackgroundCutOut,
  Icon,
  Heading,
  InputFeild,
  Register,
  RegisterForm,
  RegisterFormContainer,
  RegisterPage,
  SubHeading,
  InputFeildContainer,
} from "../SignUp/SignUpComponents";

import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";

import Footer from "../Footer/Footer";

import { login } from "../../Services/userService";
import { toast } from "react-toastify";
import Tooltip from "@material-ui/core/Tooltip";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  CircularProgress,
} from "@material-ui/core";
import { LoadingImage, LoadingText } from "../Categories/LoadingAnimation";
import infinity from "../../icons/infinity.png";

export default function Login(props) {
  const [inputFields, setInputFields] = useState({
    email: "",
    password: "",
  });

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleInputChange = (input) => {
    const inputs = { ...inputFields };
    inputs[input.currentTarget.id] = input.currentTarget.value;
    setInputFields(inputs);
  };

  const handleLoginClick = async () => {
    const user = { ...inputFields };

    setIsDialogOpen(true);
    try {
      const { data: jwt } = await login(user);
      localStorage.setItem("token", jwt);
      toast.success("Login Successful");
      setIsDialogOpen(false);
      window.location = "/";
    } catch (err) {
      setIsDialogOpen(false);
      toast.error("Invalid email or Password");
      console.log(err);
    }
  };

  return (
    <RegisterPage>
      <BackgroundCutOut />
      <RegisterFormContainer>
        <Heading>Login</Heading>
        <SubHeading>Start downloading HD wallpapers today.</SubHeading>
        <RegisterForm style={{ height: "250px", paddingBottom: "0" }}>
          <InputFeildContainer>
            <Icon className="fa-3x" icon={faUser} top="43px" />
            <Tooltip title="Email is required" arrow>
              <InputFeild
                id="email"
                onChange={handleInputChange}
                value={inputFields.email}
                placeholder="Email"
              ></InputFeild>
            </Tooltip>
          </InputFeildContainer>
          <InputFeildContainer>
            <Icon className="fa-3x" icon={faKey} top="183px" />
            <Tooltip title="Password is required" arrow>
              <InputFeild
                id="password"
                onChange={handleInputChange}
                value={inputFields.password}
                type="password"
                placeholder="Password"
              ></InputFeild>
            </Tooltip>
          </InputFeildContainer>
          <Register onClick={handleLoginClick} style={{ height: "40px" }}>
            Login
          </Register>
        </RegisterForm>
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
              <LoadingText>Logging in please wait...</LoadingText>
            </div>
          </DialogTitle>
        </Dialog>
      </RegisterFormContainer>
      <Footer hidden="true" />
    </RegisterPage>
  );
}
