import React from 'react';
import styled from 'styled-components';
import { IMG_PATH } from '../helpers';
import Menu from './Menu';

const Header = () => {
  const WrapperHeader = styled.section`
    background: #fafafa;
    padding: 0.5rem 1rem;
    margin: 0;
  `;

  const HeaderComponent = styled.header`
    display: grid;
    grid-template-columns: 150px 2fr;
    align-items: center;
  `;

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
