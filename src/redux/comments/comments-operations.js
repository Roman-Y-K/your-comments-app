import axios from 'axios';
import * as actions from './comments-actions';

axios.defaults.baseURL = 'https://jordan.ashton.fashion/api/goods/30';

export const fetchComments = page => dispatch => {
  dispatch(actions.fetchCommentRequest());

  axios
    .get('/comments', {
      params: {
        page: page,
      },
    })
    .then(({ data }) => dispatch(actions.fetchCommentSuccess(data)))
    .catch(error => dispatch(actions.fetchCommentError(error)));
};

export const addComment =
  ({ name, text }) =>
  dispatch => {
    const comment = {
      name,
      text,
    };

    console.log(JSON.stringify(comment));

    dispatch(actions.addCommentRequest());

    axios
      .post('/comments', comment)
      .then(({ data }) => dispatch(actions.addCommentSuccess(data)))
      .catch(error => dispatch(actions.addCommentError(error)));
  };
