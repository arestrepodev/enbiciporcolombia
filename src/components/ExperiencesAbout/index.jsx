import React, { useContext } from 'react';
import { Context } from '../../Context';
import { IMG_PATH } from '../../helpers';
import StyledTitle from '../StyledTitle';
import {
  ExperiencesAboutWrapper,
  Features,
  Feature,
  FeatureDescription,
} from './Style';

const ExperiencesAbout = () => {
  const { isEnglish } = useContext(Context);
  return (
    <ExperiencesAboutWrapper>
      <StyledTitle
        subtitle={isEnglish ? 'Live the Adventure' : 'Vive una Aventura'}
        title={isEnglish ? 'In your Bike' : 'Sobre tu Bici'}
      />
      <Features>
        <Feature>
          <img src={`${IMG_PATH}aventura.jpg`} alt='Aventura' />
          <FeatureDescription>
            <h3>{isEnglish ? 'Adventure' : 'Aventura'}</h3>
            <p>
              {isEnglish
                ? 'Each outing is an adventure through Colombia.'
                : 'Cada salida es una aventura por Colombia.'}
            </p>
          </FeatureDescription>
        </Feature>
        <Feature>
          <img src={`${IMG_PATH}diversion.jpg`} alt='Diversión' />
          <FeatureDescription>
            <h3>{isEnglish ? 'Fun' : 'Diversión'}</h3>
            <p>
              {isEnglish
                ? 'Fun awaits you and your bike too'
                : 'La diversión te espera y tu bici también.'}
            </p>
          </FeatureDescription>
        </Feature>
        <Feature>
          <img src={`${IMG_PATH}adrenalina.jpg`} alt='Adrenalina' />
          <FeatureDescription>
            <h3>{isEnglish ? 'Adrenaline' : 'Adrenalina'}</h3>
            <p>
              {isEnglish
                ? 'Each curve, each section a challenge.'
                : 'Cada curva, cada tramo un desafio.'}
            </p>
          </FeatureDescription>
        </Feature>
      </Features>
    </ExperiencesAboutWrapper>
  );
};

export default ExperiencesAbout;
