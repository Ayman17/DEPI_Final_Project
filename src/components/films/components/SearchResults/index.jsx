import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "./style.css"
import { Link, useParams } from 'react-router-dom'
import axios from "axios";
import Loading from '../../../../components/Loading';

export default function SearchResults() {
    const filterType = useParams();
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [totalResults, setTotalResults] = useState(0);

    function getNowPlayingMovies() {
        axios.get(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}&api_key=8d2351369fe29e287b6bcf66f8bfef7e`)
            .then((res) => {
                setMovies(res.data.results);

                if (totalResults != res.data.total_results)
                    setTotalResults(res.data.total_results);

                if (totalPages != res.data.totalPages)
                    setTotalPages(res.data.total_pages);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    function getUpcomingMovies() {
        axios.get(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${page}&api_key=8d2351369fe29e287b6bcf66f8bfef7e`)
            .then((res) => {
                setMovies(res.data.results);

                if (totalResults != res.data.total_results)
                    setTotalResults(res.data.total_results);

                if (totalPages != res.data.totalPages)
                    setTotalPages(res.data.total_pages);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    function getTopRatedMovies() {
        axios.get(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}&api_key=8d2351369fe29e287b6bcf66f8bfef7e`)
            .then((res) => {
                setMovies(res.data.results);

                if (totalResults != res.data.total_results)
                    setTotalResults(res.data.total_results);

                if (totalPages != res.data.totalPages)
                    setTotalPages(res.data.total_pages);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    function getPopularMovies() {
        axios.get(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}&api_key=8d2351369fe29e287b6bcf66f8bfef7e`)
            .then((res) => {
                setMovies(res.data.results);

                if (totalResults != res.data.total_results)
                    setTotalResults(res.data.total_results);

                if (totalPages != res.data.totalPages)
                    setTotalPages(res.data.total_pages);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    function getTrendingMovies() {
        axios.get(`https://api.themoviedb.org/3/trending/movie/${filterType.time}?language=en-US&page=${page}&api_key=8d2351369fe29e287b6bcf66f8bfef7e`)
            .then((res) => {
                setMovies(res.data.results);

                if (totalResults != res.data.total_results)
                    setTotalResults(res.data.total_results);

                if (totalPages != res.data.totalPages)
                    setTotalPages(res.data.total_pages);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        return (() => {
            setMovies([]);
            setPage(1);
        })
    }, [])

    useEffect(() => {
        setMovies([]);

        if (filterType.type == "now-playing")
            getNowPlayingMovies();
        else if (filterType.type == "upcoming")
            getUpcomingMovies();
        else if (filterType.type == "top-rated")
            getTopRatedMovies();
        else if (filterType.type == "popular")
            getPopularMovies();
        else
            getTrendingMovies();
    }, [page])

    return (
        (movies.length ?
            <div className="d-flex justify-content-center">
                <div className='w-60'>
                    <div className="section-header mt-5 mb-3">
                        <div className="f-11p">FILMS</div>
                    </div>

                    <div className="films-no mb-2"> {`There are ${totalResults} films`}</div>

                    <div className="row g-2">
                        {movies.map((item, i) => {
                            return (
                                <div key={i} className="col-6 col-md-3">
                                    <div className='d-flex justify-content-center'>
                                        <Link to={`/film/${item.id}`}>
                                            <div className="image">
                                                <img className="w-100 h-100" src={(item.poster_path ? "https://image.tmdb.org/t/p/w500/" + item.poster_path : require("../../../../assets/images/movie-image-placeholder.png"))} />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <hr className='mt-1' />
                    <div className={`mb-3 d-flex ${(page == 1 ? "justify-content-end" : (page == totalPages ? "justify-content-start" : "justify-content-between"))}`}>
                        {page > 1 ? <button className='page-buttons btn btn-secondary d-flex justify-content-center align-items-center' onClick={() => { setPage(page - 1) }}>Previous</button> : <></>}
                        {page != totalPages ? <button className='page-buttons btn btn-secondary d-flex justify-content-center align-items-center' onClick={() => { setPage(page + 1) }}>Next</button> : <></>}
                    </div>

                </div>
            </div>
            :
            <Loading />
        )
    )
}
