import styled from "styled-components";

export const LinkButton = styled.a`
  border: none;
  padding: 1rem 1.8rem;
  font-size: 1.3rem;
  text-decoration: none;
  display: inline-block;
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
