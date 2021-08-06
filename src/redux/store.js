import { configureStore } from '@reduxjs/toolkit';
import reducer from './comments/comments-reducer';

const store = configureStore({
  reducer: {
    comments: reducer,
  },
});

export default store;
