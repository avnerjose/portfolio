import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    link: new HttpLink({
      uri: "https://us-east-1-shared-usea1-02.cdn.hygraph.com/content/cle6hrau12p4l01urdr85779c/master",
    }),
    cache: new InMemoryCache(),
  });
});

export const client = getClient();
