import styled from 'styled-components';

export const TouristicPlansWrapper = styled.section`
  padding: 1rem;
  h2 {
    line-height: 1.5;
    margin-bottom: 1rem;
  }
`;

export const TouristicPlansList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 0 0.5rem;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem 0.5rem;
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const Plan = styled.article`
  width: 100%;
  height: auto;
  box-shadow: 0 3px 20px 5px rgba(0, 0, 0, 0.03);
  img {
    width: 100%;
    height: auto;
  }
  &:hover {
    background: rgba(240, 240, 240, 0.5);
    cursor: pointer;
  }
`;

export const PlanLabels = styled.div`
  padding: 0.4rem;
  background: var(--color-blue);
  ul {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0;
    li {
      color: var(--color-white);
      display: flex;
      align-items: center;
    }
  }
`;

export const PlanDescription = styled.div`
  /* background: white; */
  padding: 1rem;
  h4 {
    padding: 0;
    margin: 0;
    line-height: 1.5;
    margin-bottom: 0.5rem;
  }
`;

export const PlanPrice = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  justify-content: space-between;
  /* background: var(--color-white); */
  span {
    display: flex;
    align-items: center;
  }
`;
