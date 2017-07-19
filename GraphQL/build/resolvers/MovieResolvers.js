'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MovieResolvers = undefined;

var _Actors = require('../data/Actors');

var _Actors2 = _interopRequireDefault(_Actors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MovieResolvers = {
  actors: function actors(movie) {
    var movieActors = movie.actors.map(function (actorId) {
      return _Actors2.default.find(function (o) {
        return o.id === actorId;
      });
    });
    return movieActors;
  }
};

exports.MovieResolvers = MovieResolvers;