import styled from 'styled-components';

export const ExperiencesWrapper = styled.section`
  margin: 1rem 0 0 0;
  padding: 2rem 0;
  background: rgba(250, 250, 250, 0.4);
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Video = styled.video`
  margin: 2rem auto;
  width: 400px;
  box-shadow: 0 3px 20px 5px rgba(0, 0, 0, 0.03);
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
