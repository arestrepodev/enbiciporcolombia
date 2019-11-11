import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { MdDirectionsBike } from 'react-icons/md';

/* Animation for Loading Line */
const AnimateLine = keyframes`
  from{
    transform: translateX(100px);
  } to {
    transform: translateX(-100px);
  }
`;

const LoadingWrapper = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: var(--color-blue);
  color: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const LoadingContent = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 120px;
  height: 120px;
  overflow: hidden;
  transform: rotate(-20deg);
`;

const LoadingText = styled.p`
  margin-top: 1rem;
  margin-left: 2rem;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
`;

const Line = styled.span`
  border: 1.5px double var(--color-white);
  width: 86px;
  text-align: center;
  transition: transform 800ms ease-in-out;
  animation: ${AnimateLine} 800ms infinite ease-out;
`;

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
