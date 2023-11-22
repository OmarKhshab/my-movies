import React, { Fragment } from 'react';
import './App.css';
import MovieContainer from './components/movies-container/MovieContianer';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import Search from './components/search/Search';

function App() {
  return (
    <Fragment>
    <Navigation />
    <Routes>
        <Route path="/" element={<MovieContainer/>} />
        <Route path="/search" element={<Search/>} />
      </Routes>
    </Fragment>
  );
}

export default App;
