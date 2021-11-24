const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    taskCount: Int
    tasks: [Task]
  }
  type Auth {
    token: ID!
    user: User
  }
  type Task {
    _id: ID
    title: String
    content: String
  }
  input InputTask {
    title: String
    content: String  
  }
  type Query {
    me: User
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveTask(newTask: InputTask!): User
    removeTask(taskId: ID!): User
  }
`;

module.exports = typeDefs;