import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://us-east-1-shared-usea1-02.cdn.hygraph.com/content/cle6hrau12p4l01urdr85779c/master",
  cache: new InMemoryCache(),
});

export { client };
