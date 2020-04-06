import styled from 'styled-components';
import { Link } from '@reach/router';

export const LinkButton = styled(Link)`
  border: none;
  padding: 1rem 1.8rem;
  font-size: 1.3rem;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
`;

export const Button = styled.button`
  border: none;
  padding: 1rem 1.6rem;
  font-size: 1rem;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
`;

export const ButtonBlue = styled(Button)`
  background: var(--color-blue);
  color: var(--color-white);
  box-shadow: 0px 0px 5px 0px rgba(89, 89, 89, 0.37);
  &:hover {
    box-shadow: 0px 0px 6px 0px rgba(89, 89, 89, 0.47);
    background: linear-gradient(to right, var(--color-blue) 10%, #2ac8cc 40%);
  }
`;

export const LinkButtonBlue = styled(LinkButton)`
  background: var(--color-blue);
  color: var(--color-white);
  box-shadow: 0px 0px 5px 0px rgba(89, 89, 89, 0.37);
  &:hover {
    box-shadow: 0px 0px 6px 0px rgba(89, 89, 89, 0.47);
    background: linear-gradient(to right, var(--color-blue) 10%, #2ac8cc 40%);
  }
`;

export const LinkButtonBlueSmall = styled(LinkButtonBlue)`
  padding: 0.8rem 1.2rem;
  font-size: 1rem;
`;
