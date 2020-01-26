import React from 'react';
import { Link } from '@reach/router';
import { WrapperHeader, HeaderComponent } from './style';
import Logo from '../Logo';
import Menu from '../Menu';

const Header = () => {
  return (
    <WrapperHeader>
      <HeaderComponent>
        <Link to='/'>
          <Logo width='80' />
        </Link>
        <Menu />
      </HeaderComponent>
    </WrapperHeader>
  );
};

export default Header;
