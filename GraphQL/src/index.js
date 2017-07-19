// import express from 'express';
// import cors from 'cors';
// import graphqlHTTP from 'express-graphql';
// import schema from './schema';

// const app = express();
// app.use(cors());

// app.use('/', (req, res)=>{
//   graphqlHTTP({
//     schema: schema,
//     pretty: true,
//     graphiql: true,
//     rootValue: {},
//   })(req,res);
// });

// const port = process.env.NODE_ENV ? 80 : 5000;

// app.listen(port, () => {
//   console.log(`app started on port ${port}`);
// });

/***************************************************************************
 * Uncomment below for schema language and succinct resolvers
 ***************************************************************************/

import {
  ActorResolvers,
  MovieResolvers,
  QueryResolvers,
  MutationResolvers
} from './resolvers';
import fs from 'fs';
import path from 'path';
import express from 'express';
import cors from 'cors';
import graphqlHTTP from 'express-graphql';
import { makeExecutableSchema } from 'graphql-tools';

/**
 * Reads the schema.graphql file before merging it with resolvers.
 */
const schema = fs.readFileSync(path.join(__dirname, 'schema.graphql')).toString();

/**
 * Combines the schema.graphql document with resolvers for the necessary fields.
 */
const builtSchema = makeExecutableSchema({
  typeDefs: schema,
  resolvers: {
    Query: QueryResolvers,
    Actor: ActorResolvers,
    Movie: MovieResolvers,
    Mutation: MutationResolvers
  },
});

const app = express();
app.use(cors());

app.use('/', (req, res)=>{
  graphqlHTTP({
    schema: builtSchema,
    pretty: true,
    graphiql: true,
    rootValue: {},
  })(req,res);
});

const port = process.env.NODE_ENV ? 80 : 5000;

app.listen(port, () => {
  console.log(`app started on port ${port}`);
});
