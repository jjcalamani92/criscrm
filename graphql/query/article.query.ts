import { gql } from "graphql-request";

export const FIND_ARTICLES = gql`
  query FindBlogs {
    findBlogs {
      _id
      site
      page
      data {
        title
        description
        slug
      }
    }
  }
`;

