import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const FooterSection = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  background-color: #121d31;
  width: 100%;
  padding-bottom: 20px;

  @media screen and (max-height: 374px) {
    margin-top: 200px;
  }
`;

export const RegisterBanner = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  position: absolute;
  top: -60px;
  z-index: 10;
  border-radius: 10px;
  background: linear-gradient(90deg, #792c4a 0%, #bd4664 50%, #f7ab8f 100%);
  width: 60%;
  height: 120px;
  display: ${(props) => (props.hidden === "true" ? "none" : "")};

  @media screen and (max-width: 1000px) {
    width: 80%;
  }
  @media screen and (max-width: 800px) {
    flex-direction: column;
    width: 70%;
  }
`;

export const RegisterBannerHeading = styled.p`
  color: white;
  font-family: roboto_regular, serif;
  font-size: 1.5rem;

  @media screen and (max-width: 800px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 400px) {
    font-size: 1rem;
  }
`;

export const BenefitContainer = styled.div`
  display: flex;
  position: absolute;
  top: 75px;
  left: 180px;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const BenefitBox = styled.div`
  display: flex;
  margin-right: 30px;
`;

export const Checkmark = styled.img`
  width: 10px;
  height: 10px;
  margin-right: 4px;
`;

export const BenefitText = styled.p`
  color: white;
  font-size: 0.7rem;
`;

export const RegisterButtom = styled(NavLink)`
  color: white;
  position: relative;
  width: 160px;
  border-radius: 30px;
  height: 45px;
  font-family: OpenSans_regular, sans-serif, serif;
  padding: 10px;
  text-align: start;
  text-indent: 5px;
  background: black;

  :hover {
    text-decoration: none;
    color: white;
  }
`;

export const ButtonArrow = styled.img`
  position: absolute;
  right: 15px;
  width: 25px;
`;

export const FooterContent = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  justify-content: center;
  margin-top: 80px;

  @media screen and (max-width: 700px) {
    width: 80%;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  margin-top: 30px;
  justify-content: space-between;
`;

export const LinkSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LinkSectionTemp = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const LinkSectionHeading = styled.p`
  color: white;
  font-size: 1.1rem;
`;

export const Link = styled.a`
  color: gray;
  cursor: pointer;
  :hover {
    color: white;
    text-decoration: none;
  }
`;
export const HorizontalLine = styled.span`
  margin-top: 10px;
  border-bottom: 0.5px solid #84d4ff;
  width: 100%;
`;

export const CopyRightText = styled.p`
  color: gray;
  margin-top: 25px;
`;
