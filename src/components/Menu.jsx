import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Menu = () => {
  const Nav = styled.nav`
    ul {
      display: flex;
      justify-content: flex-end;
      li {
        padding: 0 1rem;
        a {
          font-weight: 600;
          text-decoration: none;
          color: var(--color-black);
          &:hover {
            color: var(--color-blue);
          }
        }
      }
    }
  `;

  return (
    <Nav>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/enbici">¿Por qué en Bici?</Link>
        </li>
        <li>
          <Link to="/plans">Planes</Link>
        </li>
        <li>
          <Link to="/partners">Aliados</Link>
        </li>
        <li>
          <Link to="/contact">Contacto</Link>
        </li>
      </ul>
    </Nav>
  );
};
