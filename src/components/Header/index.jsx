import React from 'react';
import { WrapperHeader, HeaderComponent } from './style';
import { IMG_PATH } from '../../helpers';
import Menu from '../Menu';

const Header = () => {
  return (
    <WrapperHeader>
      <HeaderComponent>
        <img
          src={`${IMG_PATH}logotipo-enbiciporcolombia.svg`}
          width='80'
          alt='Logo'
        />
        <Menu />
      </HeaderComponent>
    </WrapperHeader>
  );
};

export default Header;
