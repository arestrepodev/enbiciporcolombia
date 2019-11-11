import React from 'react';
import { BannerSection, BannerContent, Video } from './style';

const Banner = () => (
  <BannerSection>
    <Video autoPlay muted loop>
      <source src='/img/video-cover-en-bici.webm' />
    </Video>
    <BannerContent>
      <small>Disfruta</small>
      <h1>EN BICI POR COLOMBIA</h1>
      <p>Los increíbles planes para que vivas la mejor aventura.</p>
    </BannerContent>
  </BannerSection>
);

export default Banner;
