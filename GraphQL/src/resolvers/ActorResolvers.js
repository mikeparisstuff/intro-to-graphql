import Movies from '../data/Movies';

const ActorResolvers = {
  movies: (actor) => {
    const actorMovies = Movies.filter(
      movie => movie.actors.includes(actor.id)
    );
    return actorMovies;
  }
}

export {
  ActorResolvers
}