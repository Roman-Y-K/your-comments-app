export const getComments = state => {
  return state.comments.items;
};

export const getNextPage = state => {
  return state.comments.nextPage;
};

export const getLastPage = state => {
  return state.comments.lastPage;
};

export const getTotalPage = state => {
  return state.comments.totalPage;
};
