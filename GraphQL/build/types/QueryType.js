'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _Actors = require('../data/Actors');

var _Actors2 = _interopRequireDefault(_Actors);

var _ActorType = require('./ActorType');

var _ActorType2 = _interopRequireDefault(_ActorType);

var _Movies = require('../data/Movies');

var _Movies2 = _interopRequireDefault(_Movies);

var _MovieType = require('./MovieType');

var _MovieType2 = _interopRequireDefault(_MovieType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var QueryType = new _graphql.GraphQLObjectType({
  name: 'Query',
  fields: {
    movies: {
      type: new _graphql.GraphQLList(_MovieType2.default),
      resolve: function resolve(_) {
        return _Movies2.default;
      }
    },
    actors: {
      type: new _graphql.GraphQLList(_ActorType2.default),
      resolve: function resolve(_) {
        return _Actors2.default;
      }
    },
    movie: {
      type: _MovieType2.default,
      args: {
        id: {
          type: new _graphql.GraphQLNonNull(_graphql.GraphQLInt)
        }
      },
      resolve: function resolve(object, _ref, context, info) {
        var id = _ref.id;

        return _Movies2.default.find(function (movie) {
          return movie.id === id;
        });
      }
    },
    actor: {
      type: _ActorType2.default,
      args: {
        id: {
          type: new _graphql.GraphQLNonNull(_graphql.GraphQLInt)
        }
      },
      resolve: function resolve(object, _ref2, context, info) {
        var id = _ref2.id;

        return _Actors2.default.find(function (actor) {
          return actor.id === id;
        });
      }
    },
    searchMovies: {
      type: new _graphql.GraphQLList(_MovieType2.default),
      args: {
        term: {
          type: _graphql.GraphQLString
        }
      },
      resolve: function resolve(object, _ref3, context, info) {
        var term = _ref3.term;

        return _Movies2.default.filter(function (movie) {
          return movie.title.includes(term);
        });
      }
    },
    searchActors: {
      type: new _graphql.GraphQLList(_ActorType2.default),
      args: {
        term: {
          type: _graphql.GraphQLString
        }
      },
      resolve: function resolve(object, _ref4, context, info) {
        var term = _ref4.term;

        return _Actors2.default.filter(function (actor) {
          return actor.name.includes(term);
        });
      }
    }
  }
});

exports.default = QueryType;