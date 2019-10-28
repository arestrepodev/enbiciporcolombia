import React from "react";
import { IMG_PATH } from "../helpers";
import styled from "styled-components";
import { Menu } from "./Menu";

export const Header = () => {
  const WrapperHeader = styled.section`
    background: #fafafa;
    padding: 0.5rem 1rem;
    margin: 0;
  `;

  const Header = styled.header`
    display: grid;
    grid-template-columns: 150px 2fr;
    align-items: center;
  `;

  return (
    <WrapperHeader>
      <Header>
        <img src={`${IMG_PATH}logotipo-enbiciporcolombia.svg`} width="80" alt="Logo" />
        <Menu />
      </Header>
    </WrapperHeader>
  );
};
