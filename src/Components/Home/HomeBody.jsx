import React, { useState, useEffect } from "react";
import {
  //Body Components
  Body,
  CardContainer,
  CardHeading,
  CardText,
  InfoCard,
  WhyBackgroundsSection,
  WhyBackgroundsHeading,
  Icon,
  IconCombo,

  //Sample Components
  SamplePageSection,
  SampleHeading,
  LeftArrow,
  RightArrow,
  ButtonsBanner,
  ImageTitle,
  DownloadButton,
  Slideshow,
  CardNote,
  CardNoteIcon,
  CardNoteHeading,
  CardNoteText,
  RegisterButtom,
} from "./HomeBodyComponents.js";

import fastDownloads from "../../icons/download.png";

import hd from "../../icons/hd.png";
import newIcon from "../../icons/new.png";
import unlimited from "../../icons/unlimited.png";
import anonymous from "../../images/image_1.jpg";
import leftArrow from "../../icons/left-arrow.png";
import rightArrow from "../../icons/right-arrow.png";
import premium from "../../icons/premium.png";
import { getRandomImages } from "../../Services/RandomImages";
import Testimonials from "./Testimonials/Testimonials.jsx";
import Footer from "./Footer/Footer.jsx";

export default function HomeBody() {
  const [imageTracker, setImageTracker] = useState(0);
  const [sampleWallpapers, setSampleWallpapers] = useState([]);
  const [isLeftArrowClicked, setLeftArrowClicked] = useState(false);
  const [isRightArrowClicked, setRightArrowClicked] = useState(false);

  const handleLeftClicked = () => {
    let tracker = imageTracker;
    if (tracker > 0) {
      tracker--;
      setImageTracker(tracker);
    }
    setLeftArrowClicked(true);
  };

  const handleRightClicked = () => {
    let tracker = imageTracker;
    if (tracker < 9) {
      tracker++;
      setImageTracker(tracker);
    }
    setRightArrowClicked(true);
  };

  useEffect(() => {
    const wallpapers = getRandomImages();
    setSampleWallpapers(wallpapers);
    // return () => {
    //   cleanup
    // }
  }, []);

  return (
    <Body>
      <WhyBackgroundsSection id="WhyBackgrounds">
        <WhyBackgroundsHeading>
          &lt; Why Backgrounds? &gt;
        </WhyBackgroundsHeading>

        <CardContainer>
          <IconCombo>
            <InfoCard>
              <Icon src={fastDownloads}></Icon>
              <CardHeading>High Speed Downloads</CardHeading>
              <CardText>
                Lorem ipsum dolor sit ametsect etur adipisicing elit. Ipsa atque
                esse sit, aut debitis numquam alias?
              </CardText>
            </InfoCard>
            <InfoCard>
              <Icon src={hd}></Icon>
              <CardHeading>Immeasureable Quality</CardHeading>
              <CardText>
                Lorem ipsum dolor sit ametsectetur adipisicing elit. Ipsa atque
                esse sit, aut debitis numquam alias?
              </CardText>
            </InfoCard>
          </IconCombo>
          <IconCombo>
            <InfoCard>
              <Icon src={unlimited}></Icon>
              <CardHeading>Unlimited Wallpapers</CardHeading>
              <CardText>
                Lorem ipsum dolor sit ametsectetur adipisicing elit. Ipsa atque
                esse sit, aut debitis numquam alias?
              </CardText>
            </InfoCard>
            <InfoCard>
              <Icon src={newIcon}></Icon>
              <CardHeading>New Additions EveryDay</CardHeading>
              <CardText>
                Lorem ipsum dolor sit ametsectetur adipisicing elit. Ipsa atque
                esse sit, aut debitis numquam alias?
              </CardText>
            </InfoCard>
          </IconCombo>
        </CardContainer>
        <CardNote>
          <CardNoteIcon src={premium} />
          <CardNoteHeading>Premium Access</CardNoteHeading>
          <CardNoteText>
            Only the registered users will get above the benefits. Lorem ipsum
            dolor sit amet consectetur adipisicing elit.
          </CardNoteText>
          <RegisterButtom to="/signUp">Register Now</RegisterButtom>
        </CardNote>
      </WhyBackgroundsSection>

      <SamplePageSection>
        <SampleHeading>&lt; What you can expect from us &gt;</SampleHeading>

        <Slideshow
          image={
            sampleWallpapers.length === 0
              ? anonymous
              : sampleWallpapers[imageTracker]
          }
          leftClicked={isLeftArrowClicked}
        />
        <ButtonsBanner>
          {sampleWallpapers.length === 0 ? (
            <ImageTitle>Nothing</ImageTitle>
          ) : (
            <ImageTitle>{sampleWallpapers[imageTracker].title}</ImageTitle>
          )}

          {isLeftArrowClicked ? (
            <LeftArrow
              animate
              onAnimationEnd={() => setLeftArrowClicked(false)}
              onClick={handleLeftClicked}
              src={leftArrow}
            />
          ) : (
            <LeftArrow onClick={handleLeftClicked} src={leftArrow} />
          )}

          {isRightArrowClicked ? (
            <RightArrow
              animate
              onAnimationEnd={() => setRightArrowClicked(false)}
              onClick={handleRightClicked}
              src={rightArrow}
            />
          ) : (
            <RightArrow onClick={handleRightClicked} src={rightArrow} />
          )}
          {sampleWallpapers.length !== 0 ? (
            <DownloadButton href={sampleWallpapers[imageTracker].src} download>
              Download
            </DownloadButton>
          ) : (
            ""
          )}
        </ButtonsBanner>
      </SamplePageSection>
      <Testimonials />
      <Footer />
    </Body>
  );
}
