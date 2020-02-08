import styled from 'styled-components';

export const DetailWrapper = styled.section`
  width: 100%;
  height: auto;
  overflow: hidden;
`;

export const DetailHeader = styled.article`
  width: 100%;
  height: calc(100vh - 200px);
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--color-dark-green) url('plans-background.jpg') top
    center/cover no-repeat fixed;
  h1 {
    color: var(--color-white);
    font-size: 2.5rem;
    text-align: center;
  }
`;

export const DetailContent = styled.article`
  width: 100%;
  height: auto;
  background: var(--color-white);
  position: relative;
`;

export const DetailTable = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  background: var(--color-white);
  transform: translateY(-60px);
  box-shadow: 0 3px 20px 5px rgba(0, 0, 0, 0.03);
`;
