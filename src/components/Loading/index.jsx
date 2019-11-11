import React from 'react';
import PropTypes from 'prop-types';
import { MdDirectionsBike } from 'react-icons/md';
import { LoadingWrapper, LoadingContent, Line, LoadingText } from './style';

const Loading = ({ title }) => (
  <LoadingWrapper>
    <LoadingContent>
      <MdDirectionsBike size='90' />
      <Line />
    </LoadingContent>
    <LoadingText>{title}...</LoadingText>
  </LoadingWrapper>
);

Loading.propTypes = {
  title: PropTypes.string
};

Loading.defaultProps = {
  title: 'Cargando'
};

export default Loading;
