import styled from 'styled-components';

export const ExperiencesAboutWrapper = styled.section`
  margin: 2rem 0;
`;

export const Features = styled.section`
  width: 100%;
  height: auto;
  margin-top: 1rem;
  padding: 1rem 2rem;
  display: grid;
  grid-gap: 0 1rem;
  grid-template-columns: repeat(3, 1fr);
  @media screen and (max-width: 668px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-gap: 1rem 0;
  }
`;

export const Feature = styled.article`
  width: 100%;
  position: relative;
  img {
    width: 100%;
    height: auto;
  }
  &:hover div {
    padding: 3rem 1rem;
  }
`;

export const FeatureDescription = styled.div`
  background-color: rgba(63, 208, 212, 0.8);
  color: var(--color-white);
  position: absolute;
  padding: 1rem;
  bottom: 0;
  left: 0;
  right: 0;
  transition: cubic-bezier(0.65, 0.05, 0.36, 1) all 200ms;
  h3 {
    margin-bottom: 0.5rem;
  }
`;
