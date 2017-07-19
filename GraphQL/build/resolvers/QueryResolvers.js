'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QueryResolvers = undefined;

var _Movies = require('../data/Movies');

var _Movies2 = _interopRequireDefault(_Movies);

var _Actors = require('../data/Actors');

var _Actors2 = _interopRequireDefault(_Actors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var QueryResolvers = {
  movies: function movies(_) {
    return _Movies2.default;
  },
  actors: function actors(_) {
    return _Actors2.default;
  },
  movie: function movie(obj, _ref, context, info) {
    var id = _ref.id;
    return _Movies2.default.find(function (movie) {
      return parseInt(movie.id) === parseInt(id);
    });
  },
  actor: function actor(obj, _ref2, context, info) {
    var id = _ref2.id;
    return _Actors2.default.find(function (actor) {
      return parseInt(actor.id) === parseInt(id);
    });
  },
  searchMovies: function searchMovies(obj, _ref3, context, info) {
    var term = _ref3.term;
    return _Movies2.default.filter(function (movie) {
      return movie.title.includes(term);
    });
  },
  searchActors: function searchActors(obj, _ref4, context, info) {
    var term = _ref4.term;
    return _Actors2.default.filter(function (actor) {
      return actor.name.includes(term);
    });
  }
};

exports.QueryResolvers = QueryResolvers;