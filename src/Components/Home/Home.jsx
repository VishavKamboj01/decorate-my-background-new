import React from "react";
import Footer from "../Footer/Footer";
import HomeBody from "./HomeBody";
import HomeHeader from "./HomeHeader";

export default function Home(props) {
  return (
    <div style={{ overflowX: "hidden" }}>
      <HomeHeader />
      <HomeBody currentUser={props.currentUser} />
      <Footer hidden={Object.keys(props.currentUser).length !== 0} />
    </div>
  );
}
