import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "./style.css"
import { Link, useParams } from 'react-router-dom'
import axios from "axios"

export default function MovieDetails() {
    const movieID = useParams();
    const [movieDetails, setMovieDetails] = useState({});
    const [movieReviews, setMovieReviews] = useState([]);
    const [movieCredits, setMovieCredits] = useState([]);
    let currentOpenTab = "cast";

    function getMovieDetails() {
        axios.get(`https://api.themoviedb.org/3/movie/${movieID.id}?api_key=8d2351369fe29e287b6bcf66f8bfef7e`)
            .then((res) => {
                setMovieDetails(res.data);
            })
            .catch((err) => {
                console.log(err)
            })
    }

    function getMovieReviews() {
        axios.get(`https://api.themoviedb.org/3/movie/${movieID.id}/reviews?language=en-US&page=1&api_key=8d2351369fe29e287b6bcf66f8bfef7e`)
            .then((res) => {
                setMovieReviews(res.data.results);
            })
            .catch((err) => {
                console.log(err)
            })
    }

    function getMovieCredits() {
        axios.get(`https://api.themoviedb.org/3/movie/${movieID.id}/credits?language=en-US&api_key=8d2351369fe29e287b6bcf66f8bfef7e`)
            .then((res) => {
                setMovieCredits(res.data.cast);
            })
            .catch((err) => {
                console.log(err)
            })
    }

    function showMovieDetails(e) {
        let clickedTab = (e.target.textContent).toLowerCase();
        let clickedTabStyle = document.querySelector(`.${clickedTab}`);
        let currentOpenTabStyle = document.querySelector(`.${currentOpenTab}`);

        currentOpenTabStyle.style.color = "limegreen";
        clickedTabStyle.style.color = "white";

        currentOpenTabStyle = document.querySelector(`.${currentOpenTab}-content`)
        clickedTabStyle = document.querySelector(`.${clickedTab}-content`)

        currentOpenTabStyle.style.display = "none";
        clickedTabStyle.style.display = "block";

        currentOpenTab = clickedTab;
    }

    function setBackground() {
        let filmBackground = document.querySelector(".film-background");
        filmBackground.style.backgroundImage = (movieDetails.backdrop_path ? `url(https://image.tmdb.org/t/p/w500/${movieDetails.backdrop_path})` : 'url("../../../../assets/images/movie-image-placeholder.png")');
    }

    useEffect(() => {
        getMovieDetails();
        getMovieReviews();
        getMovieCredits();
    }, [])

    useEffect(() => {
        setBackground();
    }, [movieDetails])

    return (
        <div className="vh-100 w-100 flex-grow">
            <div className="film-background h-75 w-100">
                <div className="layer"></div>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-60">
                    <div className="row mt-3">
                        <div className="col-lg-3 col-md-4 col-sm-5">
                            <div className="movie-image">
                                <img className="w-100 h-100 rounded-2" src={(movieDetails.poster_path ? "https://image.tmdb.org/t/p/w500/" + movieDetails.poster_path : require('../../../../assets/images/movie-image-placeholder.png'))} />
                            </div>
                            <div className="d-flex justify-content-center mt-1 fw-light">
                                <div className="film-stats">
                                    <i className="fa-solid fa-eye fa-2xs me-2"></i>
                                    <div className="f-10p">{Math.floor(movieDetails.popularity) < 1000 ? Math.floor(movieDetails.popularity) : (Math.floor(movieDetails.popularity) / 1000).toFixed(1) + "K"}</div>
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

                            <ul className='trailer-list'>
                                <li className='trailer-list-title'>
                                    <div className='ms-2 d-flex justify-content-center align-items-center'>
                                        <i className="fa-solid fa-play fa-sm me-1"></i>
                                        <div>Trailer</div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-9 col-md-8 col-sm-7">
                            <div className="d-flex align-items-center">
                                <p className="fw-bold fs-4 me-3 text-white">{movieDetails.title}</p>
                                <p className="f-11p me-2 fw-light">{movieDetails.release_date?.slice(0, 4)}</p>
                                <p className="f-13p fw-light">Directed by Coralie Fargeat</p>
                            </div>

                            <div className="row g-4">
                                <div className="col-lg-7 col-md-9">
                                    <div>
                                        <p className="f-11p fw-light">{movieDetails.tagline}</p>
                                        <p className="f-12p mb-5">{movieDetails.overview}</p>
                                        <ul className="tags-list">
                                            <li className = "cast" role="button" onClick={showMovieDetails}>CAST</li>
                                            <li className = "details" role="button" onClick={showMovieDetails}>DETAILS</li>
                                            <li className = "genres" role="button" onClick={showMovieDetails}>GENRES</li>
                                        </ul>
                                        <div className="cast-content">
                                            <div className="row g-1">
                                                {movieCredits.map((item, i) => {
                                                    return (
                                                        <div key={i} className='col-lg-4 col-md-6'>
                                                            <div className="tag">{item.name}</div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <div className="details-content">
                                            <div className='mb-2'>
                                                <div className='f-10p'>COUNTRY </div>
                                                <div className="row g-1">
                                                    {movieDetails.origin_country?.map((item, i) => {
                                                        return (
                                                            <div key={i} className='col-lg-4 col-md-6'>
                                                                <div className="tag">{item}</div>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                            <div className='mb-2'>
                                                <div className='f-10p'>LANGUAGES </div>
                                                <div className="row g-1">
                                                    {movieDetails.spoken_languages?.map((item, i) => {
                                                        return (
                                                            <div key={i} className='col-lg-4 col-md-6'>
                                                                <div className="tag">{item.english_name}</div>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                            <div className='mb-2'>
                                                <div className='f-10p'>PRODUCTION COMPANIES </div>
                                                <div className="row g-1">
                                                    {movieDetails.production_companies?.map((item, i) => {
                                                        return (
                                                            <div key={i} className='col-lg-4 col-md-6'>
                                                                <div className="tag">{item.name}</div>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                            <div>
                                                <div className='f-10p'>PRODUCTION COUNTRIES </div>
                                                <div className="row g-1">
                                                    {movieDetails.production_countries?.map((item, i) => {
                                                        return (
                                                            <div key={i} className='col-lg-4 col-md-6'>
                                                                <div className="tag">{item.name}</div>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="genres-content">
                                            <div className="row g-1">
                                                {movieDetails.genres?.map((item, i) => {
                                                    return (
                                                        <div key={i} className='col-lg-4 col-md-6'>
                                                            <div className="tag">{item.name}</div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center mt-3">
                                            <div className="f-10p me-2">{movieDetails.runtime} mins</div>
                                            <div className="f-10p me-1">More at</div>
                                            <a href={`https://www.themoviedb.org/movie/${movieID.id}/`} className='border p-1 rounded-0 text-white f-10p d-flex justify-content-center align-items-center mx-1' target='_blank'>TMDB</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="offset-1 col-lg-4 col-md-3">
                                    <div className='pref-list'>
                                        <div className='f-10p text-center pt-3'>Sign in to log, rate or review</div>
                                        <hr />
                                        <div className='f-10p text-center pb-3'>Share</div>
                                    </div>
                                </div>
                            </div>

                            <div className="section-header mt-5 mb-3">
                                <Link className="f-11p">REVIEWS</Link>
                                <Link className="f-10p fw-light">MORE</Link>
                            </div>

                            {(movieReviews.length ? movieReviews.map((item, i) => {
                                let rate = Math.floor(item.author_details.rating / 2);
                                return (
                                    <div key={i}>
                                        <div>
                                            <div className='row'>
                                                <div className="col-1">
                                                    <div className="member-image-container">
                                                        <img className="w-100 h-100 rounded-circle" src={item.author_details.avatar_path ? "https://image.tmdb.org/t/p/w500/" + item.author_details.avatar_path : require("../../../../assets/images/profile-placeholder.png")} />
                                                    </div>
                                                </div>
                                                <div className="col-11">
                                                    <div>
                                                        <div className="d-flex align-items-center mb-3">
                                                            <div className="d-flex align-items-center">
                                                                <div className="f-11p fw-light me-1">Review by</div>
                                                                <div className="f-12p fw-bold me-2">{item.author}</div>
                                                            </div>
                                                            <div className="d-flex align-items-center">
                                                                <div className="d-flex me-2">
                                                                    {Array(rate).fill().map((item, idx) => {
                                                                        return (<i key={idx} className="fa-solid fa-star fa-2xs"></i>)
                                                                    })}

                                                                    {(item.author_details.rating % 2 != 0 ? <i className="fa-regular fa-star-half-stroke fa-2xs"></i> : <></>)}
                                                                </div>
                                                                <div className="d-flex align-items-center">
                                                                    <i className="fa-solid fa-message fa-2xs me-2"></i>
                                                                    <div className="f-10p fw-light">44</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="f-11p mb-3"> {item.content} </div>
                                                        <div className="review-likes">
                                                            <i className="fa-solid fa-heart fa-2xs me-2"></i>
                                                            <div className="f-11p">7,620 likes</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {(i != movieReviews.length - 1 ? <hr className="border-2" /> : <></>)}
                                            </div>
                                        </div>
                                    </div>
                                )
                            }) : <div className='f-11p mb-4'> This movie doesn't have reviews. </div>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
