import React, { useContext } from 'react';
import { MdStarHalf } from 'react-icons/md';
import { Context } from '../../Context';
import {
  CommentsWrapper,
  CommentsTitle,
  CommentDescription,
  CommentsList,
  Comment,
  CommentsDescription,
} from './style';
// eslint-disable-next-line import/no-unresolved
import comments from '../../api/comments.json';

const Comments = () => {
  const { isEnglish } = useContext(Context);
  return (
    <CommentsWrapper>
      <CommentsTitle>
        {isEnglish ? 'Best Comments' : 'Mejores Comentarios'}
      </CommentsTitle>
      <CommentsDescription>
        {isEnglish
          ? 'The impact we have on people is important to us, for that they recommend us.'
          : 'Para nosotros es importante el impacto que tenemos en las personas, por eso ellos nos recomiendan.'}
      </CommentsDescription>
      <CommentsList>
        {comments.map((comment) => (
          <Comment key={comment.id}>
            <img src={comment.img} alt={`Comentario de ${comment.author}`} />
            <CommentDescription>
              <div>
                <MdStarHalf />
                {comment.stars}
              </div>
              <p>{comment.message}</p>
              <blockquote>{comment.author}</blockquote>
            </CommentDescription>
          </Comment>
        ))}
      </CommentsList>
    </CommentsWrapper>
  );
};

export default Comments;
