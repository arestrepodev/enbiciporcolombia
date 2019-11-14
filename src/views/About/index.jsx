import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AboutEnBici from "../../components/AboutEnBici";
import ExperiencesAbout from "../../components/ExperiencesAbout";
import Choose from "../../components/Choose";
import Metrics from "../../components/Metrics";

const About = () => (
  <>
    <Header />
    <AboutEnBici />
    {/* <ExperiencesAbout /> */}
    <Metrics />
    <Choose />
    <Footer />
  </>
);

export default About;
