// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next';

const graphCmsToken = process.env.GRAPH_CMS_TOKEN;

import { ApolloClient, gql as apolloGql, InMemoryCache } from '@apollo/client';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT || '';

const apolloClient = new ApolloClient({
  uri: graphqlAPI,
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer ${graphCmsToken}`,
  },
});

export default async function comments(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = req.body as {
    name: string;
    email: string;
    comment: string;
    slug: string;
  };
  const { name, email, comment, slug } = body;

  // mutation in graphql means add some new data
  const query = apolloGql`
    mutation CreateComment(
      $name: String!
      $email: String!
      $comment: String!
      $slug: String!
    ) {
      createComment(
        data: {
          name: $name
          email: $email
          comment: $comment
          post: { connect: { slug: $slug } }
        }
      ) {
        id
      }
    }
  `;

  try {
    const result = await apolloClient.mutate({
      variables: {
        name,
        email,
        comment,
        slug,
      },
      mutation: query,
    });
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json(err);
  }
}
