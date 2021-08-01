import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
    query{
        repositories{
        edges{
            node{
                id
                ownerAvatarUrl
                fullName
                description
                language
                forksCount
                stargazersCount
                reviewCount
                ratingAverage
            }
        }
        }
    }
`;

export const AUTHORIZATION = gql`
    query{
        authorizedUser{
            id
            username
        }
    }
`;