import React from 'react';
import {
  ChooseWrapper,
  ChooseHeader,
  ChooseContent,
  ChooseList
} from './style';

const Choose = () => {
  return (
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
            <a href='/#'>
              <img src='https://picsum.photos/id/866/300/300' alt='Tunja' />
            </a>
          </li>
          <li>
            <a href='/#'>
              <img src='https://picsum.photos/id/866/300/300' alt='Tunja' />
            </a>
          </li>
          <li>
            <a href='/#'>
              <img src='https://picsum.photos/id/866/300/300' alt='Tunja' />
            </a>
          </li>
        </ChooseList>
      </ChooseContent>
    </ChooseWrapper>
  );
};

export default Choose;
