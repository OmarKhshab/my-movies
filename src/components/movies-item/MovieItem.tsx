import React from 'react';
import styles from './MovieItem.module.scss';

function MovieItem(props: any) {
  const {movie , handleDeleteMovie } = props;
  console.log(props);
  const handleDeleteCurrMovie = () => {
    handleDeleteMovie(movie);
  };
  return (
    <div className={styles.bookCard}>
      <img className={styles.bookCard__img} src={movie.image} alt="movie header" />
      <h3 className={styles.bookCard__title}>{movie.title}</h3>
      <p >{movie.description}</p>
      <button className={styles.bookCard__deleteBtn} onClick={handleDeleteCurrMovie}>delete movie</button>
    </div>
  );
}

export default MovieItem;
