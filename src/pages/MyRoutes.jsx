import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './HomePage/Home';
import NotFound from './NotFound';
import Films from '../components/films/index'
import MovieDetails from '../components/films/components/MovieDetails'
import SearchResults from '../components/films/components/SearchResults'
import Members from '../pages/membersPages/Members'
import Journal from '../pages/membersPages/Journal'
import MembersProfile from '../pages/membersPages/MembersProfile'
import MovieCard from '../pages/membersPages/MembersFilms'
import PopularList2 from '../pages/membersPages/ViewMoreLists2'
import PopularList from '../pages/membersPages/ViewMoreLists'
import MovieDetail from '../pages/membersPages/MovieDetail'
import HqMembers from '../pages/membersPages/HqMembers'

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
      
      <Route path="members" element={<Members />} />
      <Route path="journal" element={<Journal />} />
      <Route path="membersProfile" element={<MembersProfile />} />
      <Route path="movieCard" element={<MovieCard />} />
      <Route path="PopularList2" element={<PopularList2 />} />
      <Route path="PopularList" element={<PopularList />} />
      <Route path="MovieDetail" element={<MovieDetail />} />
      <Route path="HqMembers" element={<HqMembers />} />
      
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
