import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './styles.module.css';
import { getComments } from '../../redux/comments/comments-selectors';
import * as commentsOps from '../../redux/comments/comments-operations';

const CommentsList = () => {
  const dispatch = useDispatch();
  const comments = useSelector(getComments);

  useEffect(() => {
    dispatch(commentsOps.fetchComments());
  }, [dispatch]);

  return (
    <ul className={styles.comment__list}>
      {comments.map(comment => {
        return (
          <li key={comment.id} className={styles.comment__item}>
            <p className={styles.comment__name}>{comment.name}:</p>
            <p className={styles.comment__text}> {comment.text}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default CommentsList;
