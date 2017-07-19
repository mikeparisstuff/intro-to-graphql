'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _Actors = require('./data/Actors');

var _Actors2 = _interopRequireDefault(_Actors);

var _ActorType = require('./types/ActorType');

var _ActorType2 = _interopRequireDefault(_ActorType);

var _Movies = require('./data/Movies');

var _Movies2 = _interopRequireDefault(_Movies);

var _MovieType = require('./types/MovieType');

var _MovieType2 = _interopRequireDefault(_MovieType);

var _QueryType = require('./types/QueryType');

var _QueryType2 = _interopRequireDefault(_QueryType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var schema = new _graphql.GraphQLSchema({
  query: _QueryType2.default
});

exports.default = schema;