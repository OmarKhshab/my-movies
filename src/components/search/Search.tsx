import React, { Fragment, useState } from 'react';
import styles from './Search.module.scss';
import {DebounceInput} from 'react-debounce-input';
import MovieItem from '../movies-item/MovieItem';
import { categories, movie } from '../../interfaces/movies';

function Search() {
  let movies: movie[] = [
    {
      title: 'whip lash',
      description: 'adventure about the musician who ants to excel as a drummer',
      image: 'https://assets.vogue.com/photos/58914f8785b39596184731d8/master/w_2560%2Cc_limit/holding-miles-teller-interview.jpg',
      id: 0,
      category: categories.watched,
    },
    {
      title: 'avengers inifinte wars',
      description: 'how will thanos collect the infinte stones will the avengers have a though about it',
      image: 'https://cdn.arstechnica.net/wp-content/uploads/2018/04/aveng-infinwar-logo-800x417.jpg',
      id: 1,
      category: categories.watched,
  },
  {
    title: 'avengers end game',
    description: 'will the avengers be able to bring half the universe back with half the team out',
    image: 'https://www.justwatch.com/images/backdrop/108456304/s1440/avengers-endgame.webp/avengers-endgame.webp',
    id: 2,
    category: categories.watched,
},
{
  title: 'killers of the flower moon',
  description: 'Based on David Grann`s broadly lauded best-selling book, "Killers of the Flower Moon" is set in 1920s Oklahoma and depicts the serial murder of members of the oil-wealthy Osage Nation, a string of brutal crimes that came to be known as the Reign of Terror.',
  image: 'https://resizing.flixster.com/XHPHiHfJoxMe7zOs-4N9S6IjVx0=/fit-in/180x240/v2/https://resizing.flixster.com/GGQKtXozu58SHWKH0Cz-5jQ9U38=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzZhOWE1N2ZkLTY4MzgtNDA3Yi05MDEwLWQzN2QwMTFkZDdmNS5qcGc=',
  id: 3,
  category: categories.watching,
},
{
  title: 'pay or die',
  description: 'Today, nearly 2 million Americans are being held for ransom. Without insulin, they`ll be dead in days. PAY OR DIE follows 3 families on the receiving end of these ransom notes, revealing the harrowing reality of life with chronic illness in the richest country in the world. From a mother-and-daughter struggling to rebuild their lives after losing their home when they had to spend their rent money on insulin, to a young adult diagnosed with type 1 diabetes during the COVID-19 pandemic, to a Minnesota family thrust into the national spotlight when their 26-year-old son dies from rationing his insulin, PAY OR DIE lays bare the human cost of America`s insulin affordability crisis.',
  image: 'https://resizing.flixster.com/TJKv1NMQTMX1LEYeKe7o-TU96jQ=/206x305/v2/https://resizing.flixster.com/FSysXMgFTTUGh-Xs9oIip0KjE8I=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzQ3ODA4NTMyLTdhYjMtNDE1ZS1hMzM3LTc2MTdjYzQ3YjcyYS5qcGc=',
  id: 4,
  category: categories.watching,
},
{
  title: 'Oppenheimer',
  description: 'During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J. Robert Oppenheimer to work on the top-secret Manhattan Project. Oppenheimer and a team of scientists spend years developing and designing the atomic bomb. Their work comes to fruition on July 16, 1945, as they witness the world`s first nuclear explosion, forever changing the course of history.',
  image: 'https://resizing.flixster.com/xEsTyQzXBxr1ned-e96wvfSbDy8=/300x300/v2/https://resizing.flixster.com/_eFOVM3kfMDyow0lPjCyiV0ytX0=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzEwY2ZkNDQ1LWRhODUtNDdkMS05MzU2LTY4MDY5MDU4YmQyYi5qcGc=',
  id: 5,
  category: categories.watching,
},
{
  title: 'Ghostbusters: Frozen Empire',
  description: 'In Ghostbusters: Frozen Empire, the Spengler family returns to where it all started -- the iconic New York City firehouse -- to team up with the original Ghostbusters, who`ve developed a top-secret research lab to take busting ghosts to the next level. But when the discovery of an ancient artifact unleashes an evil force, Ghostbusters new and old must join forces to protect their home and save the world from a second Ice Age.',
  image: 'https://resizing.flixster.com/Qwd8jK1De4vqmCUBlj1z1dhBiK0=/300x300/v2/https://resizing.flixster.com/tgAocovBIrVS4PhhB4Km-1c4wvI=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2I1YmYzZTA3LTJjYzEtNDE3Zi1hNTYxLWQ0OTJhZTNkZWYxZS5qcGc=',
  id: 6,
  category: categories.want_to_watch,
},
{
  title: 'Inside out 2',
  description: 'The little voices inside Riley`s head know her inside and out--but next summer, everything changes when Disney and Pixar`s Inside Out 2 introduces a new Emotion: Anxiety.',
  image: 'https://resizing.flixster.com/sQx-6PcrJYvOS4-8TwVEo7KujfY=/300x300/v2/https://resizing.flixster.com/0CacCLzJvd0RtQAema4PMhwZh1k=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzE2N2YzNzFlLWMwNDQtNDZhOS1iY2U3LWRjMzRjOTYxNTVjZi5qcGc=',
  id: 7,
  category: categories.want_to_watch,
}];
const [filteredMovies, filterMovies] = useState(movies);
const searchBook = (e: any)=> {
  const moviesObj = movies.filter((currentMovie: movie)=> currentMovie.title.includes(e.target.value));
  filterMovies(moviesObj);
}
  return (
    <Fragment>
        <h2>search Movie Center</h2>
        <DebounceInput debounceTimeout={1100} className={styles.search__searchBar} onChange={searchBook} type="text" placeholder='enter movie name'></DebounceInput>
        <div className={styles.search__body}>
        {
        filteredMovies.map((currMovie: movie) => ((
          
          <MovieItem movie={currMovie} key={currMovie.id}/>
          )))
      }
        </div>
    </Fragment>
  );

}

export default Search;