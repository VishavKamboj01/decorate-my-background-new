import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { keyframes } from "styled-components";

//Animations

const dropFromTop = keyframes`
0%{
  opacity:0;
  transform : translateY(-100px);
}

100%{
  opacity:1;
  transform : translateY(0);
}
`;

export const NavbarContainer = styled.div`
  display: flex;
  background-color: #271b29;
  width: 100vw;
  height: 60px;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 900px) {
    justify-content: space-between;
  }
`;

export const Mark = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.img`
  display: "flex";
  width: 45px;
  height: 45px;
  color: #fff;
  transition: 0.2s ease-in-out;
  cursor: pointer;

  :active {
    transform: scale(0.8);
    transition-duration: 0.05s;
    transition-timing-function: ease-in-out;
  }

  @media (max-width: 769px) {
    position: relative;
  }
`;

export const Title = styled.p`
  color: lightgray;
  margin-left: 4px;
  font-family: OpenSans_regular;
  padding-top: 8px;
  font-size: 1.2rem;
`;

export const NavLinks = styled.div`
  display: flex;
`;

export const Link = styled(NavLink)`
  color: #c0c0c0;
  position: relative;
  justify-self: center;
  margin-right: 10px;
  line-height: -5px;
  display: inline-block;
  text-transform: uppercase;
  font-family: OpenSans_regular;

  ::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 0.1rem;
    background: linear-gradient(90deg, #ac3459 0%, #ee9984 100%);
    left: 0;
    bottom: 0;
    transition: 0.3s ease;
    transform: scale(0, 1);
  }

  :hover {
    color: #c0c0c0;
    ::after {
      transform: scale(1, 1);
    }
  }

  :active {
    color: white;
    transform: scale(0.95);
    transition-duration: 0.02s;
    transition-timing-function: ease-in-out;
  }

  @media (max-width: 769px) {
    display: none;
  }
`;

export const LoginSignUpContainer = styled.div`
  display: flex;
  justify-content: center;
  font-family: Tisa, sans-serif;

  @media (max-width: 769px) {
    display: none;
  }
`;

export const ButtonLink = styled(NavLink)`
  padding: 5px;
  color: #c0c0c0;
  position: relative;
  width: 100px;
  height: 40px;
  font-family: OpenSans_regular, sans-serif;
  z-index: 100;
  text-align: center;
  border: 2px solid transparent;
  -moz-border-image: -moz-linear-gradient(top left, #ac3459 0%, #ee9984 100%);
  -webkit-border-image: -webkit-linear-gradient(
    top left,
    #ac3459 0%,
    #ee9984 100%
  );
  border-image: linear-gradient(to bottom right, #ac3459 0%, #ee9984 100%);
  border-image-slice: 1;
  margin-right: 5px;
  margin-left: 5px;

  ::before,
  ::after {
    content: "";
    position: absolute;
    background: #271b29;
    z-index: -1;
    transition: 0.5s ease;
  }

  ::before {
    left: 5px;
    top: -2px;
    height: 40px;
    width: 86px;
  }

  ::after {
    left: -2px;
    bottom: 5.5px;
    width: 100px;
    height: 25px;
  }

  :hover {
    color: white;
    ::before {
      width: 0px;
      background: #271b29;
    }
    ::after {
      height: 0px;
      background: #271b29;
    }
  }
`;

// export const LoginButton = styled.button`
//   color: whitesmoke;
//   width: 10rem;
//   border: 0;
//   padding: 5px 20px;
//   margin-right: 1rem;
//   background-size: 200% auto;
//   box-shadow: 0 0 10px #eee;
//   border-radius: 20px;
//   transition: 0.5s;

//   background-image: linear-gradient(
//     to right,
//     #03a9f4 0%,
//     #3f51b5 51%,
//     #03a9f4 100%
//   );

//   :active {
//     transform: scale(0.9);
//     transition-duration: 0.05s;
//     transition-timing-function: ease-in-out;
//   }

//   :hover {
//     background-position: center right;
//   }

//   @media (max-width: 768px) {
//     display: none;
//   }

//   @media (max-width: 890px) {
//     width: 7rem;
//   }
// `;

// export const SignUpButton = styled.button`
//   color: whitesmoke;
//   width: 10rem;
//   border: 0;
//   padding: 5px 20px;
//   margin-right: 1rem;
//   background-size: 200% auto;
//   box-shadow: 0 0 10px #eee;
//   border-radius: 20px;
//   transition: 0.5s;

//   background-image: linear-gradient(
//     to right,
//     #3f51b5 0%,
//     #a1c4fd 51%,
//     #3f51b5 100%
//   );

//   :active {
//     transform: scale(0.9);
//     transition-duration: 0.05s;
//     transition-timing-function: ease-in-out;
//   }

//   :hover {
//     background-position: right center;
//   }

//   @media (max-width: 768px) {
//     display: none;
//   }

//   @media (max-width: 890px) {
//     width: 7rem;
//   }
// `;

export const MenuContainer = styled.div`
  @media (min-width: 769px) {
    display: none;
  }
  display: flex;
  position: absolute;
  cursor: pointer;
  border: 1.5px solid;
  border-color: darkgray;
  border-radius: 4px;
  right: 10px;
  padding: 0.8rem 0.3rem;
  z-index: 100;
`;

export const MenuContainerClicked = styled.div`
  @media (min-width: 769px) {
    display: none;
  }
  display: flex;
  position: absolute;
  cursor: pointer;
  border: 1.5px solid;
  border-color: darkgray;
  box-shadow: 0 0 4px #eee;
  border-radius: 4px;
  right: 10px;
  padding: 0.8rem 0.3rem;
  z-index: 100;
`;

export const MenuIcon = styled.div`
  width: 2rem;
  height: 0.2rem;
  background-color: darkgray;
  border-radius: 5px;
  position: relative;
  cursor: pointer;

  ::before,
  ::after {
    content: "";
    width: 2rem;
    height: 0.2rem;
    background-color: darkgray;
    border-radius: 5px;
    position: absolute;
    display: block;
  }

  ::before {
    top: -180%;
    left: 0;
  }

  ::after {
    bottom: -200%;
    right: 0%;
  }
`;

export const MenuIconClicked = styled.div`
  width: 2rem;
  height: 0.2rem;
  background-color: #eee;
  border-radius: 5px;
  position: relative;
  cursor: pointer;
  display: inline;

  ::before,
  ::after {
    content: "";
    width: 2rem;
    height: 0.2rem;
    background-color: #eee;
    border-radius: 5px;
    position: absolute;
    display: block;
  }

  ::before {
    top: -180%;
    left: 0;
  }

  ::after {
    bottom: -200%;
    right: 0%;
  }
`;

//Mobile Components

export const MobileNavbarContainer = styled.div`
  background-color: #271b29;
  width: 100%;
  display: flex;
  position: absolute;
  flex-direction: column;

  z-index: 100;
  align-items: center;
  transition: 0.5s ease-in;
  animation-name: ${dropFromTop};
  animation-duration: 0.5s;
  transform-origin: top;
  padding-bottom: 10px;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const MobileLinks = styled(NavLink)`
  color: gray;
  width: 100%;
  display: flex;
  padding: 5px 10px;
  margin-top: 10px;
  justify-self: center;

  :hover {
    color: gray;
    text-decoration: none;
  }
  :active {
    color: white;
    border-color: white;
  }
`;
