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
  background: var(--color-black)
    url('https://enbici.s3.us-east-2.amazonaws.com/images/background-plans.jpg')
    bottom center/cover no-repeat fixed;
  h1 {
    color: var(--color-white);
    font-size: 2.5rem;
    text-align: center;
  }
  @media screen and (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
  }
  @media screen and (max-width: 468px) {
    h1 {
      font-size: 1.75rem;
    }
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
  box-shadow: 0 3px 20px 5px rgba(0, 0, 0, 0.03);
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
  @media screen and (max-width: 168px) {
    li {
      font-size: 1rem;
    }
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
  @media screen and (max-width: 468px) {
    padding: 1rem;
  }
`;

export const Plan = styled.li`
  background: var(--color-white);
  box-shadow: 0 3px 20px 5px rgba(0, 0, 0, 0.03);
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
    span {
      display: inline-block;
      margin-bottom: 1rem;
    }
    @media screen and (max-width: 768px) {
      padding: 1rem 0.5rem;
    }
  }
`;
