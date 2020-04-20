import styled from 'styled-components';

// Slider Styles
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
  transition: 500ms ease-in;
  overflow: hidden;
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

// Content Styles
export const ContentWrapper = styled.div`
  position: relative;
  img {
    width: 100%;
    height: auto;
  }
  div {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background: rgba(0, 0, 0, 0.3);
    padding: 5rem 2rem;
    h3 {
      color: var(--color-white);
      max-width: 65%;
      text-align: center;
      font-size: 2rem;
      line-height: 1.4;
    }
  }
  @media screen and (max-width: 768px) {
    div {
      padding: 3rem 2rem;
      h3 {
        font-size: 1.5rem;
      }
    }
  }
  @media screen and (max-width: 498px) {
    div {
      padding: 2rem 1rem;
      h3 {
        width: 90%;
        font-size: 1.2rem;
      }
    }
  }
  @media screen and (max-width: 390px) {
    div {
      padding: 1rem 1rem;
      h3 {
        width: 100%;
        font-size: 1rem;
      }
    }
  }
`;
