import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const RegisterPage = styled.div`
  width: 100vw;
  height: 100vh;
  background: #efeae7;
  position: relative;
`;

export const RegisterFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
  background: #efeae7;
  width: 100vw;
`;

export const BackgroundCutOut = styled.div`
  background: #271b29;
  position: absolute;
  width: 100%;
  z-index: 1;
  height: 100vh;
  top: 0;
  clip-path: ellipse(70% 54% at 50% 0%);

  @media screen and (max-width: 1100px) {
    clip-path: ellipse(70% 60% at 50% 0%);
  }

  @media screen and (max-width: 840px) {
    clip-path: ellipse(90% 90% at 50% 0%);
  }

  @media screen and (max-width: 400px) {
    clip-path: ellipse(90% 40% at 50% 0%);
  }
`;

export const Heading = styled.h1`
  color: white;
  z-index: 2;
  margin-top: 50px;
  font-size: 3rem;

  @media screen and (max-width: 600px) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 400px) {
    font-size: 2rem;
  }
`;

export const SubHeading = styled.p`
  color: #efeae7;
  margin-top: 20px;
  z-index: 2;
  font-size: 1.2rem;

  @media screen and (max-width: 600px) {
    font-size: 1rem;
  }
`;

export const RegisterForm = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 2;
  align-items: center;
  margin-top: 50px;
  background: white;
  width: 400px;
  padding-top: 30px;
  padding-bottom: 20px;
  height: 370px;
  border: 2px solid #271b29;
  border-radius: 10px;

  @media screen and (max-width: 600px) {
    width: 350px;
    height: 320px;
  }

  @media screen and (max-width: 400px) {
    width: 300px;
    height: 270px;
  }
`;

export const InputFeildContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  justify-content: center;
  height: 45px;
  margin-bottom: 20px;
`;

export const Icon = styled(FontAwesomeIcon)`
  position: absolute;
  color: #271b29;
  background: #ee9984;
  border-radius: 60px;
  padding-left: 10px;
  padding-right: 10px;
  transform: scale(0.9);
  left: 2px;
  top: 0;

  @media screen and (max-width: 600px) {
    transform: scale(0.8);
    top: -2px;
  }

  @media screen and (max-width: 400px) {
    top: -7px;
    transform: scale(0.6);
  }
`;

export const InputFeild = styled.input`
  width: 85%;
  height: 100%;
  text-align: left;
  text-indent: 20px;
  outline: none;
  border: 2px solid #271b29;
  border-radius: 8px;

  :focus {
    box-shadow: 0 0 10px #271b29;
  }
`;

export const TermsAndServices = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  align-items: center;
  justify-content: center;
`;

export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  width: 15px;
  height: 15px;
`;

export const TermsText = styled.p`
  color: #271b29;
  margin-left: 10px;
  padding-top: 13px;
  font-size: 0.8rem;

  @media screen and (max-width: 400px) {
    font-size: 0.7rem;
  }
`;

export const Register = styled.button`
  background: #ac3459;
  width: 40%;
  height: 13%;
  border: 0;
  border-radius: 20px;
  outline: none;
  color: white;
  text-align: center;
  margin-top: 10px;
  padding: 6px;

  @media screen and (max-width: 420px) {
    padding: 1px;
    margin-bottom: 10px;
  }
`;

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;

  @media screen and (max-width: 450px) {
    margin-top: 40px;
  }
`;

export const Login = styled.p`
  width: 100%;
  text-align: center;
  font-size: 1rem;
  margin-top: 10px;
  color: #271b29;
  position: relative;

  cursor: pointer;

  ::after {
    content: "";
    position: absolute;
    width: 75px;
    height: 2px;
    background: #271b29;
    bottom: -2px;
    right: -25px;
  }
`;
