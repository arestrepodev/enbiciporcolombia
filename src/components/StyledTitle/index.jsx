import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Styles
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const SubtitleText = styled.small`
  color: var(--color-blue);
  font-weight: 400;
  font-size: 1.2rem;
`;
const TitleText = styled.h3`
  font-size: 2.5rem;
  line-height: 1.2;
`;

// Component
const StyledTitle = ({ title, subtitle }) => (
  <TitleWrapper>
    <SubtitleText>{subtitle}</SubtitleText>
    <TitleText>{title}</TitleText>
  </TitleWrapper>
);

// Props
StyledTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};

StyledTitle.defaultProps = {
  subtitle: 'Este es mi subtítulo'
};

export default StyledTitle;
