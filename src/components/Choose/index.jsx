import React from 'react';
import {
  ChooseWrapper,
  ChooseHeader,
  ChooseContent,
  ChooseList,
  Link,
  LinkImage,
  LinkOverlay
} from './style';

const Choose = () => (
  <ChooseWrapper>
    <ChooseHeader>
      <small>Escoge tu</small>
      <h3>Aventura en Bici</h3>
      <p>
        En bici vas a conocer la verdadera aventura de explorar paisajes y
        nuevas culturas, únete a la tendencia{' '}
        <strong>ENBICIPORCOLOMBIA.</strong>
      </p>
    </ChooseHeader>

    <ChooseContent>
      <ChooseList>
        <li>
          <Link href='/#'>
            <LinkImage src='https://picsum.photos/id/866/300/300' alt='Tunja' />
            <LinkOverlay>
              <p>Plan Basic</p>
            </LinkOverlay>
          </Link>
        </li>
        <li>
          <Link href='/#'>
            <LinkImage src='https://picsum.photos/id/866/300/300' alt='Tunja' />
            <LinkOverlay>
              <p>Plan Adventure</p>
            </LinkOverlay>
          </Link>
        </li>
        <li>
          <Link href='/#'>
            <LinkImage src='https://picsum.photos/id/866/300/300' alt='Tunja' />
            <LinkOverlay>
              <p>Plan Extreme</p>
            </LinkOverlay>
          </Link>
        </li>
      </ChooseList>
    </ChooseContent>
  </ChooseWrapper>
);

export default Choose;
