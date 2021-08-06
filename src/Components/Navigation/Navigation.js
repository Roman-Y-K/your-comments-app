import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import Pagination from 'react-js-pagination';
import 'bootstrap/dist/css/bootstrap.min.css';

import styles from './styles.module.css';
import * as commentsOps from '../../redux/comments/comments-operations';
import {
  getNextPage,
  getLastPage,
  getTotalPage,
} from '../../redux/comments/comments-selectors';

function Navigation() {
  const page = useSelector(getNextPage);
  const lastPage = useSelector(getLastPage);
  const totalPage = useSelector(getTotalPage);
  const dispatch = useDispatch();

  const nextPage = page < totalPage ? page + 1 : totalPage;

  const onLoadMoreBtnClick = function () {
    dispatch(commentsOps.fetchComments(nextPage));
  };

  const onPaginateClick = function (page) {
    dispatch(commentsOps.fetchComments(page));
  };

  return (
    <div className={styles.nav}>
      <Pagination
        activePage={page}
        itemsCountPerPage={10}
        totalItemsCount={600}
        pageRangeDisplayed={5}
        onChange={onPaginateClick.bind(this)}
        itemClass="page-item"
        linkClass="page-link"
      />
      {lastPage && (
        <Button
          className={styles.nav__button}
          onClick={onLoadMoreBtnClick}
          variant="primary"
          type="button"
        >
          Load more...
        </Button>
      )}
    </div>
  );
}

export default Navigation;
