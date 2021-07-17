import { ApolloServer, PubSub } from 'apollo-server';
import mongoose from 'mongoose';

function startServer({ typeDefs, resolvers }) {
  mongoose.connect('mongodb://admin:admin@localhost:27017/graphql?authSource=admin', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });

  // const pubsub = new PubSub();
  const server = new ApolloServer({ typeDefs, resolvers, context: { PubSub } });
  server.listen().then(({ url }) => console.log(`Server started at ${url}`));
}

export default startServer;
