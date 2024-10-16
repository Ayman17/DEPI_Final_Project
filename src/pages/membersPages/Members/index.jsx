import React from "react";
import UserList from "./../Userlists/index";
import "./style.css";
import { Link } from "react-router-dom";
import MembersProfile from "./../MembersProfile/index";

export default function Members() {
  const members = [
    {
      id: 1,
      name: "filmo teca",
      logo: "https://a.ltrbxd.com/resized/avatar/upload/4/4/3/4/2/2/shard/avtr-0-1000-0-1000-crop.jpg?v=0cc194b2ba",
    },
    {
      id: 2,
      name: "Museum of the Moving Image",
      logo: "https://a.ltrbxd.com/resized/avatar/upload/4/4/3/4/2/2/shard/avtr-0-1000-0-1000-crop.jpg?v=0cc194b2ba",
    },
    {
      id: 3,
      name: "HighOn Films",
      logo: "https://a.ltrbxd.com/resized/avatar/upload/4/4/3/4/2/2/shard/avtr-0-1000-0-1000-crop.jpg?v=0cc194b2ba",
    },
    {
      id: 4,
      name: "Logo 4",
      logo: "https://a.ltrbxd.com/resized/avatar/upload/4/4/3/4/2/2/shard/avtr-0-1000-0-1000-crop.jpg?v=0cc194b2ba",
    },
    {
      id: 5,
      name: "Logo 5",
      logo: "https://a.ltrbxd.com/resized/avatar/upload/4/4/3/4/2/2/shard/avtr-0-1000-0-1000-crop.jpg?v=0cc194b2ba",
    },
    {
      id: 6,
      name: "Logo 6",
      logo: "https://a.ltrbxd.com/resized/avatar/upload/4/4/3/4/2/2/shard/avtr-0-1000-0-1000-crop.jpg?v=0cc194b2ba",
    },
    {
      id: 7,
      name: "Film Colossus",
      logo: "https://a.ltrbxd.com/resized/avatar/upload/4/4/3/4/2/2/shard/avtr-0-1000-0-1000-crop.jpg?v=0cc194b2ba",
    },
    {
      id: 8,
      name: "The Next Reel",
      logo: "https://a.ltrbxd.com/resized/avatar/upload/4/4/3/4/2/2/shard/avtr-0-1000-0-1000-crop.jpg?v=0cc194b2ba",
    },
  ];
  return (
    <div className="bg-black overflow-auto text-light">
      <div className="container w-75 ">
        <div className="my-5  ">
          <h3 className="text-center">
            Film lovers, critics and friends — find popular members.
          </h3>
          <h6>Featured Members</h6>
          <hr className="m-0" />
          <div className="row">
            <div className="col-md-4 col-lg-3 col-4">
              <div className="w-100 p-4 rounded-circle">
                <div>
                  <Link to="/MembersProfile">
                    <img
                      className="w-100 rounded-circle"
                      src="https://a.ltrbxd.com/resized/avatar/upload/4/4/3/4/2/2/shard/avtr-0-1000-0-1000-crop.jpg?v=0cc194b2ba"
                      alt=""
                    />
                  </Link>

                  <Link to="/MembersProfile">Melissa Tamminga</Link>
                  <div className="d-flex justify-content-between">
                    <Link to="/journal">2.3k films</Link>
                    <Link to="/journal">8.7 reviews</Link>
                  </div>
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-4 p-1">
                        <div className="w-100">
                          <Link to="/MovieDetail">
                            <img
                              className="w-100"
                              src="https://a.ltrbxd.com/resized/film-poster/5/0/9/5/4/50954-rope-0-1000-0-1500-crop.jpg?v=bd8d1695a5"
                              alt=""
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="col-4 p-1">
                        <div className="w-100">
                          <Link to="/MovieDetail">
                            <img
                              className="w-100"
                              src="https://a.ltrbxd.com/resized/film-poster/8/5/0/4/5/9/850459-alien-romulus-0-1000-0-1500-crop.jpg?v=acabb7fd83"
                              alt=""
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="col-4 p-1">
                        <div className="w-100">
                          <Link to="/MovieDetail">
                            <img
                              className="w-100"
                              src="https://a.ltrbxd.com/resized/film-poster/5/1/5/4/2/51542-jaws-0-1000-0-1500-crop.jpg?v=03299455f6"
                              alt=""
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-3 col-4">
              <div className="w-100 p-4 rounded-circle">
                <div>
                  <Link to="/MembersProfile">
                    <img
                      className="w-100 rounded-circle"
                      src="https://a.ltrbxd.com/resized/avatar/upload/4/4/3/4/2/2/shard/avtr-0-1000-0-1000-crop.jpg?v=0cc194b2ba"
                      alt=""
                    />
                  </Link>

                  <Link to="/MembersProfile">Melissa Tamminga</Link>
                  <div className="d-flex justify-content-between">
                    <Link to="/journal">2.3k films</Link>
                    <Link to="/journal">8.7 reviews</Link>
                  </div>
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-4 p-1">
                        <div className="w-100">
                          <Link to="/MovieDetail">
                            <img
                              className="w-100"
                              src="https://a.ltrbxd.com/resized/film-poster/5/0/9/5/4/50954-rope-0-1000-0-1500-crop.jpg?v=bd8d1695a5"
                              alt=""
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="col-4 p-1">
                        <div className="w-100">
                          <Link to="/MovieDetail">
                            <img
                              className="w-100"
                              src="https://a.ltrbxd.com/resized/film-poster/8/5/0/4/5/9/850459-alien-romulus-0-1000-0-1500-crop.jpg?v=acabb7fd83"
                              alt=""
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="col-4 p-1">
                        <div className="w-100">
                          <Link to="/MovieDetail">
                            <img
                              className="w-100"
                              src="https://a.ltrbxd.com/resized/film-poster/5/1/5/4/2/51542-jaws-0-1000-0-1500-crop.jpg?v=03299455f6"
                              alt=""
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-3 col-4">
              <div className="w-100 p-4 rounded-circle">
                <div>
                  <Link to="/MembersProfile">
                    <img
                      className="w-100 rounded-circle"
                      src="https://a.ltrbxd.com/resized/avatar/upload/4/4/3/4/2/2/shard/avtr-0-1000-0-1000-crop.jpg?v=0cc194b2ba"
                      alt=""
                    />
                  </Link>

                  <Link to="/MembersProfile">Melissa Tamminga</Link>
                  <div className="d-flex justify-content-between">
                    <Link to="/journal">2.3k films</Link>
                    <Link to="/journal">8.7 reviews</Link>
                  </div>
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-4 p-1">
                        <div className="w-100">
                          <Link to="/MovieDetail">
                            <img
                              className="w-100"
                              src="https://a.ltrbxd.com/resized/film-poster/5/0/9/5/4/50954-rope-0-1000-0-1500-crop.jpg?v=bd8d1695a5"
                              alt=""
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="col-4 p-1">
                        <div className="w-100">
                          <Link to="/MovieDetail">
                            <img
                              className="w-100"
                              src="https://a.ltrbxd.com/resized/film-poster/8/5/0/4/5/9/850459-alien-romulus-0-1000-0-1500-crop.jpg?v=acabb7fd83"
                              alt=""
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="col-4 p-1">
                        <div className="w-100">
                          <Link to="/MovieDetail">
                            <img
                              className="w-100"
                              src="https://a.ltrbxd.com/resized/film-poster/5/1/5/4/2/51542-jaws-0-1000-0-1500-crop.jpg?v=03299455f6"
                              alt=""
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-3 col-4">
              <div className="w-100 p-4 rounded-circle">
                <div>
                  <Link to="/MembersProfile">
                    <img
                      className="w-100 rounded-circle"
                      src="https://a.ltrbxd.com/resized/avatar/upload/4/4/3/4/2/2/shard/avtr-0-1000-0-1000-crop.jpg?v=0cc194b2ba"
                      alt=""
                    />
                  </Link>

                  <Link to="/MembersProfile">Melissa Tamminga</Link>
                  <div className="d-flex justify-content-between">
                    <Link to="/journal">2.3k films</Link>
                    <Link to="/journal">8.7 reviews</Link>
                  </div>
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-4 p-1">
                        <div className="w-100">
                          <Link to="/MovieDetail">
                            <img
                              className="w-100"
                              src="https://a.ltrbxd.com/resized/film-poster/5/0/9/5/4/50954-rope-0-1000-0-1500-crop.jpg?v=bd8d1695a5"
                              alt=""
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="col-4 p-1">
                        <div className="w-100">
                          <Link to="/MovieDetail">
                            <img
                              className="w-100"
                              src="https://a.ltrbxd.com/resized/film-poster/8/5/0/4/5/9/850459-alien-romulus-0-1000-0-1500-crop.jpg?v=acabb7fd83"
                              alt=""
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="col-4 p-1">
                        <div className="w-100">
                          <Link to="/MovieDetail">
                            <img
                              className="w-100"
                              src="https://a.ltrbxd.com/resized/film-poster/5/1/5/4/2/51542-jaws-0-1000-0-1500-crop.jpg?v=03299455f6"
                              alt=""
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h6>popular this week</h6>
          <hr className="m-0" />
          <div className="row">
            <div className="col-md-4 col-lg-3 col-4">
              <div className="w-100 p-4 rounded-circle">
                <div>
                  <Link to="/MembersProfile">
                    <img
                      className="w-100 rounded-circle"
                      src="https://a.ltrbxd.com/resized/avatar/upload/4/4/3/4/2/2/shard/avtr-0-1000-0-1000-crop.jpg?v=0cc194b2ba"
                      alt=""
                    />
                  </Link>

                  <Link to="/MembersProfile">Melissa Tamminga</Link>
                  <div className="d-flex justify-content-between">
                    <Link to="/journal">2.3k films</Link>
                    <Link to="/journal">8.7 reviews</Link>
                  </div>
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-4 p-1">
                        <div className="w-100">
                          <Link to="/MovieDetail">
                            <img
                              className="w-100"
                              src="https://a.ltrbxd.com/resized/film-poster/5/0/9/5/4/50954-rope-0-1000-0-1500-crop.jpg?v=bd8d1695a5"
                              alt=""
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="col-4 p-1">
                        <div className="w-100">
                          <Link to="/MovieDetail">
                            <img
                              className="w-100"
                              src="https://a.ltrbxd.com/resized/film-poster/8/5/0/4/5/9/850459-alien-romulus-0-1000-0-1500-crop.jpg?v=acabb7fd83"
                              alt=""
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="col-4 p-1">
                        <div className="w-100">
                          <Link to="/MovieDetail">
                            <img
                              className="w-100"
                              src="https://a.ltrbxd.com/resized/film-poster/5/1/5/4/2/51542-jaws-0-1000-0-1500-crop.jpg?v=03299455f6"
                              alt=""
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-3 col-4">
              <div className="w-100 p-4 rounded-circle">
                <div>
                  <Link to="/MembersProfile">
                    <img
                      className="w-100 rounded-circle"
                      src="https://a.ltrbxd.com/resized/avatar/upload/4/4/3/4/2/2/shard/avtr-0-1000-0-1000-crop.jpg?v=0cc194b2ba"
                      alt=""
                    />
                  </Link>

                  <Link to="/MembersProfile">Melissa Tamminga</Link>
                  <div className="d-flex justify-content-between">
                    <Link to="/journal">2.3k films</Link>
                    <Link to="/journal">8.7 reviews</Link>
                  </div>
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-4 p-1">
                        <div className="w-100">
                          <Link to="/MovieDetail">
                            <img
                              className="w-100"
                              src="https://a.ltrbxd.com/resized/film-poster/5/0/9/5/4/50954-rope-0-1000-0-1500-crop.jpg?v=bd8d1695a5"
                              alt=""
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="col-4 p-1">
                        <div className="w-100">
                          <Link to="/MovieDetail">
                            <img
                              className="w-100"
                              src="https://a.ltrbxd.com/resized/film-poster/8/5/0/4/5/9/850459-alien-romulus-0-1000-0-1500-crop.jpg?v=acabb7fd83"
                              alt=""
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="col-4 p-1">
                        <div className="w-100">
                          <Link to="/MovieDetail">
                            <img
                              className="w-100"
                              src="https://a.ltrbxd.com/resized/film-poster/5/1/5/4/2/51542-jaws-0-1000-0-1500-crop.jpg?v=03299455f6"
                              alt=""
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-3 col-4">
              <div className="w-100 p-4 rounded-circle">
                <div>
                  <Link to="/MembersProfile">
                    <img
                      className="w-100 rounded-circle"
                      src="https://a.ltrbxd.com/resized/avatar/upload/4/4/3/4/2/2/shard/avtr-0-1000-0-1000-crop.jpg?v=0cc194b2ba"
                      alt=""
                    />
                  </Link>

                  <Link to="/MembersProfile">Melissa Tamminga</Link>
                  <div className="d-flex justify-content-between">
                    <Link to="/journal">2.3k films</Link>
                    <Link to="/journal">8.7 reviews</Link>
                  </div>
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-4 p-1">
                        <div className="w-100">
                          <Link to="/MovieDetail">
                            <img
                              className="w-100"
                              src="https://a.ltrbxd.com/resized/film-poster/5/0/9/5/4/50954-rope-0-1000-0-1500-crop.jpg?v=bd8d1695a5"
                              alt=""
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="col-4 p-1">
                        <div className="w-100">
                          <Link to="/MovieDetail">
                            <img
                              className="w-100"
                              src="https://a.ltrbxd.com/resized/film-poster/8/5/0/4/5/9/850459-alien-romulus-0-1000-0-1500-crop.jpg?v=acabb7fd83"
                              alt=""
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="col-4 p-1">
                        <div className="w-100">
                          <Link to="/MovieDetail">
                            <img
                              className="w-100"
                              src="https://a.ltrbxd.com/resized/film-poster/5/1/5/4/2/51542-jaws-0-1000-0-1500-crop.jpg?v=03299455f6"
                              alt=""
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-3 col-4">
              <div className="w-100 p-4 rounded-circle">
                <div>
                  <Link to="/MembersProfile">
                    <img
                      className="w-100 rounded-circle"
                      src="https://a.ltrbxd.com/resized/avatar/upload/4/4/3/4/2/2/shard/avtr-0-1000-0-1000-crop.jpg?v=0cc194b2ba"
                      alt=""
                    />
                  </Link>

                  <Link to="/MembersProfile">Melissa Tamminga</Link>
                  <div className="d-flex justify-content-between">
                    <Link to="/journal">2.3k films</Link>
                    <Link to="/journal">8.7 reviews</Link>
                  </div>
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-4 p-1">
                        <div className="w-100">
                          <Link to="/MovieDetail">
                            <img
                              className="w-100"
                              src="https://a.ltrbxd.com/resized/film-poster/5/0/9/5/4/50954-rope-0-1000-0-1500-crop.jpg?v=bd8d1695a5"
                              alt=""
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="col-4 p-1">
                        <div className="w-100">
                          <Link to="/MovieDetail">
                            <img
                              className="w-100"
                              src="https://a.ltrbxd.com/resized/film-poster/8/5/0/4/5/9/850459-alien-romulus-0-1000-0-1500-crop.jpg?v=acabb7fd83"
                              alt=""
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="col-4 p-1">
                        <div className="w-100">
                          <Link to="/MovieDetail">
                            <img
                              className="w-100"
                              src="https://a.ltrbxd.com/resized/film-poster/5/1/5/4/2/51542-jaws-0-1000-0-1500-crop.jpg?v=03299455f6"
                              alt=""
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 offset-lg-8">
              <div className="container my-4 text-light">
                <div className="d-flex justify-content-between align-items-center">
                  <h2>HQ MEMBERS</h2>

                  <Link to="/HqMembers">All</Link>
                </div>
                <hr className="border-secondary" />
                <div className="container-fluid">
                  <div className="row ">
                    {members.map((member) => (
                      <div key={member.id} className="col-4 col-md-3 ">
                        <div className="mb-4  text-center ">
                          <div className="w-100">
                            <img
                              src={member.logo}
                              alt={member.name}
                              className="rounded-circle w-100 img-fluid"
                              style={{
                                // width: "88px",
                                // height: "88px",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h6> Members List</h6>
        <hr className="m-0" />
        <UserList />
        <div className="text-sm-center p-5 ">
          <Link to="/PopularList">
            <button className="btn btn-dark px-5">View More</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
