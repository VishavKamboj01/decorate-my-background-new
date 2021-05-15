import styled from "styled-components";
import { keyframes } from "styled-components";

//Animations

const heartBeat = keyframes`
   0% {
    transform: scale(0.9);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(0.9);
  }
}
`;

const appearFromTop = keyframes`
  0%{
    opacity:0;
    transform:translateY(-50px);
  }

  100%{
    opacity:1;
    transform:translateY(0);
  }
`;

const appearFromRight = keyframes`
  0%{
    opacity:0;
    transform: translateX(50px);
  }
  100%{
    opacity:1;
    transform: translateX(0);
  }
`;

//Header Components
export const Header = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
`;

export const HeaderBackground = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;

export const WelcomeContent = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  margin: auto;
  align-items: center;
`;

export const ImageContainer = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const HeaderTitle = styled.h2`
  color: white;
  display: flex;
  font-size: 4rem;
  font-family: roboto_regular;
  font-weight: bolder;
  animation-name: ${appearFromTop};
  animation-duration: 1.5s;
  text-align: center;

  @media screen and (max-width: 1300px) {
    font-size: 3rem;
  }

  @media screen and (max-width: 812px) {
    font-size: 2.5rem;
  }
`;

export const SubHeading = styled.h2`
  font-size: 1.3rem;
  color: lightgray;
  font-family: OpenSans_regular;
  margin-top: 30px;
  animation-name: ${appearFromTop};
  animation-duration: 1.5s;

  @media screen and (max-width: 812px) {
    font-size: 1rem;
  }
`;

export const Explore = styled.button`
  border-radius: 30px;
  width: 12rem;
  position: relative;
  border: 1px solid;
  outline: none;
  border-color: white;
  /* background: linear-gradient(
    90deg,
    rgba(127, 41, 71, 1) 0%,
    rgba(241, 162, 145, 1) 58%,
    rgba(182, 174, 182, 1) 100%
  ); */
  background: rgba(255, 255, 255, 0);
  padding: 12px 22px;
  font-size: 1rem;
  margin-top: 30px;
  color: white;
  box-shadow: 0 0 3px #eee;
  transition: box-shadow 0.2s, animation linear;
  animation-name: ${heartBeat};
  animation-duration: 2s;
  animation-iteration-count: infinite;

  :hover {
    box-shadow: 0 0 10px #eee;
    animation-play-state: paused;
  }

  @media (max-width: 768px) {
    align-self: center;
  }
`;

// export const Mobile = styled.img`
//   width: 400px;
//   height: 500px;
//   object-fit: contain;
//   margin-right: 2rem;
//   animation-name: ${appearFromRight};
//   animation-duration: 1.5s;

//   @media (max-width: 768px) {
//     width: 300px;
//     height: 400px;
//     object-fit: contain;
//   }

//   @media (max-width: 550px) {
//     width: 200px;
//     height: 300px;
//     object-fit: contain;
//   }
// `;

// export const Desktop = styled.img`
//   width: 300px;
//   height: 400px;
//   object-fit: contain;
// `;
