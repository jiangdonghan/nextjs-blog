import { ApolloClient, gql as apolloGql, InMemoryCache } from '@apollo/client';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT || '';

const client = new ApolloClient({
  uri: graphqlAPI,
  cache: new InMemoryCache(),
});

export const getPosts = async () => {
  const query = apolloGql`
    query MyQuery {
      postsConnection {
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
        }
      }
    }
  `;
  // const res = await request(graphqlAPI, query);
  const res = await client.query({ query });
  return res.data.postsConnection.edges;
};

export const getRecentPosts = async () => {
  const query = apolloGql`
    query GetPostDetails {
      posts(orderBy: createdAt_ASC, last: 3) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;
  const res = await client.query({ query });
  return res.data.posts;
};

export const getSimilarPosts = async (slug?: string, category?: string[]) => {
  const query = apolloGql`
    query GetPostDetails($slug: String!, $category: [String!]) {
      posts(
        where: {
          slug_not: $slug
          AND: { categories_some: { slug_in: $category } }
        }
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;
  const res = await client.query({ query, variables: { slug, category } });

  // const res = await request(graphqlAPI, query, { slug, category });
  return res.data.posts;
};

export const getCategories = async () => {
  const query = apolloGql`
    query GetCategories {
      categories {
        name
        slug
      }
    }
  `;
  const res = await client.query({ query });
  return res.data.categories;
};

export const getPostDetails = async (slug: string) => {
  const query = apolloGql`
    query GetPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
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
        content {
          raw
        }
        contentMarkdown
        useMarkdown
      }
    }
  `;
  const res = await client.query({ query, variables: { slug } });
  return res.data.post;
};

export const submitComment = async (obj: any) => {
  const result = await fetch('/api/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });

  return result.json();
};

export const getComments = async (slug: string) => {
  const query = apolloGql`
    query GetComments($slug: String!) {
      comments(where: { post: { slug: $slug } }) {
        name
        createdAt
        comment
      }
    }
  `;
  const res = await client.query({ query, variables: { slug } });
  return res.data.comments;
};

export const getCategoryPost = async (slug: string) => {
  const query = apolloGql`
    query GetCategoryPost($slug: String!) {
      postsConnection(where: { categories_some: { slug: $slug } }) {
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
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
        }
      }
    }
  `;

  const res = await client.query({ query, variables: { slug } });
  return res.data.postsConnection.edges;
};
