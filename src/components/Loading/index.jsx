import React, { useContext } from 'react';
import { MdDirectionsBike } from 'react-icons/md';
import { Context } from '../../Context';

import { LoadingWrapper, LoadingContent, Line, LoadingText } from './style';

const Loading = () => {
  const { isEnglish } = useContext(Context);
  return (
    <LoadingWrapper>
      <LoadingContent>
        <MdDirectionsBike size='90' />
        <Line />
      </LoadingContent>
      <LoadingText>{isEnglish ? 'Loading...' : 'Cargando...'}</LoadingText>
    </LoadingWrapper>
  );
};

export default Loading;
