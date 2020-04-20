import React from 'react';
import { ContentWrapper } from './style';

const Content = ({ src, alt, text }) => {
  return (
    <ContentWrapper>
      <img src={src} alt={alt} />
      <div>
        <h3>{text}</h3>
      </div>
    </ContentWrapper>
  );
};

export default Content;
