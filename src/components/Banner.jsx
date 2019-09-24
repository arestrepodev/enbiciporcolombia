import React from "react";
import styled from "styled-components";

const BannerSection = styled.section`
  position: relative;
  width: 100%;
`;

const Video = styled.video`
  position: absolute;
  width: 100%;
  height: auto;
`;

const BannerContent = styled.article`
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
`;

export const Banner = () => (
  <BannerSection>
    <Video autoPlay muted loop>
      <source src="/img/video-cover-en-bici.mp4" />
    </Video>
    <BannerContent>
      <small>Disfruta</small>
      <h1>EN BICI POR COLOMBIA</h1>
      <p>
        Los mejores planes para que vivas una aventura en bici por Colombia.
      </p>
    </BannerContent>
  </BannerSection>
);
