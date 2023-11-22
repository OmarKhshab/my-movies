import { movie } from "../interfaces/movies";

export function moviesReducer(movies: movie[], action: { type: string; movie?: any; id?: number; category?: any }) {
    switch (action.type) {
      case actions.add: {
        action.movie.id = movies[movies.length - 1].id +1
        return [...movies, action.movie];
      }
      case actions.delete: {
        return movies.filter(movie => movie.id !== action.id);
      }
      case actions.changeCategory: {
        const newMovie: any = movies.find(movie=> movie.id === action.id);
        const index = movies.indexOf(newMovie);
        newMovie.category = action.category;
        const updatedMovies = movies;
        updatedMovies[index] = newMovie;
        return [...updatedMovies];
      }
      default: {
        throw Error('Unknown action: ' + action.type);
      }
    }
  }

  export const actions = {
    add: 'addMovie',
    delete: 'deleteMovie',
    changeCategory: 'changeCategory',
  }