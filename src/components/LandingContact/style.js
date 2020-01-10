import styled from 'styled-components';

export const LandingWrapper = styled.section`
  width: 100%;
  overflow: hidden;
  display: grid;
  grid-gap: 0 1rem;
  padding: 2rem;
  grid-template-columns: 1fr 400px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: 468px) {
    padding: 1rem;
  }
`;

export const Article = styled.article``;

export const LandingTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

export const LandingSubtitle = styled.p`
  margin-bottom: 1rem;
  line-height: 1.3;
  font-weight: 500;
`;

export const LandingDescription = styled.small`
  line-height: 1.3;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  display: block;
`;
