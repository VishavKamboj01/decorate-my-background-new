import styled from "styled-components";
import { TextField } from "@material-ui/core";

export const TestimonialSection = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #efeae7;
  padding-bottom: 140px;
  position: relative;
`;

export const TestimonialHeading = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  font-family: roboto_regular;
  margin-bottom: 50px;
  padding: 10px;
  background-image: linear-gradient(90deg, #e188fc 0%, #84d4ff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (max-width: 900px) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 775px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 665px) {
    font-size: 1.5rem;
  }
`;

export const TestimonialContainer = styled.div`
  display: flex;
  justify-content: space-around;
  background: white;
  width: 100%;
  background-color: #efeae7;

  @media screen and (max-width: 850px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Testimonial = styled.div`
  display: flex;
  position: relative;
  border-radius: 10px;
  box-shadow: 0 0 20px lightGray;
  width: 350px;
  flex-direction: column;
  background: white;
  padding: 20px 30px;
  margin-bottom: 30px;

  @media screen and (max-width: 1300px) {
    transform: scale(0.9);
  }
  @media screen and (max-width: 1000px) {
    transform: scale(0.8);
  }

  @media screen and (max-width: 850px) {
    transform: scale(0.9);
    width: 300px;
  }
`;

export const Comma = styled.img`
  width: 60px;
  position: absolute;
  right: -30px;
  transform: rotateZ(30deg);
`;

export const CircleCutOut = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  z-index: 1;
  left: 0;
  top: 0;
  background: linear-gradient(45deg, #ac3459 0%, #ee9984 100%);
  clip-path: circle(34.3% at 0 0);
`;

export const ImageNameContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

export const ImagePerson = styled.img`
  width: 80px;
  height: 80px;
  z-index: 2;
  border-radius: 40px;
  object-fit: cover;
`;

export const ImagePersonName = styled.h5`
  color: black;
  font-family: roboto_regular;
  font-weight: 600;
  margin-left: 30px;
`;

export const PersonResponse = styled.p`
  color: grey;
  height: 150px;
  overflow: hidden;
  font-family: OpenSans_regular;
  padding-bottom: 10px;
`;

export const SocialInfoContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding-top: 20px;
  border-top: 1px solid #ac3459;
  cursor: pointer;
`;

export const InstagramIcon = styled.img`
  width: 25px;
  margin-right: 8px;
  cursor: pointer;
  transition: 0.2s linear;
  :hover {
    transform: scale(1.1);
  }
`;

export const TwitterIcon = styled.img`
  width: 25px;
  cursor: pointer;
  margin-right: 8px;
  transition: 0.2s linear;

  :hover {
    transform: scale(1.1);
  }
`;

export const LinkedinIcon = styled.img`
  cursor: pointer;
  width: 25px;
  margin-right: 8px;
  transition: 0.2s linear;

  :hover {
    transform: scale(1.1);
  }
`;

export const FacebookIcon = styled.img`
  width: 25px;
  cursor: pointer;
  margin-right: 8px;
  transition: 0.2s linear;

  :hover {
    transform: scale(1.1);
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 50px;

  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

export const ViewMoreButton = styled.button`
  width: 200px;
  height: 40px;
  border: 2px solid black;
  background: transparent;
  outline: none;
  font-family: monospace;
  transition: 0.3s ease-in-out;
  margin-right: 20px;
  margin-bottom: 20px;

  :hover {
    border: 0;
    background: black;
    color: white;
  }
`;

export const YourExperienceButton = styled.button`
  width: 200px;
  height: 40px;
  border: 0;
  background: black;
  outline: none;
  color: white;
  font-family: monospace;
  transition: 0.3s ease-in-out;

  :hover {
    border: 2px solid black;
    background: transparent;
    color: black;
  }
`;

export const ExperienceDialogBox = styled.div`
  width: 45%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  position: absolute;
  top: 100px;
  z-index: 10;
  box-shadow: 0 0 20px gray;
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(45deg, #e188fc 0%, #84d4ff 100%);
  position: relative;
`;

export const CloseImg = styled.img`
  width: 30px;
  position: absolute;
  right: 3px;
  top: 3px;
  cursor: pointer;
`;

export const Title = styled.p`
  padding: 10px;
  font-size: 1.5rem;
  color: white;
  width: 80%;
  text-align: center;
  font-family: OpenSans_regular;

  @media screen and (max-width: 600px) {
    font-size: 1rem;
  }
`;

export const CustomTextField = styled(TextField)`
  & label.Mui-focused {
    color: #e188fc;
  }

  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: #e188fc;
    }
  }
`;

export const SubmitButton = styled.button`
  width: 75%;
  height: 40px;
  margin-top: 20px;
  padding: 5px 10px;
  background: linear-gradient(45deg, #e188fc 0%, #84d4ff 100%);
  outline: none;
  clip-path: polygon(2% 0%, 100% 0%, 98% 100%, 0% 100%);
  border: 0;
  color: white;
  justify-self: center;
  transition: 0.5s ease-in-out;
  :hover {
    clip-path: polygon(4% 0%, 100% 0%, 96% 100%, 0% 100%);
  }
`;
