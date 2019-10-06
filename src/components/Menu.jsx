import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MdMenu, MdMoreVert } from "react-icons/md";
export const Menu = () => {
  const Nav = styled.nav`
    &:focus {
      outline: 0;
    }
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
            color: var(--color-light-green);
          }
        }
      }
    }
    svg {
      display: none;
    }
    @media (max-width: 768px) {
      ul li {
        padding: 0 0.3rem;
      }
    }
    @media (max-width: 583px) {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      position: relative;
      ul {
        /* display: none; */
        width: 160px;
        position: fixed;
        top: 0;
        left: 0;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        background: var(--color-white);
        box-shadow: 0px 0px 5px 0px rgba(89, 89, 89, 0.37);
        height: 100vh;
        z-index: 3;
        li {
          padding: 1rem;
          width: 100%;
          cursor: pointer;
          &:hover {
            background: var(--color-blue);
            a {
              color: var(--color-white);
            }
          }
        }
      }
      svg {
        display: block;
        cursor: pointer;
      }
    }
  `;

  const [showMenu, setShowMenu] = useState(true);

  const handleMenu = event => {
    setShowMenu(!showMenu);
  };

  return (
    <Nav>
      {showMenu && (
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
      )}
      <MdMoreVert size="40" onClick={handleMenu} />
    </Nav>
  );
};
