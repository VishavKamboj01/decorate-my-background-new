import React from "react";
import {
  Header,
  HeaderTitle,
  WelcomeContent,
  Explore,
  SubHeading,
  HeaderBackground,
} from "./HomeHeaderComponents";
import headerBackground from "../../images/wolfBackground.jpg";

import { Link } from "react-scroll";
// import desktop from "../../images/laptop.png";
export default function HomeHeader() {
  return (
    <Header>
      <HeaderBackground src={headerBackground} />
      <WelcomeContent>
        <HeaderTitle>Welcome to Backgrounds</HeaderTitle>
        <SubHeading>
          Breath-Taking wallpapers to enhance Desktop <br /> and Mobile look as
          well as your Productivity.
        </SubHeading>
        <Link to="WhyBackgrounds" smooth={true}>
          <Explore>Start Exploring</Explore>
        </Link>
      </WelcomeContent>
    </Header>
  );
}
