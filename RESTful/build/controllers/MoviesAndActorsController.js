'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _Movies = require('../data/Movies');

var _Movies2 = _interopRequireDefault(_Movies);

var _Actors = require('../data/Actors');

var _Actors2 = _interopRequireDefault(_Actors);

var _toLink = require('../utilities/toLink');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toMovieResource(req, movie) {
  var href = (0, _toLink.toLink)(req, 'movie', movie.id);
  return (0, _extends3.default)({}, movie, {
    actors: movie.actors.map(function (actorId) {
      var actor = _Actors2.default.find(function (o) {
        return o.id === actorId;
      });
      return toActorResource(req, actor);
    }),
    href: href
  });
}

function toActorResource(req, actor) {
  var href = (0, _toLink.toLink)(req, 'actor', actor.id);
  return (0, _extends3.default)({}, actor, {
    href: href,
    movies: href + '/movies'
  });
}

var MoviesAndActorsController = function () {
  function MoviesAndActorsController() {
    (0, _classCallCheck3.default)(this, MoviesAndActorsController);
  }

  (0, _createClass3.default)(MoviesAndActorsController, [{
    key: 'getMoviesAndActors',
    value: function getMoviesAndActors(req, res) {
      var movies = _Movies2.default.map(function (movie) {
        return toMovieResource(req, movie);
      });
      res.send(movies);
    }
  }]);
  return MoviesAndActorsController;
}();

var controller = new MoviesAndActorsController();
exports.default = controller;