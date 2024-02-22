import React from "react";
import Carousel from "./Carousel";
import DummyBox from "./DummyBox";
import GridContainer from "./GridContainer";
import BlueBox from "./BlueBox";

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-box">
        <Carousel />
        <DummyBox text="Featured Products" />
        <GridContainer />
        <DummyBox text="Trending Products" />
        <BlueBox />
      </div>
    </div>
  );
}
