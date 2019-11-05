import React from "react";
import { Header } from "../../components/Header";
import { Banner } from "../../components/Banner";
import { TouristicPlans } from "../../components/TouristicPlans";
import { Experiences } from "../../components/Experiences";
import { Comments } from "../../components/Comments";
import {Features} from "../../components/Features";
import {Metrics} from "../../components/Metrics";
import { Footer } from "../../components/Footer";

const Home = () => (
  <>
    <Header />
    <Banner />
    <TouristicPlans />
    <Experiences />
    <Comments />
    <Features />
    <Metrics/>
    <Footer/>
  </>
);

export default Home;
