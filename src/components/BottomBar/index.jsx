import React, { useContext } from 'react';
import { Context } from '../../Context';

const BottomBar = () => {
  const { isEnglish } = useContext(Context);
  return (
    <article className='BottomBar'>
      <p>{isEnglish ? 'Created by' : 'Creado por'}</p>
      <a href='https://arnoldrestrepo.com/?utm_source=enbiciporcolombia&utm_medium=bottom_bar&utm_campaign=portfolio'>
        arnoldrestrepo.com
      </a>
    </article>
  );
};

export default BottomBar;
