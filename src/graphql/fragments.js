import { gql } from 'apollo-boost';

export const REPOSITORY_FRAGMENT = gql`
    fragment RepositoryDetails on Repository {
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
`;

export const REVIEW_FRAGMENT = gql`
    fragment ReviewDetails on Review {
        id
        text
        rating
        createdAt
        user {
          id
          username
        }
    }
`;