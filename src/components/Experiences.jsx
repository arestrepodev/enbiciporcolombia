import React from "react";
import styled from "styled-components";
import { LinkButtonBlue } from "../styles/Buttons";

const ExperiencesWrapper = styled.section`
  margin: 1rem 0;
  padding: 2rem 0;
  background: rgba(250, 250, 250, 0.4);
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const ExperiencesTitle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  small {
    color: var(--color-blue);
    font-weight: bold;
    font-size: 1.2rem;
  }
  h3 {
    font-size: 2.5rem;
    line-height: 1.2;
  }
`;

const Video = styled.video`
  margin: 2rem auto;
  width: 400px;
  box-shadow: 0px 0px 5px 0px rgba(89, 89, 89, 0.37);
  @media (max-width: 400px) {
    width: 100%;
  }
`;

const ExperienceDescription = styled.article`
  margin: 0 auto;
  width: 65%;
  text-align: center;
  p {
    line-height: 1.1;
    margin-bottom: 1rem;
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const Experiences = () => {
  return (
    <ExperiencesWrapper>
      <ExperiencesTitle>
        <small>Nuevas</small>
        <h3>Experiencias</h3>
      </ExperiencesTitle>
      <Video autoPlay muted loop>
        <source src="/img/video-cover-en-bici.webm" />
      </Video>
      <ExperienceDescription>
        <p>
          Podrás descubrir Colombia montado en tu Bici, paisajes únicos,
          aventuras nuevas y mucho más. Vive la experiencia más grande que
          puedas vivir, que esperas...
        </p>
        <LinkButtonBlue href="/enbici">Ver Más</LinkButtonBlue>
      </ExperienceDescription>
    </ExperiencesWrapper>
  );
};
