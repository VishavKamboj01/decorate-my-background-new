import styled, { keyframes } from "styled-components";

const SearchButtonAnimation = keyframes`
  0%{
    transform:scale(1);
  }

  50%{
    transform:scale(0.9);
  }

  100%{
    transform:scale(1);
  }
`;

export const SearchBannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 50px;
  margin-bottom: 400px;
  align-items: center;
  justify-content: center;
  background: #271b29;
  position: relative;

  @media screen and (max-width: 600px) {
    margin-bottom: 300px;
  }
`;

export const ContainerCutout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  z-index: -1;
  height: 400px;
  justify-content: center;
  background: #271b29;
  position: absolute;
  clip-path: polygon(0 0, 100% 0, 100% 80%, 0% 100%);
`;

export const SearchCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 760px;
  padding: 20px 10px;
  align-items: center;
  box-shadow: 0 0 5px #eee;
  top: 100px;
  border-radius: 10px;
  justify-content: center;
  background: linear-gradient(90deg, #792c4a 0%, #bd4664 50%, #f7ab8f 100%);
  position: absolute;

  @media screen and (max-width: 850px) {
    transform: scale(0.8);
    width: 700px;
  }
  @media screen and (max-width: 600px) {
    transform: scale(0.7);
    width: 600px;
  }

  @media screen and (max-width: 420px) {
    width: 520px;
  }
`;

export const SearchHeading = styled.p`
  font-size: 1.5rem;
  font-family: monospace;
  color: white;

  @media screen and (max-width: 510px) {
    font-size: 1.7rem;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  position: relative;
  width: 70%;
  @media screen and (max-width: 540px) {
    width: 90%;
    transform: scale(1.05);
  }
`;

export const SearchButton = styled.button`
  width: 120px;
  padding: 5px;
  border: 3px solid black;
  height: 45px;
  border-radius: 30px;
  background-color: transparent;
  color: black;
  position: absolute;
  top: 2px;
  right: 2px;
  font-family: monospace;
  box-shadow: 0 0 5px gray;
  transition: 0.2s ease-in-out;
  animation-name: ${(props) =>
    props.animate === true ? SearchButtonAnimation : ""};
  animation-duration: 0.3s;

  :hover {
    box-shadow: 0 0 20px gray;
    background: black;
    color: white;
  }

  @media screen and (max-width: 850px) {
    background: black;
    color: white;
  }
`;

export const SearchBar = styled.input`
  width: 100%;
  height: 50px;
  border: 0;
  border-radius: 30px;
  outline: none;
  text-indent: 10px;
  font-family: monospace;
  transition: 0.2s ease-in-out;

  ::placeholder {
    text-shadow: 0 0 5px gray;
  }

  :focus {
    box-shadow: 0 0 8px #eee;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  margin-top: 30px;
  justify-content: space-evenly;

  @media screen and (max-width: 850px) {
    width: 100%;
    transform: scale(1.05);
  }
`;

export const ButtonSpan = styled.button`
  border-radius: 25px;
  padding: 2px 30px;
  font-family: monospace;
  background: transparent;
  border: 2px solid white;
  box-shadow: 0 0 3px #eee;
  color: white;
  transition: 0.3s ease-in-out;
  :hover {
    background: white;
    color: black;
  }

  @media screen and (max-width: 420px) {
    padding: 2px 15px;
  }
`;
