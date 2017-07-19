import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
  GraphQLInt
} from 'graphql';
import Actors from './data/Actors';
import ActorType from './types/ActorType';
import Movies from './data/Movies';
import MovieType from './types/MovieType';
import QueryType from './types/QueryType';

const schema = new GraphQLSchema({
  query: QueryType
});

export default schema;