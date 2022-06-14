import { GraphQLClient, gql } from 'graphql-request'

const graphQLClient = new GraphQLClient("https://wordpress.sv-odin.de/graphql");

const fetcher = async (query: string) => {
    const data = await graphQLClient.request(gql`${query}`);
    return data;
}

export default fetcher