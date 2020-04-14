import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  height: auto;
  overflow: hidden;
`;

export const HeaderPlan = styled.article`
  width: 100%;
  height: calc(100vh - 400px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--color-black)
    url('https://enbici.s3.us-east-2.amazonaws.com/images/background-plans.jpg')
    bottom center/cover no-repeat fixed;
  small {
    display: block;
    color: var(--color-white);
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    text-align: center;
  }
  h1 {
    color: var(--color-white);
    font-size: 2.5rem;
    text-align: center;
  }
  @media screen and (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
    small {
      font-size: 1rem;
    }
  }
  @media screen and (max-width: 468px) {
    h1 {
      font-size: 1.75rem;
    }
    small {
      font-size: 0.8rem;
    }
  }
`;

export const ContentPlan = styled.article`
  width: 100%;
  height: auto;
  background: var(--color-white);
  position: relative;
`;

export const TablePlan = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  background: var(--color-white);
  transform: translateY(-40px);
  box-shadow: 0 3px 20px 5px rgba(0, 0, 0, 0.03);
`;

export const Features = styled.ul`
  background: var(--color-light-gray);
  height: 60px;
  padding: 1.5rem;
  overflow: hidden;
  display: flex;
  justify-content: space-around;
  font-weight: normal;
  li {
    display: flex;
    font-size: 1rem;
    svg {
      margin-right: 5px;
    }
  }
`;

export const Detail = styled.div`
  padding: 2rem;
`;

export const TitleGroup = styled.hgroup`
  display: flex;
  align-items: flex-end;
  margin: 1rem 0;
  h1 {
    font-size: 2rem;
  }
  small {
    margin-left: 10px;
    margin-bottom: 5px;
    span {
      font-weight: bold;
      font-size: 1rem;
      color: var(--color-blue);
    }
  }
`;

export const Description = styled.div`
  display: grid;
  grid-template-columns: 1fr 450px;
  grid-gap: 0 2rem;
  margin: 1rem 0;
  p {
    line-height: 1.3;
  }
`;

export const List = styled.div``;

export const Gallery = styled.div``;
