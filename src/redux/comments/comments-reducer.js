import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { fetchCommentSuccess } from './comments-actions';

const items = createReducer([], {
  [fetchCommentSuccess]: (state, { payload }) => payload.data,
  // [addCommentSuccess]: (_, { payload }) => console.log(payload),
});

const nextPage = createReducer(1, {
  [fetchCommentSuccess]: (_, { payload }) => payload.current_page,
});

const lastPage = createReducer(false, {
  [fetchCommentSuccess]: (_, { payload }) => Boolean(payload.next_page_url),
});

const totalPage = createReducer(1, {
  [fetchCommentSuccess]: (_, { payload }) => payload.last_page,
});

export default combineReducers({
  items,
  nextPage,
  lastPage,
  totalPage,
});
