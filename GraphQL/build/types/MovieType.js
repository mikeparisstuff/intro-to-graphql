'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _Actors = require('../data/Actors');

var _Actors2 = _interopRequireDefault(_Actors);

var _Movies = require('../data/Movies');

var _Movies2 = _interopRequireDefault(_Movies);

var _ActorType = require('./ActorType');

var _ActorType2 = _interopRequireDefault(_ActorType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MovieType = new _graphql.GraphQLObjectType({
  name: 'Movie',
  description: 'A blockbuster movie',
  fields: function fields() {
    return {
      id: {
        type: _graphql.GraphQLInt,
        description: "The movie id"
      },
      title: {
        type: _graphql.GraphQLString,
        description: "The movie's title"
      },
      image: {
        type: _graphql.GraphQLString,
        description: "The movie's cover image url"
      },
      release_year: {
        type: _graphql.GraphQLInt,
        description: "The movie release date"
      },
      tags: {
        type: new _graphql.GraphQLList(_graphql.GraphQLString),
        description: "Movie tags"
      },
      rating: {
        type: _graphql.GraphQLFloat,
        description: "The movie rating"
      },
      actors: {
        type: new _graphql.GraphQLList(_ActorType2.default),
        resolve: function resolve(movie) {
          var movieActors = movie.actors.map(function (actorId) {
            return _Actors2.default.find(function (o) {
              return o.id === actorId;
            });
          });
          return movieActors;
        }
      }
    };
  }
});

exports.default = MovieType;