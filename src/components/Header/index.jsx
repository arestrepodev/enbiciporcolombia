import React from 'react';
import { Link } from '@reach/router';
import { MdPermPhoneMsg } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';
import {
  WrapperHeader,
  HeaderComponent,
  TopBar,
  Contact,
  Language,
} from './style';
import Logo from '../Logo';
import Menu from '../Menu';

const Header = () => {
  return (
    <>
      <TopBar>
        <Contact>
          <a href='https://wa.link/yvwpyc'>
            <FaWhatsapp />
            Quiero Cotizar
          </a>
          <a href='https://wa.link/yvwpyc'>
            <MdPermPhoneMsg />
            312 4679089 - CO
          </a>
          <a href='https://wa.link/80vyix'>
            <MdPermPhoneMsg />
            416 7748900 - CA
          </a>
        </Contact>
        <Language>
          <a href='#'>English</a>
        </Language>
      </TopBar>
      <WrapperHeader>
        <HeaderComponent>
          <Link to='/'>
            <Logo width='80' />
          </Link>
          <Menu />
        </HeaderComponent>
      </WrapperHeader>
    </>
  );
};

export default Header;
