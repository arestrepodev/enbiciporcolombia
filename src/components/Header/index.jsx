import React, { useContext, useState } from 'react';
import { Link } from '@reach/router';
import { MdPermPhoneMsg } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';
import { Context } from '../../Context';
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
  const [language, setLanguage] = useState(false);
  const { activeEnglish, disableEnglish, isEnglish } = useContext(Context);

  const changeLanguage = () => {
    setLanguage(!language);
    language ? disableEnglish() : activeEnglish();
  };
  return (
    <>
      <TopBar>
        <Contact>
          <a href='https://wa.link/yvwpyc'>
            <FaWhatsapp />
            {isEnglish ? 'I want to buy' : 'Quiero Cotizar'}
          </a>
          <a href='https://wa.link/yvwpyc' className='is--hide'>
            <MdPermPhoneMsg />
            312 4679089 - CO
          </a>
          <a href='https://wa.link/80vyix' className='is--hide'>
            <MdPermPhoneMsg />
            416 7748900 - CA
          </a>
        </Contact>
        <Language type='button' onClick={changeLanguage}>
          {isEnglish ? 'Español' : 'English'}
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
