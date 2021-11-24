import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button} from 'react-bootstrap';
import Auth from '../utils/auth';
import { taskIds,getSavedTaskIds} from '../utils/localStorage';
import { useMutation } from '@apollo/client';
import { Create_TASK } from '../utils/mutations';

const CreateTask = () => {
  const [savedTaskIds, setSavedTaskIds] = useState(getSavedTaskIds());
  const [content, setTaskContent] = useState('');
  const [title, setTaskTitle] = useState('');
  const [saveTask] = useMutation(Create_TASK);

  useEffect(() => {
    return () => taskIds(savedTaskIds);
  });

  const handleSaveTask = async (title, content) => {
    const taskToSave = {title, content};
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      await saveTask({
        variables: { newTask: { ...taskToSave } },
      });

      setSavedTaskIds([...savedTaskIds, taskToSave.title]);
      window.location.assign('/saved');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Jumbotron fluid className='text-light bg-dark'>
        <Container>
          <h1>Create Task</h1>
          <Form>
            <Form.Row>
              <Col xs={12} md={8}>
                <Form.Control
                  name='title'
                  value={title}
                  onChange={(e) => setTaskTitle(e.target.value)}
                  type='text'
                  size='lg'
                  placeholder='Task Title'
                />
              </Col>
              <Col xs={12} md={8}>
                <Form.Control
                  name='content'
                  value={content}
                  onChange={(e) => setTaskContent(e.target.value)}
                  type='text'
                  size='lg'
                  placeholder='Task Content'
                />
              </Col>
              <Col xs={12} md={4}>
                <Button onClick={() => handleSaveTask(title, content)} variant='success' size='lg'>
                  Submit
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Container>
      </Jumbotron>
 
    </>
  );
};

export default CreateTask;