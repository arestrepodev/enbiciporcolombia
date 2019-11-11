import styled from 'styled-components';

export const FeaturesWrapper = styled.section`
  padding: 3rem 1rem;
  background-color: var(--color-white);
`;

export const FeaturesHeader = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  text-align: center;
  small {
    color: var(--color-blue);
    font-size: 1.5rem;
    margin-bottom: 0.2rem;
  }
  h3 {
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }
  p {
    font-size: 1.1rem;
    line-height: 1.6;
    width: 80%;
  }
  @media screen and (max-width: 468px) {
    h3 {
      font-size: 2.5rem;
    }
    p {
      width: 100%;
    }
  }
`;
export const FeaturesContent = styled.article`
  margin: 0 auto;
  width: 90%;
  padding: 2rem 0;
`;

export const FeaturesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-gap: 0 1rem;
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    svg {
      color: var(--color-blue);
    }
    h5 {
      font-size: 1.5rem;
      margin: 1.5rem 0;
    }
    p {
      font-size: 16px;
      line-height: 1.2;
      text-align: center;
      font-weight: 300;
    }
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 2rem 1rem;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-gap: 2rem 1rem;
  }
`;
