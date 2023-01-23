import { gql } from '@apollo/client';

export const Get_Posts = gql`
  query getPosts($first: Int, $after: String) {
    postsConnection(first: $first, after: $after) {
      edges {
        node {
          createdAt
          slug
          author {
            bio
            id
            name
            photo {
              url
            }
          }
          title
          excerpt
          featuredImage {
            url
          }
          categories {
            name
            slug
          }
        }
        cursor
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;
