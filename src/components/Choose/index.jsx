import React, { useContext } from 'react';
import { IMG_PATH } from '../../helpers';
import { Context } from '../../Context';
import {
  ChooseWrapper,
  ChooseHeader,
  ChooseContent,
  ChooseList,
  Link,
  LinkImage,
  LinkOverlay,
} from './style';

const Choose = () => {
  const { isEnglish } = useContext(Context);
  return (
    <ChooseWrapper>
      <ChooseHeader>
        <small>{isEnglish ? 'Choose your' : 'Escoge tu'}</small>
        <h3>{isEnglish ? 'Bike Adventure' : 'Aventura en Bici'}</h3>
        <p>
          {isEnglish
            ? 'Choose your routes and enjoy the scenery, we take care of you to spend the best holidays with your bike.'
            : 'Escoge tus rutas y disfruta del paisaje, nosotros nos encargaremos para que pases las mejores vacaciones en compañia de tú bicicleta.'}
        </p>
      </ChooseHeader>

      <ChooseContent>
        <ChooseList>
          <li>
            <Link to='/basic'>
              <LinkImage src={`${IMG_PATH}plan-basic.jpg`} alt='Plan Basic' />
              <LinkOverlay>
                <h3>{isEnglish ? 'Basic Plan' : 'Plan Basic'}</h3>
              </LinkOverlay>
            </Link>
          </li>
          <li>
            <Link to='/adventure'>
              <LinkImage
                src={`${IMG_PATH}plan-adventure.jpg`}
                alt='Plan Adventure'
              />
              <LinkOverlay>
                <h3>{isEnglish ? 'Adventure Plan' : 'Plan Adventure'}</h3>
              </LinkOverlay>
            </Link>
          </li>
          <li>
            <Link to='/extreme'>
              <LinkImage
                src={`${IMG_PATH}plan-extreme.jpg`}
                alt='Plan Extreme'
              />
              <LinkOverlay>
                <h3>{isEnglish ? 'Extreme Plan' : 'Plan Extreme'}</h3>
              </LinkOverlay>
            </Link>
          </li>
        </ChooseList>
      </ChooseContent>
    </ChooseWrapper>
  );
};

export default Choose;
