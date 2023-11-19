import { movie } from "../interfaces/movies";

export function moviesReducer(movies: movie[], action: { type: string; movie?: any; id?: number; }) {
    switch (action.type) {
      case actions.add: {
        action.movie.id = movies[movies.length - 1].id +1
        return [...movies, action.movie];
      }
      case actions.delete: {
        return movies.filter(movie => movie.id !== action.id);
      }
      default: {
        throw Error('Unknown action: ' + action.type);
      }
    }
  }

  export const actions = {
    add: 'addMovie',
    delete: 'deleteMovie',
  }