import { createAction } from '@reduxjs/toolkit';

export const fetchCommentRequest = createAction('comment/fetchCommentRequest');
export const fetchCommentSuccess = createAction('comment/fetchCommentSuccess');
export const fetchCommentError = createAction('comment/fetchCommentError');

export const addCommentRequest = createAction('comment/addCommentRequest');
export const addCommentSuccess = createAction('comment/addCommentSuccess');
export const addCommentError = createAction('comment/addCommentError');
