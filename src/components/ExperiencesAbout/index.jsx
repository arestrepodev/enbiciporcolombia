import React from 'react';
import { IMG_PATH } from '../../helpers';
import StyledTitle from '../StyledTitle';
import {
  ExperiencesAboutWrapper,
  Features,
  Feature,
  FeatureDescription
} from './Style';

const ExperiencesAbout = () => {
  return (
    <ExperiencesAboutWrapper>
      <StyledTitle subtitle='Vive una Aventura' title='Sobre tu Bici' />
      <Features>
        <Feature>
          <img src={`${IMG_PATH}aventura.jpg`} alt='Aventura' />
          <FeatureDescription>
            <h3>Aventura</h3>
            <p>Cada salida es una aventura por Colombia.</p>
          </FeatureDescription>
        </Feature>
        <Feature>
          <img src={`${IMG_PATH}diversion.jpg`} alt='Diversión' />
          <FeatureDescription>
            <h3>Diversión</h3>
            <p>La diversión te espera y tu bici también.</p>
          </FeatureDescription>
        </Feature>
        <Feature>
          <img src={`${IMG_PATH}adrenalina.jpg`} alt='Adrenalina' />
          <FeatureDescription>
            <h3>Adrenalina</h3>
            <p>Cada curva, cada tramo un desafio.</p>
          </FeatureDescription>
        </Feature>
      </Features>
    </ExperiencesAboutWrapper>
  );
};

export default ExperiencesAbout;
