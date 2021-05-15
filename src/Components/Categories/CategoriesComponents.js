import styled from "styled-components";

export const CategoryCard = styled.div`
  margin-bottom: 1rem;
  position: relative;
  display: flex;
`;

export const CategoryImage = styled.img`
  width: 300px;
  height: 200px;
  border-radius: 4px;
  box-shadow: 0 0 4px black;
  object-fit: cover;
`;

export const CategoryButton = styled.h6`
  border: 1.5px solid;
  z-index: 90;
  width: 10rem;
  height: 6rem;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  padding: 1rem;
  color: white;
  cursor: pointer;
  transition: 0.1s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  box-shadow: 0 0 5px #eee;

  background-color: rgba(255, 255, 255, 0.4);
  border-color: rgba(255, 255, 255, 0.4);
  :hover {
    background-color: rgba(255, 255, 255, 0.7);
    color: black;
    border-color: rgba(255, 255, 255, 0.7);
    box-shadow: 0 0 10px #eee;
  }

  @media (max-width: 1000px) {
    background-color: rgba(255, 255, 255, 0.4);
    color: black;
    border-color: rgba(255, 255, 255, 0.4);
    box-shadow: 0 0 5px #eee;
  }

  :active {
    transform: scale(0.9);
  }
`;
