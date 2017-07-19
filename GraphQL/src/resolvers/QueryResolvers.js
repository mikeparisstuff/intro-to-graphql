import Movies from '../data/Movies';
import Actors from '../data/Actors';

const QueryResolvers = {
  movies: _ => Movies,
  actors: _ => Actors,
  movie: (obj, {id}, context, info) => Movies.find(movie => parseInt(movie.id) === parseInt(id)),
  actor: (obj, {id}, context, info) => Actors.find(actor => parseInt(actor.id) === parseInt(id)),
  searchMovies: (obj, {term}, context, info) => Movies.filter(movie => movie.title.includes(term)),
  searchActors: (obj, {term}, context, info) => Actors.filter(actor => actor.name.includes(term))
}

export {
  QueryResolvers
}
