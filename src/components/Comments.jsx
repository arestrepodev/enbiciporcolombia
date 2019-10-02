import React from "react";
import { MdStar } from "react-icons/md";
import styled from "styled-components";

const CommentsWrapper = styled.section`
  width: 100%;
  height: auto;
  overflow: hidden;
  background: url("https://picsum.photos/id/961/1000/350") top center
    no-repeat/cover var(--color-black);
  padding: 2rem 1rem;
  box-shadow: inset 0px 0px 5px 0px rgba(89, 89, 89, 0.57);
`;

const CommentsTitle = styled.h3`
  font-size: 3rem;
  text-align: center;
  line-height: 1.6;
  color: var(--color-white);
`;

const CommentsDescription = styled.p`
  text-align: center;
  font-size: 1.1rem;
  line-height: 1.5;
  margin-bottom: 2rem;
  color: var(--color-white);
`;

const CommentsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 0 1rem;
  @media (max-width: 768px) {
  }
`;

const Comment = styled.li`
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

const CommentDescription = styled.div`
  blockquote {
    margin-left: 0.5rem;
  }
`;

export const Comments = () => {
  return (
    <CommentsWrapper>
      <CommentsTitle>Mejores Comentarios</CommentsTitle>
      <CommentsDescription>
        Para nosotros es importante el impacto que tenemos en las personas, por
        eso ellos nos recomiendan
      </CommentsDescription>
      <CommentsList>
        <Comment>
          <img
            src="https://pbs.twimg.com/profile_images/951055655594545153/F6eybr-i.jpg"
            alt="Perfil 1"
          />
          <CommentDescription>
            <div>
              <MdStar />
              <MdStar />
              <MdStar />
              <MdStar />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
              debitis!
            </p>
            <blockquote>Andrés Perez</blockquote>
          </CommentDescription>
        </Comment>
      </CommentsList>
    </CommentsWrapper>
  );
};
