import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './HomePage/Home';
import NotFound from './NotFound';
import Films from '../components/films/index'
import MovieDetails from '../components/films/components/MovieDetails'
import SearchResults from '../components/films/components/SearchResults'

const MyRoutes = ({
  authStatus,
  fetchRequest,
  fetchResults,
  setFetchResults,
  setProfileUpdated,
  isProfileUpdated,
  setNewDataGained,
  newDataGained,
  setNavTransparent,
  isNavTransparent,
}) => {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <Home
            authStatus={authStatus}
            fetchRequest={fetchRequest}
            fetchResults={fetchResults}
            setNewDataGained={setNewDataGained}
          />
        }
      />
      <Route 
        path='/films'
        element={<Films/>}
      />
      <Route path = "film/:id" element = {<MovieDetails/>}/>
      <Route path = "films/filter/:type/:time?" element = {<SearchResults/>}/>
      <Route
        path="*"
        element={
          <NotFound
            setNavTransparent={setNavTransparent}
            isNavTransparent={isNavTransparent}
          />
        }
      />
    </Routes>
  );
};

export default MyRoutes;
