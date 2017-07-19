'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _Movies = require('../data/Movies');

var _Movies2 = _interopRequireDefault(_Movies);

var _MovieType = require('./MovieType');

var _MovieType2 = _interopRequireDefault(_MovieType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ActorType = new _graphql.GraphQLObjectType({
  name: 'Actor',
  description: 'A movie star',
  fields: function fields() {
    return {
      id: {
        type: _graphql.GraphQLInt,
        description: "The actor id"
      },
      name: {
        type: _graphql.GraphQLString,
        description: "The actor's name"
      },
      image: {
        type: _graphql.GraphQLString,
        description: "The actor's cover image url"
      },
      dob: {
        type: _graphql.GraphQLString,
        description: "The actor's dob"
      },
      num_credits: {
        type: _graphql.GraphQLInt,
        description: "The number of movies in which this actor has acted"
      },
      movies: {
        type: new _graphql.GraphQLList(_MovieType2.default),
        resolve: function resolve(actor) {
          var actorMovies = _Movies2.default.filter(function (movie) {
            return movie.actors.includes(actor.id);
          });
          return actorMovies;
        }
      }
    };
  }
});

exports.default = ActorType;