import React, { useState, useEffect, useContext } from 'react';
import { MdMoreVert, MdClose } from 'react-icons/md';
import { Context } from '../../Context';
import { Nav, Link } from './style';
import { useWindowSize } from '../../hooks/useWindowSize';

const Menu = () => {
  const { isEnglish } = useContext(Context);

  const size = useWindowSize();
  const [showMenu, setShowMenu] = useState('');

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    size.width < 584 ? setShowMenu(false) : setShowMenu(true);
  }, [size]);

  return (
    <Nav>
      <ul className={!showMenu ? 'is-disabled' : ''}>
        <li>
          <Link to='/'>{isEnglish ? 'Home' : 'Inicio'}</Link>
        </li>
        <li>
          <Link to='/enbici'>
            {isEnglish ? 'About Us' : '¿Por qué en Bici?'}
          </Link>
        </li>
        <li>
          <Link to='/plans'>{isEnglish ? 'Plans' : 'Planes'}</Link>
        </li>
        <li>
          <Link to='/partners'>{isEnglish ? 'Plans' : 'Aliados'}</Link>
        </li>
        <li>
          <Link to='/contact'>{isEnglish ? 'Contact' : 'Contacto'}</Link>
        </li>
      </ul>
      <button onClick={handleMenu} type='button'>
        {!showMenu ? <MdMoreVert size='40' /> : <MdClose size='40' />}
      </button>
    </Nav>
  );
};

export default Menu;
