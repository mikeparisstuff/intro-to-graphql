import Actors from '../data/Actors'

const MovieResolvers = {
  actors: (movie) => {
    const movieActors = movie.actors.map(actorId => Actors.find(o => o.id === actorId))
    return movieActors;
  }
}

export {
  MovieResolvers
}