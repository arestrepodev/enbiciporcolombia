import React from 'react';
import {
  ExperiencesWrapper,
  ExperiencesTitle,
  ExperienceDescription,
  Video
} from './style';
import { LinkButtonBlue } from '../../styles/Buttons';

const Experiences = () => {
  return (
    <ExperiencesWrapper>
      <ExperiencesTitle>
        <small>Nuevas</small>
        <h3>Experiencias</h3>
      </ExperiencesTitle>
      <Video autoPlay muted loop>
        <source src='/img/video-cover-en-bici.webm' />
      </Video>
      <ExperienceDescription>
        <p>
          Podrás descubrir Colombia montado en tu Bici, paisajes únicos,
          aventuras nuevas y mucho más. Vive la experiencia más grande que
          puedas vivir, que esperas...
        </p>
        <LinkButtonBlue to='/enbici'>Ver Más</LinkButtonBlue>
      </ExperienceDescription>
    </ExperiencesWrapper>
  );
};

export default Experiences;
