import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  padding: 2rem;
  @media screen and(max-width: 468px) {
    padding: 1rem;
  }
`;

export const FormControl = styled.article`
  padding: 0.5rem 0;
  width: 100%;
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
  }
  input,
  textarea {
    width: 100%;
    border-radius: 2px;
    border: 1px solid var(--color-blue);
    padding: 0.6rem 0.7rem;
    outline: none;
    color: var(--color-gray);
    background: #3fd0d412;
  }

  textarea {
    max-width: 100%;
    min-width: 100%;
    height: 100px;
  }
`;

export const Title = styled.h3`
  font-size: 2rem;
  margin-bottom: 1rem;
`;
export const Subtitle = styled.p`
  margin-bottom: 1rem;
`;
