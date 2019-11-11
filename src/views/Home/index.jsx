import React from 'react';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import TouristicPlans from '../../components/TouristicPlans';
import Experiences from '../../components/Experiences';
import Features from '../../components/Features';
import Comments from '../../components/Comments';
import Metrics from '../../components/Metrics';
import Choose from '../../components/Choose';
import Footer from '../../components/Footer';

const Home = () => (
  <>
    <Header />
    <Banner />
    <TouristicPlans />
    <Experiences />
    <Comments />
    <Features />
    <Metrics />
    <Choose />
    <Footer />
  </>
);

export default Home;
