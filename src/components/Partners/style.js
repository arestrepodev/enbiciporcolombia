import styled from 'styled-components';

export const PartnersWrapper = styled.section`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 500px auto;
  grid-gap: 0 2rem;
  overflow: hidden;
  padding: 3rem 2rem;
  background: var(--color-light-gray);
  @media screen and (max-width: 1226px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem 0;
    grid-template-rows: auto;
  }
`;

export const PartnersSection = styled.article`
  h2 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.2rem;
    line-height: 1.3;
  }
`;

export const PartnersGrid = styled.article`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  img {
    width: 100%;
    height: auto;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 8px;
  }
`;

export const PartnerLogo = styled.img`
  margin-bottom: 2rem;
`;
