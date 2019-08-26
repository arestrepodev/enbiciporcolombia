import React from "react";
import { IMG_PATH } from "../helpers";
import styled from "styled-components";

const Header = () => {
  const WrapperHeader = styled.section`
    background: red;
    padding: 1rem;
    margin: 0;
  `;

  return (
    <WrapperHeader>
      <header>
        <img src={`${IMG_PATH}enbiciporcolombia.svg`} width="120" alt="Logo" />
      </header>
    </WrapperHeader>
  );
};

export default Header;
