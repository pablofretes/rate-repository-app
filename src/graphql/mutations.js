import { gql } from 'apollo-boost';

export const SIGN_IN_MUTATION = gql`
    mutation authorize($username: String!, $password: String!){
        authorize(credentials: { username: $username, password: $password }){
            accessToken
        }
    }
`;

export const REVIEW_MUTATION = gql`
    mutation createReview($ownerName: String!, $repositoryName: String!, $rating: Int!, $review: String!){
        createReview(review: { ownerName: $ownerName, repositoryName: $repositoryName, rating: $rating, text: $review }){
            repositoryId
        }
    }
`;

export const SIGN_UP_MUTATION = gql`
    mutation createUser($username: String!, $password: String!){
        createUser(user: { username: $username, password: $password }){
            username
            createdAt
        }
    }
`;