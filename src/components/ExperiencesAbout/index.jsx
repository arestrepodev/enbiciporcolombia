import React from 'react';
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
          <img
            src='https://i.picsum.photos/id/244/500/400.jpg'
            alt='adventure'
          />
          <FeatureDescription>
            <h3>Aventura</h3>
            <p>Cada salida es una aventura por Colombia.</p>
          </FeatureDescription>
        </Feature>
        <Feature>
          <img src='https://i.picsum.photos/id/191/500/400.jpg' alt='party' />
          <FeatureDescription>
            <h3>Diversión</h3>
            <p>La diversión te espera.</p>
          </FeatureDescription>
        </Feature>
        <Feature>
          <img
            src='https://i.picsum.photos/id/196/500/400.jpg'
            alt='adrenaline'
          />
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
