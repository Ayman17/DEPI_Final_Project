import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './HomePage/Home';
import NotFound from './NotFound';
import Films from '../components/films/index';
import MovieDetails from '../components/films/components/MovieDetails';
import SearchResults from '../components/films/components/SearchResults';
import Results from './results_page_folder/Results';
import Members from '../pages/membersPages/Members';
import Settings from './user-settings/Settings';;
import ProfileWatched from './profile/ProfileWatched';
import ProfileFavourites from './profile/ProfileFavourites';
import Profile from './profile/Profile';
import HqMembers from '../pages/membersPages/HqMembers';
import MovieDetail from '../pages/membersPages/MovieDetail';
import PopularList from '../pages/membersPages/ViewMoreLists';
import PopularList2 from '../pages/membersPages/ViewMoreLists2';
import MovieCard from '../pages/membersPages/MembersFilms';
import MembersProfile from '../pages/membersPages/MembersProfile';
import Journal from '../pages/membersPages/Journal';

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
        path="/results/:query"
        element={
          <Results
            fetchResults={fetchResults}
            fetchRequest={fetchRequest}
            setNewDataGained={setNewDataGained}
            newDataGained={newDataGained}
          />
        }
      />
      <Route
        path="/settings"
        element={<Settings setProfileUpdated={setProfileUpdated} />}
      />
      
      <Route
        path="*"
        element={
          <NotFound
            setNavTransparent={setNavTransparent}
            isNavTransparent={isNavTransparent}
          />
        }
      />
      <Route
        path="/profile/:uid"
        element={
          <Profile
            fetchResults={fetchResults}
            fetchRequest={fetchRequest}
            authStatus={authStatus}
            isProfileUpdated={isProfileUpdated}
            setProfileUpdated={setProfileUpdated}
            setNewDataGained={setNewDataGained}
            newDataGained={newDataGained}
          />
        }
      />
       <Route
        path="/profile/favourites/:uid"
        element={
          <ProfileFavourites
            fetchResults={fetchResults}
            fetchRequest={fetchRequest}
            setNewDataGained={setNewDataGained}
            newDataGained={newDataGained}
          />
        }
      />
      <Route
        path="/profile/watched/:uid"
        element={
          <ProfileWatched
            fetchResults={fetchResults}
            fetchRequest={fetchRequest}
            setNewDataGained={setNewDataGained}
            newDataGained={newDataGained}
          />
        }
      />
    </Routes>
  );
};

export default MyRoutes;
