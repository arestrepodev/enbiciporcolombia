import React, { useContext } from 'react';
import { Context } from '../../Context';
import { ExperiencesWrapper, ExperienceDescription, Video } from './style';
import StyledTitle from '../StyledTitle';
import { LinkButtonBlue } from '../../styles/Buttons';
import { IMG_PATH } from '../../helpers';

const Experiences = () => {
  const { isEnglish } = useContext(Context);
  return (
    <ExperiencesWrapper>
      <StyledTitle
        title={isEnglish ? 'Experiences' : 'Experiencias'}
        subtitle={isEnglish ? 'New' : 'Nuevas'}
      />
      <Video controls muted>
        <source src={`${IMG_PATH}video-cover-en-bici.webm`} />
      </Video>
      <ExperienceDescription>
        <p>
          {isEnglish
            ? 'You can discover Colombia in your bike, at unique landscapes, adventures and more. Live the new experience you can live...'
            : 'Podrás descubrir Colombia montado en tu Bici, paisajes únicos,aventuras nuevas y mucho más. Vive la experiencia más grande que puedas vivir, que esperas...'}
        </p>
        <LinkButtonBlue to='/enbici'>
          {isEnglish ? 'Read More' : 'Ver Más'}
        </LinkButtonBlue>
      </ExperienceDescription>
    </ExperiencesWrapper>
  );
};

export default Experiences;
