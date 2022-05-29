import styled, { keyframes } from "styled-components";

export const CardAnimation = keyframes`
  0%{
    transfrom: translateY(-100px);
  }
  100%{
    transfrom: translateY(0);
  }
`;

export const WallpaperContainer = styled.div`
  width: 300px;
  height: 420px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: white;
  box-shadow: 0 0 5px gray;
  border-radius: 5px;
  margin-bottom: 20px;
  animation-name: ${CardAnimation};
  animation-duration: 1s;
`;

export const Wallpaper = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 5px;
  transition: 0.1s ease-in-out;

  :hover {
    transform: scale(1.05);
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  margin-top: 10px;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const ContainerText = styled.p`
  font-size: 0.7rem;
  color: gray;
  margin-left: 3px;
`;

export const DropdownContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  justify-content: space-between;
  align-items: center;
`;

export const DownloadButton = styled.a`
  width: 45px;
  height: 45px;
  padding: 10px;
  cursor: pointer;
  border: 0;
  box-shadow: 0 0 3px lightskyblue;
  outline: none;
  color: white;
  background: linear-gradient(90deg, #ffd400 0%, #ffdd3c 100%);
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
`;
