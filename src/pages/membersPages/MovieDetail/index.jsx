import React from "react";
import { Button, Row, Col, ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const MovieDetail = () => {
  const movie = {
    title: "It's a Wonderful Life",
    year: 1946,
    director: "Frank Capra",
    description: `A holiday favourite for generations... George Bailey has spent his entire life giving to the people of Bedford Falls. All that prevents rich skinflint Mr. Potter from taking over the entire town is George’s modest building and loan company. But on Christmas Eve the business's $8,000 is lost and George's troubles begin.`,
    ratings: 4.4,
    fanCount: 15000,
  };
  const reviews = [
    {
      reviewer: "Karsten",
      rating: 4.5,
      review:
        "nobody likes getting the most out of a vowel quite like james stewart",
      likes: 6045,
      comments: 13,
    },
    {
      reviewer: "Patrick Willems",
      rating: 5,
      review:
        "Oh right this is the most iconic Christmas movie because it actually IS the best Christmas movie",
      likes: 4265,
      comments: 22,
    },
    {
      reviewer: "DirkH",
      rating: 4,
      review: `This film is a testament to the hypnotic powers all great classics possess. Every time I watch this I want to call my mum to tell her I love her, call my mate I haven't seen for far too long to grab a beer, and it makes me want to go outside to hand out smiles to everyone I meet. It turns me into the biggest optimistic sap you'll ever see and I love it for that!`,
      likes: 3974,
      comments: 8,
    },
  ];

  return (
    <div className="bg-black d-flex vh-100">
      <div className="container  text-light w-75 ">
        <div className="row">
          <div className="banner-container col-lg-12">
            <img
              src="https://a.ltrbxd.com/resized/sm/upload/dr/yl/7v/w5/its-a-wonderful-life-1200-1200-675-675-crop-000000.jpg?v=72eb81c504&quot"
              alt="Top Banner"
              className="img-fluid top-banner"
            />
          </div>
          <div className="col-lg-4">
            <img
              src="https://a.ltrbxd.com/resized/film-poster/5/0/9/4/9/50949-it-s-a-wonderful-life-0-1000-0-1500-crop.jpg?v=64b72dd083"
              alt="movie poster"
              className="img-fluid movie-poster"
              height="300px"
              width="200px"
            />
          </div>
          <div className="col-lg-8">
            <h2>{movie.title}</h2>
            <p className="">
              {movie.year} Directed by{" "}
              <a href="#" className="director-link">
                {movie.director}
              </a>
            </p>

            <p>{movie.description}</p>

            {/* Sign in / Share buttons */}
            <Button variant="secondary" className="me-2">
              Sign in to log, rate or review
            </Button>
            <Button variant="primary">Share</Button>

            {/* Ratings Section */}
            <div className="ratings-section mt-4">
              <h5 className="">Ratings</h5>
              <ProgressBar
                variant="success"
                now={movie.ratings * 20}
                label={`${movie.ratings}`}
              />
              <p className="mt-2">{movie.fanCount.toLocaleString()} FANS</p>
            </div>
          </div>
          <h5 className="mb-3 mt-5">Recent Reviews</h5>
          <hr className="border-light" />
          <div className="col-lg-8 mx-auto ">
            <div className="mt-5 mx-auto ">
              <div className=" ">
                <div className="list-group-item d-flex bg-black ">
                  <img
                    src="https://a.ltrbxd.com/resized/sm/upload/88/lu/ak/8v/5wDrNqePjb5SOucrWQwiFu340vv-0-1000-0-1500-crop.jpg?v=acc9d9c27b"
                    className="me-3"
                    alt="Return of the Jedi"
                    height={"112px"}
                    width={"75px"}
                  />
                  <div className="text-light">
                    <h6>
                      Return of the Jedi <small>1983</small>
                    </h6>
                    <p className="mb-1">
                      <strong>Rewatched 22 Sep 2024</strong>
                    </p>
                    <p>
                      Pickford Film Center. Perfect ending to a perfect movie
                      weekend.
                    </p>
                    <div className="d-flex align-items-center">
                      <span className="me-2">
                        <i className="fas fa-heart"></i> 7 likes
                      </span>
                    </div>
                  </div>
                </div>

                <div className="list-group-item d-flex bg-black">
                  <img
                    src="https://a.ltrbxd.com/resized/sm/upload/mp/pz/lf/2i/7BuH8itoSrLExs2YZSsM01Qk2no-0-1000-0-1500-crop.jpg?v=27c6c6fba7"
                    className="me-3"
                    alt="The Empire Strikes Back"
                    height={"112px"}
                    width={"75px"}
                  />
                  <div className="text-light">
                    <h6>
                      The Empire Strikes Back <small>1980</small>
                    </h6>
                    <p className="mb-1">
                      <strong>Rewatched 21 Sep 2024</strong>
                    </p>
                    <p>
                      Pickford Film Center, night #2 of our trilogy weekend.
                      Another full house...
                    </p>
                    <div className="d-flex align-items-center">
                      <span className="me-2">
                        <i className="fas fa-heart"></i> 29 likes
                      </span>
                      <span className="ms-3">
                        <i className="fas fa-comment"></i> 4 comments
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h5 className="mb-3">Popular reviews</h5>
          <hr className="border-light" />
          <div className="col-lg-8 mx-auto">
            <div className="mt-5 mx-auto ">
              <div className=" ">
                <div className="list-group-item d-flex bg-black ">
                  <img
                    src="https://a.ltrbxd.com/resized/sm/upload/88/lu/ak/8v/5wDrNqePjb5SOucrWQwiFu340vv-0-1000-0-1500-crop.jpg?v=acc9d9c27b"
                    className="me-3"
                    alt="Return of the Jedi"
                    height={"112px"}
                    width={"75px"}
                  />
                  <div className="text-light">
                    <h6>
                      Return of the Jedi <small>1983</small>
                    </h6>
                    <p className="mb-1">
                      <strong>Rewatched 22 Sep 2024</strong>
                    </p>
                    <p>
                      Pickford Film Center. Perfect ending to a perfect movie
                      weekend.
                    </p>
                    <div className="d-flex align-items-center">
                      <span className="me-2">
                        <i className="fas fa-heart"></i> 7 likes
                      </span>
                    </div>
                  </div>
                </div>

                <div className="list-group-item d-flex bg-black">
                  <img
                    src="https://a.ltrbxd.com/resized/sm/upload/mp/pz/lf/2i/7BuH8itoSrLExs2YZSsM01Qk2no-0-1000-0-1500-crop.jpg?v=27c6c6fba7"
                    className="me-3"
                    alt="The Empire Strikes Back"
                    height={"112px"}
                    width={"75px"}
                  />
                  <div className="text-light">
                    <h6>
                      The Empire Strikes Back <small>1980</small>
                    </h6>
                    <p className="mb-1">
                      <strong>Rewatched 21 Sep 2024</strong>
                    </p>
                    <p>
                      Pickford Film Center, night #2 of our trilogy weekend.
                      Another full house...
                    </p>
                    <div className="d-flex align-items-center">
                      <span className="me-2">
                        <i className="fas fa-heart"></i> 29 likes
                      </span>
                      <span className="ms-3">
                        <i className="fas fa-comment"></i> 4 comments
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
