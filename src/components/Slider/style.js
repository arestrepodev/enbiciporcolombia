import styled from 'styled-components';

export const SliderWrapper = styled.section`
  width: 100%;
  max-width: 177.78%;
  height: 56.25vw;
  max-height: 100vh;
  /* 16/9 = 1.778 */
  /* height:width ratio = 9/16 = .5625  */
  box-sizing: border-box;
  position: relative;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: var(--color-white);
`;

export const Slide = styled.article`
  position: relative;
  min-width: 100%;
  height: 100%;
  transition: 400ms ease-in;
  overflow: hidden;
  img {
    width: 100%;
    height: auto;
  }
`;

const Go = styled.button`
  position: absolute;
  top: 50%;
  width: 10%;
  height: 100%;
  background: none;
  cursor: pointer;
  transition: 200ms;
  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
  svg {
    color: whitesmoke;
    font-size: 2rem;
  }
`;

export const GoLeft = styled(Go)`
  left: 0;
  transform: translateY(-50%);
`;
export const GoRight = styled(Go)`
  right: 0;
  transform: translateY(-50%);
`;
