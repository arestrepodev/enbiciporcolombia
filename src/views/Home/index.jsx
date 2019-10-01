import React from "react";
import { Header } from "../../components/Header";
import { Banner } from "../../components/Banner";
import { TouristicPlans } from "../../components/TouristicPlans";
import { Experiences } from "../../components/Experiences";
import { Comments } from "../../components/Comments";

const Home = () => (
  <>
    <Header />
    <Banner />
    <TouristicPlans />
    <Experiences />
    <Comments />
  </>
);

export default Home;
