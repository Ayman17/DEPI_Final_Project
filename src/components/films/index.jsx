import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import axios from "axios"
import "bootstrap/dist/css/bootstrap.min.css"
import "./style.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
import Loading from "../../components/Loading"

export default function Films() {
  const [movies, setMovies] = useState([]);
  const [people, setPeople] = useState([]);
  const [movieSliderPosition, setMovieSliderPosition] = useState(0);
  const [movieSearchResults, setMovieSearchResults] = useState([]);

  function getMovies(){
    if (!movies.length){
      axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=8d2351369fe29e287b6bcf66f8bfef7e`)
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }

  function getPeople(){
    if (!people.length){
      axios.get(`https://api.themoviedb.org/3/trending/person/week?api_key=8d2351369fe29e287b6bcf66f8bfef7e`)
      .then((res) => {
        setPeople(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }

  function searchMovies(e){
    axios.get(`https://api.themoviedb.org/3/search/movie?query=${e.target.value}&include_adult=false&language=en-US&page=1&api_key=8d2351369fe29e287b6bcf66f8bfef7e`)
    .then((res) => {
      setMovieSearchResults(res.data.results);
    })
    .catch((err) => {
      console.log(err)
    })
  }

  function displaySearchResults(){
    let searchResults = document.querySelector(".search-results");
    searchResults.style.display = "block";
  }

  function hideSearchResults(){
    let searchResults = document.querySelector(".search-results");
    searchResults.style.display = "none";
  }

  function sliderNext(){
    let incrementValue = (window.innerWidth < 992 ? 2 : 4);
    setMovieSliderPosition((movieSliderPosition + incrementValue) % 20);
  }

  function sliderPrev(){
    let decrementValue = (window.innerWidth < 992 ? 2 : 4);
    setMovieSliderPosition(((movieSliderPosition - decrementValue) + 20) % 20);
  }

  useEffect(() => {
    getMovies();
    getPeople();
  }, [])

  useEffect(() => {
    if (movieSearchResults.length)
      displaySearchResults();
  }, [movieSearchResults])

  return (
    (people.length && movies.length ? 
      <div className="w-60 mx-auto" onClick={() => {
        let searchResults = document.querySelector(".search-results");

        if (searchResults.style.display === "block")
          hideSearchResults();
      }}>
        <section className="search-section">
          <div className="row mt-5 mb-5 justify-content-lg-between align-items-center">
            <div className="col-lg-7">
              <div className="d-flex justify-content-lg-start justify-content-center align-items-center">
                <p className="f-11p">BROWSE</p>
                <div className="d-flex justify-content-center ms-2">
                  <ul className="select-filter year">
                    <div className='me-1'>RELEASE</div>
                    <i className="fa-solid fa-angle-down"></i>
                    <ul className="w-100 position-absolute d-none top-100 p-0 rounded-1">
                      <Link to = "/films/filter/now-playing"><li><p className='m-1'>Now Playing</p></li></Link>
                      <Link to = "/films/filter/upcoming"><li><p className='m-1'>Upcoming</p></li></Link>
                    </ul>
                  </ul>
                  <ul className="select-filter rating">
                    <div className='me-1'>RATING</div>
                    <i className="fa-solid fa-angle-down"></i>
                    <ul className="w-100 position-absolute d-none top-100 p-0 rounded-1">
                      <Link to = "/films/filter/top-rated"><li><p className='m-1'>Top Rated</p></li></Link>
                    </ul>
                  </ul>
                  <ul className="select-filter popular">
                    <div className='me-1'>POPULAR</div>
                    <i className="fa-solid fa-angle-down"></i>
                    <ul className="w-100 position-absolute d-none top-100 p-0 rounded-1">
                      <Link to = "/films/filter/popular"><li><p className='m-1'>All Time</p></li></Link>
                      <Link to = "/films/filter/trending/week"><li><p className='m-1'>This Week</p></li></Link>
                      <Link to = "/films/filter/trending/day"><li><p className='m-1'>Today</p></li></Link>
                    </ul>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className = "d-flex justify-content-lg-end justify-content-center align-items-center">
                <p className="f-11p">FIND A FILM</p>
                <div className='position-relative'>
                  <input className="form-control ms-0 ms-sm-2" type = "text" onChange={searchMovies}/>
                  <div className="search-results">
                    {movieSearchResults.map((item, i) => {
                      return (
                        <Link key = {i} to = {`/film/${item.id}`}>
                          <div className = "film-search d-flex mb-1 p-1">
                            <div className='me-1'>{item.title}</div>
                            <div>{"(" + item.release_date?.slice(0, 4) + ")"}</div>
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="section-header">
            <Link className="f-11p" to = "/films/filter/trending/week">POPULAR FILMS THIS WEEK</Link>
            <Link to = "/films/filter/popular" className="f-10p fw-light">MORE</Link>
        </div>

        <section className="popular-films-this-week-section">
          <div className = "position-relative mt-3 mb-5 d-flex justify-content-center">
            <div className="arrow-left" role='button' onClick={sliderPrev}>
              <i className="fa-solid fa-chevron-left"></i>
            </div>
            <div className="row">
              {movies.slice(movieSliderPosition, movieSliderPosition + 4).map((item, i) => {
                return(
                  <div key = {i} className={i <= 1 ? "col-6 col-lg-3" : "col-6 col-lg-3 d-none d-lg-block"}>
                    <Link to = {`/film/${item.id}`}>
                      <div className="films-image-container">
                        <img className = "w-100 h-100 rounded-2" src = {"https://image.tmdb.org/t/p/w500/" + item.poster_path}/>
                      </div>
                    </Link>
                    <div className="d-flex justify-content-center mt-1 mx-5 fw-light">
                      <div className="film-stats">
                        <i className="fa-solid fa-eye fa-2xs me-2"></i>
                        <div className="f-10p">{Math.floor(item.popularity) < 1000 ? Math.floor(item.popularity) : (Math.floor(item.popularity) / 1000).toFixed(1) + "K"}</div>
                      </div>
                      <div className="film-stats">
                        <i className="fa-solid fa-list fa-2xs me-2"></i>
                        <div className="f-10p">47K</div>
                      </div>
                      <div className="film-stats">
                        <i className="fa-solid fa-heart fa-2xs me-2"></i>
                        <div className="f-10p">53K</div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="arrow-right" role='button' onClick={sliderNext}>
              <i className="fa-solid fa-chevron-right"></i>
            </div>
          </div>
        </section>

        <div className="section-header">
            <Link className="f-11p">JUST REVIEWED...</Link>
            <div className="f-10p fw-light text-end">2,110,940,932 films watched</div>
        </div>

        <section className="just-reviewed-section">
          <div className="row gx-1">
            {movies.slice(0, 12).map((item, i) => {
              return(
                <div key = {i} className="col-3 col-lg-1 g-1">
                  <Link className="d-flex justify-content-center" to = {`/film/${item.id}`}>
                    <div className="just-reviewed-image-container">
                      <img className = "w-100 h-100" src = {"https://image.tmdb.org/t/p/w500/" + item.poster_path}/>
                    </div>
                  </Link>
                </div>
              )
            })}
          </div>
        </section>

        <div className="row mt-5">
          <div className="col-lg-8 col-md-6">
            <section className="popular-reviews-this-week">
              <div className="section-header mb-3">
                <Link className="f-11p">POPULAR REVIEWS THIS WEEK</Link>
                <Link className="f-10p fw-light">MORE</Link>
              </div>

              {movies.slice(0, 6).map((item, i) => {
                return (
                  <div key = {i} className='row'>
                    <div className="col-5 col-lg-2 col-md-5">
                      <Link to = {`/film/${item.id}`}>
                        <div className = "reviews-image-container">
                          <img className = "w-100 h-100" src = {"https://image.tmdb.org/t/p/w500/" + item.poster_path}/>
                        </div>
                      </Link>
                    </div>
                    <div className="col-7 col-lg-10 col-md-8">
                      <div>
                        <div className="d-flex align-items-center">
                          <p className="fw-bold me-2 text-white">{item.title}</p>
                          <p className="f-11p fw-light">{item.release_date.slice(0, 4)}</p>
                        </div>
                        <div className="row d-flex align-items-center mb-2">
                          <div className="col-lg-6 d-flex align-items-center">
                            <div>
                              <div className="member-image-container">
                                <img className = "w-100 h-100 rounded-circle" src = {people[i].profile_path ? "https://image.tmdb.org/t/p/w500/" + people[i].profile_path : require("../../assets/images/profile-placeholder.png")}/>
                              </div>
                            </div>
                            <div className="f-12p fw-bold me-2">{people[i].name}</div>
                          </div>
                          <div className="col-lg-6 d-flex align-items-center">
                            <div>
                              <div className="d-flex me-2">
                                <i className="fa-solid fa-star fa-2xs"></i>
                                <i className="fa-solid fa-star fa-2xs"></i>
                                <i className="fa-solid fa-star fa-2xs"></i>
                                <i className="fa-solid fa-star fa-2xs"></i>
                                <i className="fa-solid fa-star fa-2xs"></i>
                              </div>
                            </div>
                            <div className="d-flex align-items-center">
                              <i className="fa-solid fa-message fa-2xs me-2"></i>
                              <div className="f-10p fw-light">44</div>
                            </div>
                          </div>
                        </div>
                        <div className="f-11p mb-2"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quaerat illum similique amet obcaecati porro optio nulla molestiae odit delectus. </div>
                        <div className="review-likes">
                          <i className="fa-solid fa-heart fa-2xs me-2"></i>
                          <div className="f-11p">{Math.floor(item.popularity)} likes</div>
                        </div>
                      </div>
                    </div>
                    {(i != 5 ? <hr className="border-2"/> : <></>)}
                  </div>
                )
              })}

            </section>
          </div>
          <div className="offset-md-1 col-lg-3 col-md-5">
            <div className="section-header">
              <div className="f-11p">CREW PICKS</div>
            </div>
            <div className="row gx-2 mb-4">
              {movies.slice(0, 6).map((item, i) => {
                return(
                  <div key = {i} className="col-4 gy-1">
                    <Link className="d-flex justify-content-center" to = {`/film/${item.id}`}>
                      <div className="just-reviewed-image-container">
                        <img className = "w-100 h-100" src = {"https://image.tmdb.org/t/p/w500/" + item.poster_path}/>
                      </div>
                    </Link>
                  </div>
                )
              })}
            </div>
            <div className="section-header mb-3">
              <Link className="f-11p">POPULAR REVIEWERS</Link>
              <Link className="f-10p fw-light">MORE</Link>
            </div>

            {people.slice(0, 5).map((item, i) => {
                return(
                  <div key = {i}>
                    <div className="d-flex align-items-center">
                      <div className="reviewer-image-container">
                        <img className = "w-100 h-100 rounded-circle" src = {item.profile_path ? "https://image.tmdb.org/t/p/w500/" + item.profile_path : require("../../assets/images/profile-placeholder.png")}/>
                      </div>
                      <div>
                        <div className="text-white fw-bold f-12p">{item.name}</div>
                        <div className="d-flex justify-content-center fw-light">
                          <div className="f-10p">2,068 films</div>
                          <div className="f-10p me-1">,</div>
                          <div className="f-10p">1,486 reviews</div>
                        </div>
                      </div>
                    </div>
                    <hr/>
                  </div>
                )
              })}
          </div>
        </div>
      </div>
    :
      <Loading/>
    )
  )
}
