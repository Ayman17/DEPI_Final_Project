import React from "react";
import Members from "./pages/Members/index";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Journal from "./pages/Journal/index";
import MembersProfile from "./pages/MembersProfile/index";
import MovieCard from "./pages/MembersFilms/index";
import PopularList from "./pages/ViewMoreLists/index";
import PopularList2 from "./pages/ViewMoreLists2/index";
import MovieDetail from "./pages/MovieDetail/index";
import HqMembers from "./pages/HqMembers/index";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="members" element={<Members />} />

        <Route path="journal" element={<Journal />} />
        <Route path="membersProfile" element={<MembersProfile />} />
        <Route path="movieCard" element={<MovieCard />} />
        <Route path="PopularList2" element={<PopularList2 />} />
        <Route path="PopularList" element={<PopularList />} />
        <Route path="MovieDetail" element={<MovieDetail />} />
        <Route path="HqMembers" element={<HqMembers />} />
      </Routes>
    </>
  );
}
