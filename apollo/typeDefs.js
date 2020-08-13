import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    createdAt: Int!
  }
  type Product {
    id: ID!
    name: String!
    description: String!
    img_url: String!
    price: String!
    rating: String!
    createdAt: Int
    updatedAt: Int
  }
  input SignUpInput {
    name: String!
    email: String!
    password: String!
  }
  input SignInInput {
    email: String!
    password: String!
  }
  type ProductInput {
    name: String!
    description: String!
    img_url: String!
    price: String!
    rating: String!
  }
  type SignUpPayload {
    user: User!
  }
  type SignInPayload {
    user: User!
  }
  type ProductPayload {
    product: Product!
  }
  type Query {
    user(id: ID!): User!
    users: [User]!
    viewer: User
    products: [Product]!
    product(id: ID!): Product
  }
  type Mutation {
    signUp(input: SignUpInput!): SignUpPayload!
    signIn(input: SignInInput!): SignInPayload!
    signOut: Boolean!
  }
`;
