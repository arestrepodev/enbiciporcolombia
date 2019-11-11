import React from 'react';
import styled from 'styled-components';

const BannerSection = styled.section`
  position: relative;
  width: 100%;
  height: 500px;
  background-attachment: scroll;
  overflow: hidden;
`;

const Video = styled.video`
  position: relative;
  min-width: 100%;
  min-height: auto;
  bottom: 100px;
  z-index: 1;
`;

const BannerContent = styled.article`
  background: rgba(3, 121, 109, 0.5);
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 2;
  padding: 5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: var(--color-white);
  text-align: center;
  small {
    font-size: 2rem;
    line-height: 1;
  }
  h1 {
    font-size: 3.5rem;
    line-height: 1;
    margin: 1rem 0;
  }
  p {
    font-size: 1.2rem;
    line-height: 1.2;
  }
  @media (max-width: 368px) {
    padding: 5rem 0.5rem;
    small {
      font-size: 1.4rem;
    }
    h1 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

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
