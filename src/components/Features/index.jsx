import React from 'react';
import {
  MdCameraEnhance,
  MdLocationOn,
  MdLocalFlorist,
  MdDirectionsBike
} from 'react-icons/md';
import {
  FeaturesWrapper,
  FeaturesHeader,
  FeaturesContent,
  FeaturesList
} from './style';

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
