'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActorResolvers = undefined;

var _Movies = require('../data/Movies');

var _Movies2 = _interopRequireDefault(_Movies);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ActorResolvers = {
  movies: function movies(actor) {
    var actorMovies = _Movies2.default.filter(function (movie) {
      return movie.actors.includes(actor.id);
    });
    return actorMovies;
  }
};

exports.ActorResolvers = ActorResolvers;