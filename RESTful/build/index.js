'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _MovieController = require('./controllers/MovieController');

var _MovieController2 = _interopRequireDefault(_MovieController);

var _ActorController = require('./controllers/ActorController');

var _ActorController2 = _interopRequireDefault(_ActorController);

var _MoviesAndActorsController = require('./controllers/MoviesAndActorsController');

var _MoviesAndActorsController2 = _interopRequireDefault(_MoviesAndActorsController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.use((0, _cors2.default)());

app.set('json spaces', 2);

app.get('/actors', _ActorController2.default.getAll);
app.get('/actor/:id', _ActorController2.default.getById);
app.get('/actor/:id/movies', _ActorController2.default.getActorMovies);

app.get('/movies', _MovieController2.default.getAll);
app.get('/movie/:id', _MovieController2.default.getById);
app.get('/movie/:id/actors', _MovieController2.default.getMovieActors);

app.get('/moviesAndActors', _MoviesAndActorsController2.default.getMoviesAndActors);

var port = process.env.NODE_ENV ? 80 : 3000;

app.listen(port, function () {
  console.log('app started on port ' + port);
});