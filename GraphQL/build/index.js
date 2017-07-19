'use strict';

var _resolvers = require('./resolvers');

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _expressGraphql = require('express-graphql');

var _expressGraphql2 = _interopRequireDefault(_expressGraphql);

var _graphqlTools = require('graphql-tools');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Reads the schema.graphql file before merging it with resolvers.
 */
var schema = _fs2.default.readFileSync(_path2.default.join(__dirname, 'schema.graphql')).toString();

/**
 * Combines the schema.graphql document with resolvers for the necessary fields.
 */
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

var builtSchema = (0, _graphqlTools.makeExecutableSchema)({
  typeDefs: schema,
  resolvers: {
    Query: _resolvers.QueryResolvers,
    Actor: _resolvers.ActorResolvers,
    Movie: _resolvers.MovieResolvers,
    Mutation: _resolvers.MutationResolvers
  }
});

var app = (0, _express2.default)();
app.use((0, _cors2.default)());

app.use('/', function (req, res) {
  (0, _expressGraphql2.default)({
    schema: builtSchema,
    pretty: true,
    graphiql: true,
    rootValue: {}
  })(req, res);
});

var port = process.env.NODE_ENV ? 80 : 5000;

app.listen(port, function () {
  console.log('app started on port ' + port);
});