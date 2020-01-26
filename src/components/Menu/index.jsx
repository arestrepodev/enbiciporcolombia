import React, { useState, useEffect } from 'react';
import { MdMoreVert, MdClose } from 'react-icons/md';
import { Nav, Link } from './style';
import { useWindowSize } from '../../hooks/useWindowSize';

const Menu = () => {
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
          <Link to='/'>Inicio</Link>
        </li>
        <li>
          <Link to='/enbici'>¿Por qué en Bici?</Link>
        </li>
        <li>
          <Link to='/plans'>Planes</Link>
        </li>
        {/* <li>
            <Link to='/partners'>Aliados</Link>
          </li> */}
        <li>
          <Link to='/contact'>Contacto</Link>
        </li>
        <li>
          <Link to='/detail/1'>Detalle 1</Link>
        </li>
      </ul>
      <button onClick={handleMenu} type='button'>
        {!showMenu ? <MdMoreVert size='40' /> : <MdClose size='40' />}
      </button>
    </Nav>
  );
};

export default Menu;
