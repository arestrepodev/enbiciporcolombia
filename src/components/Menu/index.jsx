import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import { MdMoreVert } from 'react-icons/md';
import Nav from './style';
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
      {showMenu && (
        <ul>
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
            <Link to='/detail/1'>Detalle</Link>
          </li>
        </ul>
      )}
      <MdMoreVert size='40' onClick={handleMenu} />
    </Nav>
  );
};

export default Menu;
