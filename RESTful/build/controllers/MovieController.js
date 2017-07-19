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
    actors: href + '/actors',
    href: href
  });
}

var MovieController = function () {
  function MovieController() {
    (0, _classCallCheck3.default)(this, MovieController);
  }

  (0, _createClass3.default)(MovieController, [{
    key: 'getById',
    value: function getById(req, res) {
      var id = parseInt(req.params.id);
      var movie = toMovieResource(req, _Movies2.default.find(function (o) {
        return o.id === id;
      }));
      res.send(movie);
    }
  }, {
    key: 'getAll',
    value: function getAll(req, res) {
      var movies = _Movies2.default.map(function (movie) {
        return {
          href: (0, _toLink.toLink)(req, 'movie', movie.id)
        };
      });
      res.send(movies);
    }
  }, {
    key: 'getMovieActors',
    value: function getMovieActors(req, res) {
      var movieId = parseInt(req.params.id);
      var movie = _Movies2.default.find(function (m) {
        return m.id === movieId;
      });
      var actorLinks = _Actors2.default.filter(function (actor) {
        return movie.actors.includes(actor.id);
      }).map(function (actor) {
        return { href: (0, _toLink.toLink)(req, 'actor', actor.id) };
      });
      res.send(actorLinks);
    }
  }]);
  return MovieController;
}();

var controller = new MovieController();
exports.default = controller;