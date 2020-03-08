import React from 'react';
import { BannerSection, BannerContent, Video } from './style';
import { IMG_PATH } from '../../helpers';

const Banner = () => (
  <BannerSection>
    <Video controls muted poster={`${IMG_PATH}portada-banner-small.jpg`}>
      <source src='' />
    </Video>
    <BannerContent>
      <small>Disfruta</small>
      <h1>EN BICI POR COLOMBIA</h1>
      <p>Los increíbles planes para que vivas la mejor aventura.</p>
    </BannerContent>
  </BannerSection>
);

export default Banner;
