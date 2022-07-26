// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { gql, GraphQLClient } from 'graphql-request';
import { NextApiRequest, NextApiResponse } from 'next';

const graphqlApi = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT || '';
const graphCmsToken = process.env.GRAPH_CMS_TOKEN;

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
  const graphqlClient = new GraphQLClient(graphqlApi, {
    headers: {
      authorization: `Bearer ${graphCmsToken}`,
    },
  });

  // mutation in graphql means add some new data
  const query = gql`
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
    const result = await graphqlClient.request(query, {
      name,
      email,
      comment,
      slug,
    });
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json(err);
  }
}
