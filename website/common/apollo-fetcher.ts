import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://wordpress.sv-odin.de/graphql",
  cache: new InMemoryCache(),
});

const fetcher = async (query: string) => {
  const { data } = await client.query({
    query: gql`
      ${query}
    `,
  });

  return data;
};

export default fetcher;
