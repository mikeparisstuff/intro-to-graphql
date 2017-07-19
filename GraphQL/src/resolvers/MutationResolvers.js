import Movies from '../data/Movies';

const MutationResolvers = {
  upvoteMovie: (obj, {movieId}, context, info) => {
    const movieIndex = Movies.findIndex(movie => parseInt(movie.id, 10) === parseInt(movieId, 10));
    Movies[movieIndex].rating = Movies[movieIndex].rating + 0.1;
    return Movies[movieIndex];
  },
  downvoteMovie: (obj, {movieId}, context, info) => {
    const movieIndex = Movies.findIndex(movie => parseInt(movie.id, 10) === parseInt(movieId, 10));
    Movies[movieIndex].rating = Movies[movieIndex].rating - 0.1;
    return Movies[movieIndex];
  }
}

export {
  MutationResolvers
}
