import React from 'react';
import { Jumbotron, Container, CardColumns, Card, Button } from 'react-bootstrap';
import Auth from '../utils/auth';
import { removeTaskId } from '../utils/localStorage';
import { useQuery, useMutation } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import { REMOVE_TASK } from '../utils/mutations';

const SavedTasks = () => {
  const { loading, data } = useQuery(GET_ME);
  const [removeTask] = useMutation(REMOVE_TASK);
  const userData = data?.me || {};

  // create function that accepts the book's mongo _id value as param and deletes the book from the database
  const handleDeleteTask = async (taskId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      await removeTask({
        variables: { taskId },
      });

      removeTaskId(taskId);
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      <Jumbotron fluid className='text-light bg-dark'>
        <Container>
          <h1>Viewing saved tasks!</h1>
        </Container>
      </Jumbotron>
      <Container>
        <h2>
          {userData.tasks.length
            ? `Viewing ${userData.tasks.length} saved ${userData.tasks.length === 1 ? 'task' : 'tasks'}:`
            : 'You have no saved tasks!'}
        </h2>
        <CardColumns>
          {userData.tasks.map((task) => {
            return (
              <Card key={task.title} border='dark'>
                
                <Card.Body>
                  <Card.Title>{task.title}</Card.Title>
                  <Card.Text>{task.content}</Card.Text>
                  <Button className='btn-block btn-danger' onClick={() => {
                    console.log(task)
                    handleDeleteTask(task._id)}}>
                    
                    Delete this Task!
                    
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default SavedTasks;