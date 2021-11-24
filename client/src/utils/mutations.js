import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login(
    $email: String!
    $password: String!
  ) {
    login(
      email: $email
      password: $password
    ) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      username: $username
      email: $email
      password: $password
    ) {
      token
      user {
        _id
        username
        email
        taskCount
        tasks {
          title
          content
        }
      }
    }
  }
`;

export const Create_TASK = gql`
  mutation createTask($newTask: InputTask!) {
    saveTask(newTask: $newTask) {
      _id
      username
      email
      tasks {
        _id
        title
        content
      }
    }
  }
`;

export const REMOVE_TASK = gql`
  mutation removeTask($taskId: ID!) {
    removeTask(taskId: $taskId) {
      _id
      username
      email
      tasks {
        _id
        title
        content
      }
    }
  }
`;