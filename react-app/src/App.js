import React, { Component } from 'react';
import { gql, graphql, compose } from 'react-apollo';
import logo from './logo.svg';
import './App.css';

const Actor = props => (
  <div className="actor">
    <img src={props.actor.image}/>
    <div>
      {props.actor.name}
    </div>
  </div>
)

const Movie = props => (
  <div className="movie">
    <div>
      <h2>{props.movie.title}</h2>
      <div 
        className="arrow-up" 
        onClick={() => props.upvoteMovie(props.movie)}
      >
      </div>
      <div 
        className="arrow-down"
        onClick={() => props.downvoteMovie(props.movie)}
      >
      </div>
      <h5>Rating: {props.movie.rating}</h5>
    </div>
    <img src={props.movie.image}/>
    <h3>Actors</h3>
    <div className="actors">
      {
        props.movie.actors.map(
          actor => 
            <Actor 
              key={actor.id}
              actor={actor} 
            />
        )
      }
    </div>
  </div>
)

class App extends Component {
  render() {
    const isLoading = this.props.data.loading;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={() => this.props.data.refetch()}>
            Refresh
          </button>
        </div>
        {
          isLoading ?
            <h1>Loading</h1> :
            <div>
              <ul>
                {this.props.data.movies.map(movie => (
                  <Movie
                    key={movie.id}
                    movie={movie} 
                    upvoteMovie={(m) => this.props.upvoteMovie(m)}
                    downvoteMovie={(m) => this.props.downvoteMovie(m)}
                  />
                ))}
              </ul>
            </div>
        }
      </div>
    );
  }
}

const AllMoviesQuery = gql`
  query AllMoviesQuery {
    movies {
      id
      title
      image
      rating
      actors {
        id
        image
        name
      }
    }
  }
`

const UpvoteMovieMutation = gql`
  mutation UpvoteMovie($id: ID!) {
    upvoteMovie(movieId:$id) {
      id
      rating
    }
  }
`;

const DownvoteMovieMutation = gql`
  mutation DownvoteMovie($id: ID!) {
    downvoteMovie(movieId:$id) {
      id
      rating
    }
  }
`;

export default compose(
  /**
   * Compose in our component's query.
   */
  graphql(AllMoviesQuery),
  
  /**
   * Compose in the upvoteMovie mutation. This will also
   * enable optimistic updates for our mutation.
   */
  graphql(UpvoteMovieMutation, { 
    props: ({ mutate }) => ({
      upvoteMovie: (movie) => mutate({ 
        variables: { id: movie.id },

        // Returns the "expected" result for optimistic cache updates.
        optimisticResponse: {
          __typename: 'Mutation',
          upvoteMovie: {
            __typename: 'Movie',
            id: movie.id,
            rating: movie.rating + 0.1,
          },
        },
      }),
    })
  }),

  /**
   * The same thing as above except for downvotes.
   */
  graphql(DownvoteMovieMutation, {
    props: ({ mutate }) => ({
      downvoteMovie: (movie) => mutate({ 
        variables: { id: movie.id },
        optimisticResponse: {
          __typename: 'Mutation',
          downvoteMovie: {
            __typename: 'Movie',
            id: movie.id,
            rating: movie.rating - 0.1,
          },
        },
      }),
    })
  })
)(App);
