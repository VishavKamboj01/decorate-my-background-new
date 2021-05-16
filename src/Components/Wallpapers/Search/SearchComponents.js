import styled from "styled-components";

export const SearchBannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 100px;
  padding-bottom: 50px;
  align-items: center;
  justify-content: center;
  background: #271b29;
  position: relative;
`;

export const ContainerCutout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  z-index: -1;
  height: 700px;
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
  border-radius: 10px;
  justify-content: center;
  background: #561f55;
  position: relative;

  @media screen and (max-width: 850px) {
    transform: scale(0.8);
    width: 760px;
  }
  @media screen and (max-width: 600px) {
    transform: scale(0.7);
  }

  @media screen and (max-width: 510px) {
    transform: scale(0.5);
  }
`;

export const SearchHeading = styled.p`
  font-size: 1.5rem;
  font-family: monospace;
  color: white;
`;

export const SearchContainer = styled.div`
  display: flex;
  position: relative;
  width: 70%;
`;

export const SearchButton = styled.button`
  width: 120px;
  padding: 5px;
  border: 0;
  height: 45px;
  border-radius: 30px;
  background-color: crimson;
  color: white;
  position: absolute;
  top: 2px;
  right: 2px;
  font-family: monospace;
  box-shadow: 0 0 5px gray;
  transition: 0.2s ease-in-out;

  :hover {
    box-shadow: 0 0 10px gray;
  }

  :active {
    transform: scale(0.9);
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
`;
