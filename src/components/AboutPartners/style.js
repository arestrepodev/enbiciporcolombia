import styled from 'styled-components';

export const AboutWrapper = styled.section`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 400px;
  grid-gap: 0 1rem;
  overflow: hidden;
  padding: 3rem 2rem;
  background: var(--color-white);
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem 0;
    grid-template-rows: auto;
  }
`;

export const AboutTitle = styled.h2`
  font-size: 2.5rem;
  margin: 0 0 2rem 0;
`;

export const AboutDescriptionWrapper = styled.div``;

export const AboutDescription = styled.p`
  font-size: 1.3rem;
  color: var(--color-black);
  line-height: 1.4;
  margin-bottom: 1rem;
  /* background: var(--color-black); */
`;

export const AboutImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AboutImage = styled.img`
  width: 250px;
  height: 250px;
  background-clip: content-box;
  border-radius: 50%;
  box-shadow: inset 0px 0px 5px 3px rgba(0, 0, 0, 0.25);
`;
