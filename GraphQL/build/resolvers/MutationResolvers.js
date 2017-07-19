'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MutationResolvers = undefined;

var _Movies = require('../data/Movies');

var _Movies2 = _interopRequireDefault(_Movies);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MutationResolvers = {
  upvoteMovie: function upvoteMovie(obj, _ref, context, info) {
    var movieId = _ref.movieId;

    var movieIndex = _Movies2.default.findIndex(function (movie) {
      return parseInt(movie.id, 10) === parseInt(movieId, 10);
    });
    _Movies2.default[movieIndex].rating = _Movies2.default[movieIndex].rating + 0.1;
    return _Movies2.default[movieIndex];
  },
  downvoteMovie: function downvoteMovie(obj, _ref2, context, info) {
    var movieId = _ref2.movieId;

    var movieIndex = _Movies2.default.findIndex(function (movie) {
      return parseInt(movie.id, 10) === parseInt(movieId, 10);
    });
    _Movies2.default[movieIndex].rating = _Movies2.default[movieIndex].rating - 0.1;
    return _Movies2.default[movieIndex];
  }
};

exports.MutationResolvers = MutationResolvers;