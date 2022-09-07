import React from "react";
import "../style.css";

import SecondSection from "../section/SecondSection";

import FirstSection from "../section/FirstSection";
import ThirdSection from "../section/ThirdSection";
import { Carousel } from "../components/carousel/Carousel";
import Footer from "../section/Footer";
import MainSection from "../section/MainSection";
import { Fragment } from "react";

function Home() {
  return (
    <Fragment>
      <MainSection />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <Carousel />
      <Footer />
    </Fragment>
  );
}

export default Home;
