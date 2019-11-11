import React from 'react';
import styled from 'styled-components';
import {
  MdCameraEnhance,
  MdLocationOn,
  MdLocalFlorist,
  MdDirectionsBike
} from 'react-icons/md';

const FeaturesWrapper = styled.section`
  padding: 3rem 1rem;
  background-color: var(--color-white);
`;

const FeaturesHeader = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  text-align: center;
  small {
    color: var(--color-blue);
    font-size: 1.5rem;
    margin-bottom: 0.2rem;
  }
  h3 {
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }
  p {
    font-size: 1.1rem;
    line-height: 1.6;
    width: 80%;
  }
  @media screen and (max-width: 468px) {
    h3 {
      font-size: 2.5rem;
    }
    p {
      width: 100%;
    }
  }
`;
const FeaturesContent = styled.article`
  margin: 0 auto;
  width: 90%;
  padding: 2rem 0;
`;

const FeaturesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-gap: 0 1rem;
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    svg {
      color: var(--color-blue);
    }
    h5 {
      font-size: 1.5rem;
      margin: 1.5rem 0;
    }
    p {
      font-size: 16px;
      line-height: 1.2;
      text-align: center;
      font-weight: 300;
    }
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 2rem 1rem;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-gap: 2rem 1rem;
  }
`;

const Features = () => {
  return (
    <FeaturesWrapper>
      <FeaturesHeader>
        <small>Disfruta de tus</small>
        <h3>Vaciones por Colombia</h3>
        <p>
          En bici vas a conocer la verdadera aventura de explorar paisajes y
          nuevas culturas, únete a la tendencia{' '}
          <strong>ENBICIPORCOLOMBIA.</strong>
        </p>
      </FeaturesHeader>

      <FeaturesContent>
        <FeaturesList>
          <li>
            <MdCameraEnhance size='50' />
            <h5>Conoce</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
              non.
            </p>
          </li>
          <li>
            <MdLocationOn size='50' />
            <h5>Disfruta</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
              non.
            </p>
          </li>
          <li>
            <MdLocalFlorist size='50' />
            <h5>Visita</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
              non.
            </p>
          </li>
          <li>
            <MdDirectionsBike size='50' />
            <h5>Entrena</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
              non.
            </p>
          </li>
        </FeaturesList>
      </FeaturesContent>
    </FeaturesWrapper>
  );
};

export default Features;
