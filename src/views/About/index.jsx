import React from 'react';
import Layout from '../../components/Layout';
import AboutEnBici from '../../components/AboutEnBici';
import ExperiencesAbout from '../../components/ExperiencesAbout';
import Choose from '../../components/Choose';
import Metrics from '../../components/Metrics';

const About = () => (
  <Layout>
    <AboutEnBici />
    <ExperiencesAbout />
    <Metrics />
    <Choose />
  </Layout>
);

export default About;
