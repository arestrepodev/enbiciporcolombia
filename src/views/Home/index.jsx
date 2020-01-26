import React from 'react';
import Layout from '../../components/Layout';
import Banner from '../../components/Banner';
import TouristicPlans from '../../components/TouristicPlans';
import Experiences from '../../components/Experiences';
import Features from '../../components/Features';
import Comments from '../../components/Comments';
import Metrics from '../../components/Metrics';
import Choose from '../../components/Choose';

const Home = () => (
  <Layout>
    <Banner />
    <TouristicPlans />
    <Experiences />
    <Comments />
    <Features />
    <Metrics />
    <Choose />
  </Layout>
);

export default Home;
