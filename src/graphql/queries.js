import { gql } from '@apollo/client';
import { REPOSITORY_FRAGMENT, REVIEW_FRAGMENT } from './fragments';

export const GET_REPOSITORIES = gql`
    query{
        repositories{
        edges{
            node{
                ...RepositoryDetails,
            }
        }
        }
    }
    ${REPOSITORY_FRAGMENT}
`;

export const AUTHORIZATION = gql`
    query{
        authorizedUser{
            id
            username
            reviews{
                edges{
                    node{
                        ...ReviewDetails
                    }
                }
            }
        }
    }
    ${REVIEW_FRAGMENT}
`;

export const REPOSITORY = gql`
    query repository($id: ID!){
        repository(id: $id){
            ...RepositoryDetails,
            url
            reviews {
                edges {
                  node {
                    ...ReviewDetails
                  }
                }
              }
        }
    }
    ${REPOSITORY_FRAGMENT}
    ${REVIEW_FRAGMENT}
`;