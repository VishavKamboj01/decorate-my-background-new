import styled, { keyframes } from "styled-components";

const loadingAnimation = keyframes`
    0%{
        transform:rotate(0deg);
    }
    
    100%{
        transform:rotate(360deg);
    }
`;

export const AnimationContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const LoadingImage = styled.img`
  width: 60px;
  animation-name: ${(props) => (props.animate ? loadingAnimation : "")};
  animation-duration: 0.3s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;

export const LoadingText = styled.h3`
  font-size: 1.2rem;
  margin-left: 10px;
  color: black;
`;
