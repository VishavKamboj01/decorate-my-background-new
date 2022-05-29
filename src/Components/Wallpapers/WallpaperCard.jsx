import React, { useState } from "react";
import {
  Wallpaper,
  WallpaperContainer,
  InfoContainer,
  Container,
  ContainerText,
  DropdownContainer,
  DownloadButton,
} from "../Wallpapers/WallpaperCardComponents";
import {
  faHeart,
  faComments,
  faDownload,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import Dropdown from "react-bootstrap/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

export default function WallpaperCard(props) {
  const [current, setCurrentScreen] = useState({
    screen: "Select Size",
    url: "",
  });

  const handleItemClick = (screen) => {
    const currentTemp = { ...current };
    currentTemp.screen = screen;
    const scr =
      screen === "Small"
        ? screen.toLowerCase()
        : screen === "Medium"
        ? "regular"
        : screen === "4k"
        ? "full"
        : "";
    currentTemp.url = props.image.urls[scr];
    setCurrentScreen(currentTemp);
  };

  const handleDownloadClick = () => {
    if (current.screen === "Select Size") {
      toast.error("Please Select Screen Size!");
    }
  };

  return (
    <WallpaperContainer>
      <Wallpaper src={props.image.urls.small} />
      <InfoContainer>
        <Container>
          <FontAwesomeIcon icon={faHeart} style={{ color: "gray" }} />
          <ContainerText>{props.image.likes}</ContainerText>
        </Container>
        <Container>
          <FontAwesomeIcon icon={faComments} style={{ color: "gray" }} />
          <ContainerText>200</ContainerText>
        </Container>
        <Container>
          <FontAwesomeIcon icon={faDownload} style={{ color: "gray" }} />
          <ContainerText>120</ContainerText>
        </Container>
      </InfoContainer>

      <DropdownContainer>
        <Dropdown>
          <Dropdown.Toggle
            style={{
              background: "linear-gradient(90deg, #ac3459 0%, #ee9984 100%)",
              border: "0",
            }}
            variant="secondary"
            id="dropdown-basic"
          >
            {current.screen}
          </Dropdown.Toggle>

          <Dropdown.Menu style={{ transition: "0.2s ease", margin: "0" }}>
            <Dropdown.Item onClick={() => handleItemClick("Small")}>
              Small
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleItemClick("Medium")}>
              Medium
            </Dropdown.Item>
            <Dropdown.Item
              disabled={Object.keys(props.currentUser).length === 0}
              onClick={() => handleItemClick("4k")}
            >
              {Object.keys(props.currentUser).length === 0
                ? "4k (Login Required)"
                : "4k"}
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        {current.screen === "Select Size" ? (
          <DownloadButton onClick={handleDownloadClick}>
            <FontAwesomeIcon icon={faArrowDown} style={{ color: "white" }} />
          </DownloadButton>
        ) : (
          <DownloadButton
            href={current.url}
            target="_blank"
            onClick={handleDownloadClick}
          >
            <FontAwesomeIcon icon={faArrowDown} style={{ color: "white" }} />
          </DownloadButton>
        )}
      </DropdownContainer>
    </WallpaperContainer>
  );
}

// <a href={props.image.urls.regular} target="blank">
//   <img
//     onClick={() => {
//       props.onImageClick(props.image);
//     }}
//     className={classes.img}
//     src={props.image.urls.small}
//     alt="Alternative"
//   />
// </a>
