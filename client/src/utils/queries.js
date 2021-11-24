import { gql } from '@apollo/client';

export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      taskCount
      tasks {
        _id
        title
        content
      }
    }
  }
`;