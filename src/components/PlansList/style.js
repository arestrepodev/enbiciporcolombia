import styled from 'styled-components';

export const PlansListWrapper = styled.section`
  width: 100%;
  height: auto;
  overflow: hidden;
`;

export const PlansListHeader = styled.article`
  width: 100%;
  height: calc(100vh - 200px);
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--color-black) url('./img/plans-background.jpg') top
    center/cover no-repeat fixed;
  h1 {
    color: var(--color-white);
    font-size: 2.5rem;
    text-align: center;
  }
`;

export const PlansListContent = styled.article`
  width: 100%;
  height: auto;
  background: var(--color-white);
  position: relative;
`;

export const PlansListTable = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  background: var(--color-white);
  transform: translateY(-60px);
  box-shadow: 0 9px 16px 13px rgba(0, 0, 0, 0.03);
`;

export const Features = styled.ul`
  background: var(--color-light-gray);
  height: 60px;
  padding: 1.5rem;
  overflow: hidden;
  display: flex;
  justify-content: space-around;
  li {
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

export const Plans = styled.ul`
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0 1rem;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }
`;

export const Plan = styled.li`
  background: var(--color-white);
  box-shadow: 0px 0px 5px 0px rgba(89, 89, 89, 0.37);
  img {
    width: 100%;
    height: auto;
  }

  article {
    padding: 1rem;
    h3 {
      margin-bottom: 0.5rem;
    }
    p {
      line-height: 1.2;
      margin-bottom: 1rem;
    }
  }
`;
