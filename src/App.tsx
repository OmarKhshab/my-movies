import React, { Fragment } from 'react';
import './App.css';
import MovieContainer from './components/movies-container/MovieContianer';
import Navigation from './components/navigation/Navigation';

function App() {
  return (
    <Fragment>
    <Navigation />
    <MovieContainer />
    </Fragment>
  );
}

export default App;
