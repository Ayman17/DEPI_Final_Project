import React, { useState } from 'react';
import '../../styles/started.css';

const GetStarted = () => {
  const [posterUrl, setPosterUrl] = useState('');
  const fetchRandomPoster = async () => {
    const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
    console.log(API_KEY);
    const randomNum = Math.floor(Math.random() * 10);
    const TMDB_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=fr-FR&include_adult=false&with_genres=28&page=1`;
    try {
      const response = await fetch(TMDB_URL);
      const data = await response.json();
      const movies = data.results;

      if (movies.length > 0) {
        const randomMovie = movies[Math.floor(Math.random() * movies.length)];
        console.log(randomMovie);
        const randomPosterUrl = `https://image.tmdb.org/t/p/original${randomMovie.poster_path}`;
        setPosterUrl(randomPosterUrl);
      } else {
        console.error('No movies found');
      }
    } catch (error) {
      console.error('Error fetching movie posters:', error);
    }
  }
  return (
    <>
      <div
        className="started-backdroped block h-[250px] max-h-[250px] md:m-auto md:mt-[-5%] md:h-[650px] md:max-h-[650px] md:w-[950px]"
        style={{
          backgroundImage: `url(https://a.ltrbxd.com/resized/sm/upload/o8/dp/yo/aa/john-wick-chapter-4-1200-1200-675-675-crop-000000.jpg?v=2e60eff48c)`,
        }}
      ></div>

      <div
        className="relative 
      z-50 
      mt-[5%] 
      flex 
      flex-col
      items-center 
      gap-2 
      md:mt-[-15%]"
      >
        <div className="gradient-helper-mobile text-center text-2xl font-bold text-[#fff] md:text-5xl">
          <p>Track films you’ve watched.</p>
          <p>Save those you want to see.</p>
          <p>Tell your friends what’s good.</p>
        </div>
        <button
          className="md:text-l
        sans-serif
        mt-1
        h-10
        rounded 
        bg-b-green
        px-5
        text-sm
        text-[#fff]
        hover:bg-b-h-green
        md:px-8
        "
        >
          GET STARTED - IT'S FREE!
        </button>

        <div
          className="sans-serif 
          my-2
        flex
        flex-col
        items-center 
        gap-2
        text-xs
        text-sh-grey
        md:flex-row 
        md:text-base  
        md:text-xl"
        >
          <p>The social network for film lovers.</p>
          <p>Also available on iOS, Apple TV and Android</p>
        </div>
      </div>
    </>
  );
};

export default GetStarted;
