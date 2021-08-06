import React from 'react';
import CommentsForm from './Components/CommentsForm';
import CommentsList from './Components/CommentsList/';
import Navigation from './Components/Navigation';

import styles from './app.module.css';

function App() {
  return (
    <div className={styles.container}>
      <CommentsForm />
      <CommentsList />
      <Navigation />
    </div>
  );
}

export default App;
