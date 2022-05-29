import React from "react";
import Footer from "../Footer/Footer";
import HomeBody from "./HomeBody";
import HomeHeader from "./HomeHeader";

export default function Home(props) {
  return (
    <div>
      <HomeHeader />
      <HomeBody currentUser={props.currentUser} />
      <Footer />
    </div>
  );
}
