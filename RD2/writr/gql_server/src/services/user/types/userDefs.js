const { gql } = require( "apollo-server" );

const userDefs = gql`
  interface MutationResponse {
    code: String
    success: Boolean
    message: String
  }

  type User {
    name: String
    roles: Roles
    id: ID
    posts: [Post]
    username: String!
    email: String!
    isActive: Boolean
  }

  type LoggedInUser implements MutationResponse {
    code: String
    token: String
    success: Boolean
    message: String
  }

  enum Roles {
    AMDIN,
    EDITOR,
    MARKETER,
    MEMBER,
    VISIOR
  }

  extend type Query {
    getAllUsers: [User]
    getUser(id: ID): User
  }

  extend type Mutation {
    addUser(data: createUser): String
    loginUser(data: loginUser): LoggedInUser
    updateUser(data: updateUser): String
    deleteUser(id: ID!): String
  }

  input createUser {
    name: String
    username: String!
    password: String!
    email: String!
    roles: String
  }

  input loginUser {
    email: String!
    password: String!
  }
  
  input updateUser {
    name: String
    username: String
    password: String
    email: String
    roles: String
    isActive: Boolean
  }
`;

module.exports = userDefs;