import styled from 'styled-components';

export const ExperiencesWrapper = styled.section`
  margin: 1rem 0 0 0;
  padding: 2rem 0;
  background: rgba(250, 250, 250, 0.4);
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const ExperiencesTitle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  small {
    color: var(--color-blue);
    font-weight: bold;
    font-size: 1.2rem;
  }
  h3 {
    font-size: 2.5rem;
    line-height: 1.2;
  }
`;

export const Video = styled.video`
  margin: 2rem auto;
  width: 400px;
  box-shadow: 0px 0px 5px 0px rgba(89, 89, 89, 0.37);
  @media (max-width: 400px) {
    width: 100%;
  }
`;

export const ExperienceDescription = styled.article`
  margin: 0 auto;
  width: 65%;
  text-align: center;
  p {
    line-height: 1.1;
    margin-bottom: 1rem;
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`;
