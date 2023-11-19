import React, { Fragment, useReducer } from 'react';
import { movie } from '../../interfaces/movies';
import { actions, moviesReducer } from '../../reducers/movie-reducer';
import MovieItem from '../movies-item/MovieItem';
import styles from './MovieContainer.module.scss';

function MovieContainer() {
  let showForm = false;
    let movies: movie[] = [
      {
        title: 'whip lash',
        description: 'adventure about the musician who ants to excel as a drummer',
        image: 'https://assets.vogue.com/photos/58914f8785b39596184731d8/master/w_2560%2Cc_limit/holding-miles-teller-interview.jpg',
        id: 0,
      },
      {
        title: 'avengers inifinte wars',
        description: 'how will thanos collect the infinte stones will the avengers have a though about it',
        image: 'https://cdn.arstechnica.net/wp-content/uploads/2018/04/aveng-infinwar-logo-800x417.jpg',
        id: 1,
    },
    {
      title: 'avengers end game',
      description: 'will the avengers be able to bring half the universe back with half the team out',
      image: 'https://www.justwatch.com/images/backdrop/108456304/s1440/avengers-endgame.webp/avengers-endgame.webp',
      id: 2,
  }];
  const [moviesObj, dispatch] = useReducer(
    moviesReducer,
    movies
  );
 const handledeleteMovie = (movie: movie) => {
  dispatch({type: actions.delete, id: movie.id})
}
const handleShowForm = ()=> {
  showForm = true;
}
const handleSubmit =  (e: any) => {
  e.preventDefault();
  const imgEle = document.getElementById('img') as HTMLFormElement;
  const imgText = imgEle.value;
  const descpEle = document.getElementById('desp')  as HTMLFormElement;
  const descpText = descpEle.value;
  const nameEle = document.getElementById('name')  as HTMLFormElement;
  const nameText = nameEle.value;
  let newMovie = {
    description: descpText,
    title: nameText,
    image: imgText,
  };
  
  dispatch({type: actions.add, movie: newMovie})
};
  return (
    <Fragment>
    <div className={styles.body}>
      {
        moviesObj.map((currMovie) => ((
          
          <MovieItem movie={currMovie} handleDeleteMovie={handledeleteMovie} key={currMovie.id}/>
          )))
      }
    </div>
    
    <button className={styles.body__addBtn}  onClick={handleShowForm}>add movie</button>
    {!showForm && <form onSubmit={handleSubmit} className={styles.body__form}>
      <label className={styles.body__label}>
        Name:
        <input
          type="text"
          id='name'
          className={styles.body__input}
        />
      </label>
      <label className={styles.body__label}>
        Image:
        <input
         className={styles.body__input}
          type="text"
          id='img'
        />
      </label>
      <label className={styles.body__label}>
        Description:
        <input 
          type="text"
          id="desp"
         className={styles.body__input}/>
      </label>
      <button className={styles.body__addBtn} type="submit">Submit</button>
    </form>}
    </Fragment>
  );
}

export default MovieContainer;
