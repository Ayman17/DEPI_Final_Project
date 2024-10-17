import React from "react";
import "./style.css";

const Profile = () => {
  const following = [
    {
      id: 1,
      imgSrc:
        "https://a.ltrbxd.com/resized/avatar/twitter/6/5/7/3/6/3/shard/https___pbs.twimg.com_profile_images_1490497118670245889_l6D704ru-0-1000-0-1000-crop.jpg?v=d689dc595d",
      alt: "Person 1",
    },
    {
      id: 2,
      imgSrc:
        "https://a.ltrbxd.com/resized/avatar/twitter/4/5/8/6/9/4/shard/http___pbs.twimg.com_profile_images_1247063849116852225_RziISM8M-0-1000-0-1000-crop.jpg?v=3b80c1d003",
      alt: "Person 2",
    },
    {
      id: 3,
      imgSrc:
        "https://a.ltrbxd.com/resized/avatar/twitter/5/9/8/2/1/shard/http___a0.twimg.com_profile_images_1513460760_Grandpa-0-1000-0-1000-crop.jpg?v=be40662128",
      alt: "Person 3",
    },
    {
      id: 4,
      imgSrc:
        "https://a.ltrbxd.com/resized/avatar/twitter/4/5/8/6/9/4/shard/http___pbs.twimg.com_profile_images_1247063849116852225_RziISM8M-0-1000-0-1000-crop.jpg?v=3b80c1d003",
      alt: "Person 4",
    },
    {
      id: 5,
      imgSrc:
        "https://a.ltrbxd.com/resized/avatar/twitter/4/5/8/6/9/4/shard/http___pbs.twimg.com_profile_images_1247063849116852225_RziISM8M-0-1000-0-1000-crop.jpg?v=3b80c1d003",
      alt: "Person 5",
    },
    {
      id: 6,
      imgSrc:
        "https://a.ltrbxd.com/resized/avatar/twitter/4/5/8/6/9/4/shard/http___pbs.twimg.com_profile_images_1247063849116852225_RziISM8M-0-1000-0-1000-crop.jpg?v=3b80c1d003",
      alt: "Person 6",
    },
    {
      id: 7,
      imgSrc:
        "https://a.ltrbxd.com/resized/avatar/twitter/6/5/7/3/6/3/shard/https___pbs.twimg.com_profile_images_1490497118670245889_l6D704ru-0-1000-0-1000-crop.jpg?v=d689dc595d",
      alt: "Person 7",
    },
    {
      id: 8,
      imgSrc:
        "https://a.ltrbxd.com/resized/avatar/twitter/5/9/8/2/1/shard/http___a0.twimg.com_profile_images_1513460760_Grandpa-0-1000-0-1000-crop.jpg?v=be40662128",
      alt: "Person 8",
    },
    {
      id: 9,
      imgSrc:
        "https://a.ltrbxd.com/resized/avatar/twitter/6/5/7/3/6/3/shard/https___pbs.twimg.com_profile_images_1490497118670245889_l6D704ru-0-1000-0-1000-crop.jpg?v=d689dc595d",
      alt: "Person 9",
    },
    {
      id: 10,
      imgSrc:
        "https://a.ltrbxd.com/resized/avatar/twitter/6/5/7/3/6/3/shard/https___pbs.twimg.com_profile_images_1490497118670245889_l6D704ru-0-1000-0-1000-crop.jpg?v=d689dc595d",
      alt: "Person 10",
    },
    {
      id: 11,
      imgSrc:
        "https://a.ltrbxd.com/resized/avatar/twitter/5/9/8/2/1/shard/http___a0.twimg.com_profile_images_1513460760_Grandpa-0-1000-0-1000-crop.jpg?v=be40662128",
      alt: "Person 11",
    },
    {
      id: 12,
      imgSrc:
        "https://a.ltrbxd.com/resized/avatar/twitter/4/5/8/6/9/4/shard/http___pbs.twimg.com_profile_images_1247063849116852225_RziISM8M-0-1000-0-1000-crop.jpg?v=3b80c1d003",
      alt: "Person 12",
    },
  ];
  return (
    <div className="bg-dark  text-light">
      <div className="container pt-5 ">
        {/* Profile Header */}
        <div className="profile-header d-flex align-items-center">
          <img
            src="https://a.ltrbxd.com/resized/avatar/upload/4/4/3/4/2/2/shard/avtr-0-1000-0-1000-crop.jpg?v=0cc194b2ba"
            className="rounded-circle me-3"
            alt="Profile Avatar"
            style={{ width: "100px", height: "100px" }}
          />
          <div>
            <h3 className="d-flex align-items-center mb-0">
              Melissa Tamminga{" "}
              <span className="badge bg-warning text-dark ms-2">PRO</span>
            </h3>
            <p className="mb-0">
              <a
                href="http://ajournaloffilm.blogspot.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                ajournaloffilm.blogspot.com
              </a>
              &nbsp;|&nbsp;
              <a href="#">@oneapriladay</a>
            </p>
          </div>
          <div className="ms-auto text-end">
            <div className="d-flex justify-content-end">
              <div className="me-3">
                <strong>3,461</strong> <span>FILMS</span>
              </div>
              <div className="me-3">
                <strong>246</strong> <span>THIS YEAR</span>
              </div>
              <div className="me-3">
                <strong>23</strong> <span>LISTS</span>
              </div>
              <div className="me-3">
                <strong>345</strong> <span>FOLLOWING</span>
              </div>
              <div>
                <strong>4,513</strong> <span>FOLLOWERS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Navigation Tabs */}
        <ul className="nav nav-tabs mt-4">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Profile
            </a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="#">
              Activity
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Films
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Diary
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Reviews
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Watchlist
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Lists
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Likes
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Network
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Stats
            </a>
          </li> */}
        </ul>

        {/* Favorite Films Section */}
        <div className="mt-5">
          <h5 className="mb-3">Favorite Films</h5>
          <div className="row">
            <div className="col-md-3">
              <img
                src="https://a.ltrbxd.com/resized/film-poster/5/0/9/5/4/50954-rope-0-1000-0-1500-crop.jpg?v=bd8d1695a5"
                className="img-fluid"
                alt="Favorite Film 1"
              />
            </div>
            <div className="col-md-3">
              <img
                src="https://a.ltrbxd.com/resized/film-poster/8/5/0/4/5/9/850459-alien-romulus-0-1000-0-1500-crop.jpg?v=acabb7fd83"
                className="img-fluid"
                alt="Favorite Film 2"
              />
            </div>
            <div className="col-md-3">
              <img
                src="https://a.ltrbxd.com/resized/film-poster/5/1/5/4/2/51542-jaws-0-1000-0-1500-crop.jpg?v=03299455f6"
                className="img-fluid"
                alt="Favorite Film 3"
              />
            </div>
            <div className="col-md-3">
              <img
                src="https://a.ltrbxd.com/resized/film-poster/5/0/5/8/0/50580-training-day-0-1000-0-1500-crop.jpg?v=5ce5342625"
                className="img-fluid"
                alt="Favorite Film 4"
              />
            </div>
          </div>
        </div>

        {/* Recent Activity Section */}
        <div className="mt-5 ">
          <h5 className="mb-3">Recent Activity</h5>
          <div className="row">
            <div className="col-md-3">
              <img
                src="https://a.ltrbxd.com/resized/film-poster/5/0/9/5/4/50954-rope-0-1000-0-1500-crop.jpg?v=bd8d1695a5"
                className="img-fluid"
                alt="Favorite Film 1"
              />
            </div>
            <div className="col-md-3">
              <img
                src="https://a.ltrbxd.com/resized/film-poster/8/5/0/4/5/9/850459-alien-romulus-0-1000-0-1500-crop.jpg?v=acabb7fd83"
                className="img-fluid"
                alt="Favorite Film 2"
              />
            </div>
            <div className="col-md-3">
              <img
                src="https://a.ltrbxd.com/resized/film-poster/5/1/5/4/2/51542-jaws-0-1000-0-1500-crop.jpg?v=03299455f6"
                className="img-fluid"
                alt="Favorite Film 3"
              />
            </div>
            <div className="col-md-3">
              <img
                src="https://a.ltrbxd.com/resized/film-poster/5/0/5/8/0/50580-training-day-0-1000-0-1500-crop.jpg?v=5ce5342625"
                className="img-fluid"
                alt="Favorite Film 4"
              />
            </div>
          </div>
        </div>

        <div className="mt-5 ">
          <h5 className="mb-3">Recent Reviews</h5>
          <div className="list-group ">
            <div className="list-group-item d-flex bg-dark ">
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

            <div className="list-group-item d-flex bg-dark">
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
                  Pickford Film Center, night #2 of our trilogy weekend. Another
                  full house...
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
        <div className="mt-5 ">
          <h5 className="mb-3">Popular reviews</h5>
          <div className="list-group ">
            <div className="list-group-item d-flex bg-dark ">
              <img
                src="https://a.ltrbxd.com/resized/sm/upload/88/lu/ak/8v/5wDrNqePjb5SOucrWQwiFu340vv-0-1000-0-1500-crop.jpg?v=acc9d9c27b"
                className="me-3"
                alt="Return of the Jedi"
                height={"112px"}
                width={"75px"}
              />
              <div className="text-light">
                <h4>
                  Three Billboards Outside Ebbing, Missouri <small>2017</small>
                </h4>
                <p className="mb-1">
                  <strong>Rewatched 22 Sep 2024</strong>
                </p>
                <p>
                  Rather nervously sat down to watch this with our two teen
                  daughters. I thought it might be traumatizing, too close to
                  home, especially for our oldest, who has severe social anxiety
                  and depression. But we stayed up til 2 AM afterwards talking.
                  There were tears and hugs. They told us stuff they feel now
                  and stuff they’d felt in middle school that they couldn’t say
                  before. They saw themselves onscreen and saw someone knew and
                  someone cared. So grateful to Bo Burnham and the medium of
                  film — my girls felt seen.
                </p>
                <div className="d-flex align-items-center">
                  <span className="me-2">
                    <i className="fas fa-heart"></i> 7 likes
                  </span>
                </div>
              </div>
            </div>

            <div className="list-group-item d-flex bg-dark">
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
                  Pickford Film Center, night #2 of our trilogy weekend. Another
                  full house...
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
        <div className="container mt-5">
          <h5 className="text-center mb-4">Following</h5>
          <div className="row justify-content-center">
            {following.map((person, index) => (
              <div
                key={person.id}
                className="col-3 col-md-2 mb-3 d-flex justify-content-center "
              >
                <img
                  src={person.imgSrc}
                  alt={person.alt}
                  className="rounded-circle"
                  style={{ width: "50px", height: "50px" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
