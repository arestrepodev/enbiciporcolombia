import styled from 'styled-components';

export const MetricsWrapper = styled.section`
  width: 100%;
  height: auto;
  margin: 0 auto;
  overflow: hidden;
`;

export const MetricsImages = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  img {
    width: 100%;
    height: auto;
    background-clip: border-box;
  }
  @media screen and (max-width: 580px) {
    grid-template-columns: repeat(2, 1fr);
    img {
      width: 100%;
      height: auto;
    }
  }
`;

export const MetricsNumbers = styled.article`
  width: 100%;
  height: auto;
  padding: 3rem 0;
  background: var(--color-blue);
  color: var(--color-white);
  ul {
    width: 70%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    li {
      display: flex;
      align-items: center;
      flex-direction: column;
      text-align: center;
    }
  }
  h4 {
    font-size: 2.5rem;
    margin: 0 0 0.3rem 0;
  }
  @media screen and (max-width: 580px) {
    ul {
      width: 90%;
      flex-grow: 1 1;
    }
  }
  @media screen and (max-width: 380px) {
    ul {
      width: 90%;
    }
  }
`;
