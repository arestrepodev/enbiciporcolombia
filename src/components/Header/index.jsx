import React from 'react';
import { WrapperHeader, HeaderComponent } from './style';
import Logo from '../Logo';
import Menu from '../Menu';

const Header = () => {
  return (
    <WrapperHeader>
      <HeaderComponent>
        <Logo width='80' />
        <Menu />
      </HeaderComponent>
    </WrapperHeader>
  );
};

export default Header;
