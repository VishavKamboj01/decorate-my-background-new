import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  NavbarContainer,
  NavLinks,
  Link,
  Mark,
  Icon,
  Title,
  MenuContainer,
  MenuContainerClicked,
  MenuIcon,
  MenuIconClicked,
  //Mobile Components
  MobileNavbarContainer,
  MobileLinks,
  LoginSignUpContainer,
  ButtonLink,
} from "./NavbarComponents";
import icon from "../../icons/icon.png";

export default function Navbar(props) {
  const [isMenuClicked, setMenuClicked] = useState(false);

  const handleMenuClick = () => {
    let checked = false;
    if (!isMenuClicked) checked = true;
    setMenuClicked(checked);
  };

  const handleLinkClick = () => {
    const menuClicked = false;
    setMenuClicked(menuClicked);
  };

  return (
    <div style={{ position: "relative" }}>
      <NavbarContainer id="navbar">
        <Mark>
          <Icon src={icon} />
          <Title>Backgrounds</Title>
        </Mark>
        <NavLinks>
          <Link className="nav-item nav-link active" to="/">
            Home
          </Link>

          <Link className="nav-item nav-link" to="/categories">
            Categories
          </Link>

          <Link className="nav-item nav-link" to="/wallpapers">
            Wallpapers
          </Link>
        </NavLinks>

        <LoginSignUpContainer>
          {/* <ButtonLink className="nav-item nav-link" to="/login">
            Login
          </ButtonLink> */}
          <ButtonLink className="nav-item nav-link" to="/signUp">
            Register
          </ButtonLink>
        </LoginSignUpContainer>

        {!isMenuClicked ? (
          <MenuContainer onClick={handleMenuClick}>
            <MenuIcon></MenuIcon>
          </MenuContainer>
        ) : (
          <MenuContainerClicked onClick={handleMenuClick}>
            <MenuIconClicked></MenuIconClicked>
          </MenuContainerClicked>
        )}
      </NavbarContainer>
      {isMenuClicked ? (
        <MobileNavbarContainer>
          <MobileLinks onClick={handleLinkClick} to="/">
            Home
          </MobileLinks>
          <MobileLinks onClick={handleLinkClick} to="/wallpapers">
            Wallpapers
          </MobileLinks>
          <MobileLinks onClick={handleLinkClick} to="/categories">
            Categories
          </MobileLinks>
          {/* <MobileLinks onClick={handleLinkClick} to="/login">
            Login
          </MobileLinks> */}
          <MobileLinks onClick={handleLinkClick} to="/signUp">
            Register
          </MobileLinks>
        </MobileNavbarContainer>
      ) : (
        ""
      )}
    </div>
  );
}
