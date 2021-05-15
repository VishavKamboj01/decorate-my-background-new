import styled, { keyframes } from "styled-components";

import { motion, AnimatePresence } from "framer-motion";

import { NavLink } from "react-router-dom";

//Animations

export const leftArrowAnimation = keyframes`
  0%{
    transform : translateX(1px);
  }

  50%{
    transform : translateX(-15px);
  }

  100%{
    transfrom:translateX(1px);
  }
`;

export const rightArrowAnimation = keyframes`
  0%{
    transform : translateX(1px);
  }

  50%{
    transform : translateX(15px);
  }

  100%{
    transfrom:translateX(1px);
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
`;

export const WhyBackgroundsSection = styled.div`
  width: 100%;
  display: flex;
  padding-top: 60px;
  padding-bottom: 110px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  background-color: #121d31;
`;

export const WhyBackgroundsHeading = styled.h1`
  color: #eee;
  font-weight: bold;
  font-size: 3rem;
  font-family: roboto_regular;
  background-image: linear-gradient(90deg, #e188fc 0%, #84d4ff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (max-width: 812px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 700px) {
    font-size: 1.5rem;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 80px;
  width: 100%;

  @media screen and (max-width: 1300px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const IconCombo = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const InfoCard = styled.div`
  padding: 10px;
  display: flex;
  width: 300px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 3px #274071;
  background-color: #17243b;
  border-top-right-radius: 20px;
  margin-bottom: 40px;

  @media screen and (max-width: 600px) {
    width: 80%;
  }
`;

export const Icon = styled.img`
  width: 60px;
  margin-bottom: 10px;
`;

export const CardHeading = styled.h6`
  font-size: 1rem;
  font-family: roboto_regular;
  text-align: center;
  color: white;
  margin-top: 5px;
`;

export const CardText = styled.p`
  text-align: center;
  padding: 5px;
  font-family: OpenSans_regular;
  color: gray;
  margin-bottom: 10px;
`;

export const CardNote = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  bottom: -150px;
  z-index: 11;
  width: 40%;
  padding: 15px 20px;
  border-top-right-radius: 20px;
  box-shadow: 0 0 3px #274071;
  background: #17243b;

  @media screen and (max-width: 910px) {
    width: 60%;
  }

  @media screen and (max-width: 700px) {
    bottom: -180px;
  }

  @media screen and (max-width: 600px) {
    bottom: -150px;
    width: 80%;
  }
`;

export const CardNoteIcon = styled.img`
  width: 60px;
  margin-bottom: 10px;
`;

export const CardNoteHeading = styled.h6`
  font-size: 1.2rem;
  text-align: center;
  font-family: roboto_regular;
  color: white;
  margin-top: 5px;
`;

export const CardNoteText = styled.p`
  text-align: center;
  font-family: OpenSans_regular;
  padding: 5px;
  color: gray;
  margin-bottom: 10px;
`;

export const RegisterButtom = styled(NavLink)`
  padding: 10px;
  color: white;
  font-family: OpenSans_regular, sans-serif;

  position: relative;
  width: 160px;
  height: 50px;
  z-index: 20;
  text-align: center;
  background: linear-gradient(90deg, #ac3459 0%, #ee9984 100%);

  :hover {
    text-decoration: none;
    color: white;
    ::after {
      height: 0;
    }
  }

  ::after {
    content: "";
    width: 155px;
    height: 46px;
    right: 2px;
    z-index: -1;
    top: 2px;
    position: absolute;
    background: #17243b;
    transition: 0.3s ease;
  }

  @media screen and (max-width: 1000px) {
    background: linear-gradient(90deg, #ac3459 0%, #ee9984 100%);
    ::after {
      display: none;
    }
  }
  @media screen and (max-width: 700px) {
    width: 140px;
    height: 40px;
    padding: 7px;
  }
`;

//Sample Components

export const SamplePageSection = styled.div`
  background-color: #efeae7;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const SampleHeading = styled.h1`
  margin-top: 250px;
  font-family: roboto_regular;
  background-image: linear-gradient(90deg, #e188fc 0%, #84d4ff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 3rem;
  font-weight: bold;
  display: flex;
  text-align: center;

  @media screen and (max-width: 885px) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 775px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 665px) {
    font-size: 1.5rem;
  }
`;

export const SlideShowContainer = styled.div`
  display: flex;
  position: relative;
`;

export const Slideshow = ({ image }) => (
  <AnimatePresence>
    <motion.img
      key={image.src}
      src={image.src}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      style={{
        objectFit: "cover",
        width: "100vw",
        marginTop: "40px",
        marginBottom: "40px",
        height: "90vh",
        borderRadius: "10px",
        boxShadow: "0 0 20px darkgrey",
      }}
    />
  </AnimatePresence>
);

export const ButtonsBanner = styled.div`
  width: 220px;
  height: 400px;
  display: flex;
  justify-content: space-around;
  position: absolute;
  z-index: 10;
  top: 310px;
  right: 300px;
  background-color: rgba(239, 234, 231, 0.7);
  box-shadow: 0px 23px 91px -33px rgba(255, 255, 255, 0.75);
  -webkit-box-shadow: 0px 23px 91px -33px rgba(255, 255, 255, 0.75);
  -moz-box-shadow: 0px 23px 91px -33px rgba(255, 255, 255, 0.75);

  @media screen and (max-width: 650px) {
    width: 150px;
    height: 275px;
    right: 100px;
  }
`;

export const ImageTitle = styled.h4`
  color: #27394d;
  position: absolute;
  width: 190px;
  object-fit: cover;
  text-align: center;
  font-weight: bold;
  font-size: 2rem;
  font-family: roboto_medium_italic;
  top: 90px;

  @media screen and (max-width: 650px) {
    font-size: 1.2rem;
    width: 150px;
    top: 60px;
  }
`;

export const DownloadButton = styled.a`
  position: absolute;
  bottom: 40px;
  padding: 8px 20px;
  outline: none;
  border: 0px;
  font-family: roboto_medium_italic;
  background: linear-gradient(45deg, #e188fc 0%, #84d4ff 100%);
  color: white;
  clip-path: polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%);
  transition: clip-path 0.5s;
  cursor: pointer;
  :hover {
    text-decoration: none;
    color: white;
    clip-path: polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%);
  }

  @media screen and (max-width: 650px) {
    padding: 4px, 10px;
  }
`;

export const LeftArrow = styled.img`
  width: 45px;
  height: 45px;
  cursor: pointer;
  object-fit: contain;
  position: absolute;
  bottom: 120px;
  transition: 0.2s ease-in-out;
  left: 25px;
  animation-name: ${(props) => (props.animate ? leftArrowAnimation : "")};
  animation-duration: 0.4s;

  @media screen and (max-width: 650px) {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
`;

export const RightArrow = styled.img`
  width: 45px;
  height: 45px;
  cursor: pointer;
  object-fit: contain;
  transition: 0.2s ease-in-out;
  position: absolute;
  bottom: 120px;
  right: 25px;
  animation-name: ${(props) => (props.animate ? rightArrowAnimation : "")};
  animation-duration: 0.4s;

  @media screen and (max-width: 650px) {
    width: 40px;
    height: 40px;
    margin-left: 10px;
  }
`;
