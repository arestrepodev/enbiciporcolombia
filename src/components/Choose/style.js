import styled from 'styled-components';
import { Link as LinkRouter } from '@reach/router';

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
  grid-gap: 2rem;
  position: relative;
  li {
    overflow: hidden;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 3rem;
  }
`;

export const LinkOverlay = styled.div`
  position: absolute;
  width: 92%;
  height: 92%;
  top: 4%;
  left: 4%;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(63, 208, 212, 0.7);
  color: var(--color-white);
  font-weight: bold;
  opacity: 0.94;
  transition: all ease-in 100ms;
`;

export const Link = styled(LinkRouter)`
  position: relative;
  display: block;
  overflow: hidden;
  &:hover div {
    opacity: 1;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
`;

export const LinkImage = styled.img`
  border-radius: 50%;
  backface-visibility: hidden;
  width: 100%;
  height: auto;
`;
