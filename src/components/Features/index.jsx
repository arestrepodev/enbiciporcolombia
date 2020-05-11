import React, { useContext } from 'react';
import {
  MdCameraEnhance,
  MdLocationOn,
  MdLocalFlorist,
  MdDirectionsBike,
} from 'react-icons/md';
import { Context } from '../../Context';
import {
  FeaturesWrapper,
  FeaturesHeader,
  FeaturesContent,
  FeaturesList,
} from './style';

const Features = () => {
  const { isEnglish } = useContext(Context);
  return (
    <FeaturesWrapper>
      <FeaturesHeader>
        <small>{isEnglish ? 'Enjoy your' : 'Disfruta de tus'}</small>
        <h3>{isEnglish ? 'Vacations in Colombia' : 'Vaciones por Colombia'}</h3>
        <p>
          {isEnglish
            ? 'You will know the true adventure of exploring landscapes and new cultures, join the ENBICIPORCOLOMBIA trend.'
            : 'En bici vas a conocer la verdadera aventura de explorar paisajes y nuevas culturas, únete a la tendencia ENBICIPORCOLOMBIA.'}
        </p>
      </FeaturesHeader>

      <FeaturesContent>
        <FeaturesList>
          <li>
            <MdCameraEnhance size='50' />
            <h5>{isEnglish ? 'Known' : 'Conoce'}</h5>
          </li>
          <li>
            <MdLocationOn size='50' />
            <h5>{isEnglish ? 'Enjoy' : 'Disfruta'}</h5>
          </li>
          <li>
            <MdLocalFlorist size='50' />
            <h5>{isEnglish ? 'Travel' : 'Visita'}</h5>
          </li>
          <li>
            <MdDirectionsBike size='50' />
            <h5>{isEnglish ? 'Train' : 'Entrena'}</h5>
          </li>
        </FeaturesList>
      </FeaturesContent>
    </FeaturesWrapper>
  );
};

export default Features;
