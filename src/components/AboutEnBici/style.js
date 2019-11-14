import styled from "styled-components";

export const AboutWrapper = styled.section`
  width: 100%;
  height: 500px;
  overflow: hidden;
  padding: 3rem 1rem;
  background: var(--color-white) url("./img/background-about-en-bici.png") top
    center/cover no-repeat fixed;
`;

export const AboutTitle = styled.h2`
  font-size: 2.5rem;
  margin: 0 0 2rem 0;
`;

export const AboutDescription = styled.p`
  font-size: 1rem;
  color: var(--color-white);
  width: 80%;
  line-height: 1.3;
  margin-bottom: 1rem;
  padding: 1rem;
  background: var(--color-black);
`;
