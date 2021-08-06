import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './styles.module.css';
import * as commentsOps from '../../redux/comments/comments-operations';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const reset = () => {
    setName('');
    setText('');
  };

  const handleChange = evt => {
    if (evt.currentTarget.name !== 'text') {
      setName(evt.currentTarget.value);
    } else {
      setText(evt.currentTarget.value);
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    dispatch(commentsOps.addComment({ name, text }));

    reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Comment</Form.Label>
        <Form.Control
          placeholder="Comment"
          name="text"
          value={text}
          type="text"
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Button className={styles.button} variant="primary" type="submit">
        Add comment
      </Button>
    </Form>
  );
}
