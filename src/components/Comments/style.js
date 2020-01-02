import styled from 'styled-components';

export const CommentsWrapper = styled.section`
  width: 100%;
  height: auto;
  overflow: hidden;
  background: url('https://i.picsum.photos/id/961/1000/350.jpg') top
    center/cover no-repeat fixed var(--color-black);
  padding: 2rem 1rem;
  box-shadow: inset 0px 0px 5px 0px rgba(89, 89, 89, 0.57);
`;

export const CommentsTitle = styled.h3`
  font-size: 3rem;
  text-align: center;
  line-height: 1.6;
  color: var(--color-white);
  @media screen and (max-width: 580px) {
    line-height: 1;
    margin-bottom: 1rem;
  }
  @media screen and (max-width: 372px) {
    font-size: 2.5rem;
  }
`;

export const CommentsDescription = styled.p`
  text-align: center;
  font-size: 1.1rem;
  line-height: 1.5;
  margin-bottom: 2rem;
  color: var(--color-white);
`;

export const CommentsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 0 1rem;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
  }
  @media (max-width: 468px) {
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }
`;

export const Comment = styled.li`
  background: var(--color-white);
  padding: 1rem;
  display: flex;
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-right: 10px;
  }
  @media screen and (max-width: 1120px) {
    img {
      width: 60px;
      height: 60px;
    }
  }
  @media screen and (max-width: 968px) {
    flex-direction: column;
    align-items: center;
    img {
      width: 90px;
      height: 90px;
      margin-bottom: 1rem;
    }
  }
`;

export const CommentDescription = styled.div`
  div {
    display: flex;
    align-items: center;
    padding: 0.5rem 0;
  }
  blockquote {
    margin-left: 0.5rem;
  }
  p {
    font-size: 14px;
    line-height: 1.2;
  }
`;
