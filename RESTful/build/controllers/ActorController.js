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

function toActorResource(req, actor) {
  var href = (0, _toLink.toLink)(req, 'actor', actor.id);
  return (0, _extends3.default)({}, actor, {
    href: href,
    movies: href + '/movies'
  });
}

var ActorController = function () {
  function ActorController() {
    (0, _classCallCheck3.default)(this, ActorController);
  }

  (0, _createClass3.default)(ActorController, [{
    key: 'getById',
    value: function getById(req, res) {
      var id = parseInt(req.params.id);
      var actor = toActorResource(req, _Actors2.default.find(function (o) {
        return o.id === id;
      }));
      res.send(actor);
    }
  }, {
    key: 'getAll',
    value: function getAll(req, res) {
      var actors = _Actors2.default.map(function (actor) {
        return {
          href: (0, _toLink.toLink)(req, 'actor', actor.id)
        };
      });
      res.send(actors);
    }
  }, {
    key: 'getActorMovies',
    value: function getActorMovies(req, res) {
      var actorId = parseInt(req.params.id);
      var movies = _Movies2.default.filter(function (m) {
        return m.actors.includes(actorId);
      });
      var movieLinks = movies.map(function (movie) {
        return { href: (0, _toLink.toLink)(req, 'movie', movie.id) };
      });
      res.send(movieLinks);
    }
  }]);
  return ActorController;
}();

var controller = new ActorController();
exports.default = controller;