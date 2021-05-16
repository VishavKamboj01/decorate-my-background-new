import styled from "styled-components";

export const TestimonialSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #efeae7;
  padding-bottom: 140px;
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
  width: 400px;
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
