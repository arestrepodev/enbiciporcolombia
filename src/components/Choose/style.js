import styled from 'styled-components';

export const ChooseWrapper = styled.section`
  padding: 3rem 1rem;
  background-color: var(--color-white);
`;

export const ChooseHeader = styled.article`
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

export const ChooseContent = styled.article`
  margin: 0 auto;
  width: 90%;
  padding: 2rem 0;
`;

export const ChooseList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  position: relative;
  li {
    border-radius: 50%;
    overflow: hidden;
    img {
      background-clip: border-box;
    }
  }
`;
