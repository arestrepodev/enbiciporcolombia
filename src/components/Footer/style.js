import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background-color: var(--color-black);
  padding: 2rem 1rem;
  color: var(--color-white);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-gap: 0 1rem;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
  }
  @media screen and (max-width: 468px) {
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }
`;

export const FooterArticle = styled.article`
  h5 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
  p {
    padding: 0.5rem 0;
    line-height: 1.2;
    font-size: 0.9rem;
  }
`;
export const FooterList = styled.ul`
  li {
    display: flex;
    align-items: center;
    line-height: 1.8;
    font-size: 14px;
    svg {
      margin-right: 5px;
    }
    a {
      color: rgba(255, 255, 255, 0.8);
      text-decoration: none;
      &:hover {
        color: var(--color-white);
        text-decoration: underline;
      }
    }
  }
`;

export const FooterForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;
  input {
    margin-bottom: 0.5rem;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 0.6rem 0.7rem;
    border: none;
    border-radius: 3px;
    outline-color: var(--color-blue);
    color: var(--color-white);
  }
  button {
    padding: 0.6rem 0.8rem;
    border-radius: 3px;
  }
`;
