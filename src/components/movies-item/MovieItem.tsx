import React from 'react';
import styles from './MovieItem.module.scss';

function MovieItem(props: any) {
  const {movie , handleDeleteMovie, handleChangeCategory } = props;
  const handleDeleteCurrMovie = () => {
    handleDeleteMovie(movie);
  };
  const handlechangeMovieCategory = (e: any) => {
    handleChangeCategory(movie.id, e.target.value);
  }
  return (
    <div className={styles.bookCard}>
      <img className={styles.bookCard__img} src={movie.image} alt="movie header" />
      <h3 className={styles.bookCard__title}>{movie.title}</h3>
      <p className={styles.bookCard__description}>{movie.description}</p>
      <select className={styles.bookCard__customSelect} onChange={handlechangeMovieCategory} role="contentinfo" defaultValue="none">
        <option value="none" disabled> Move to...</option>
        <option value="2">Currently Watching</option>
        <option value="1">Want to Watch</option>
        <option value="0">watched</option>
      </select>
      <button className={styles.bookCard__deleteBtn} onClick={handleDeleteCurrMovie}>delete movie</button>
</div>
  );
}

export default MovieItem;
