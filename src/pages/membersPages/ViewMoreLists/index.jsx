import React, { useState } from "react";
import { Dropdown, ListGroup, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./style.css"; // Add custom CSS for the dark theme and specific styling.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTh, faHeart } from "@fortawesome/free-solid-svg-icons";

const PopularList = () => {
  const [sortOption, setSortOption] = useState("This Week");

  // Sample data for popular reviewers
  const reviewers = [
    { name: "Karsten", reviews: 2074 },
    { name: "James (Schaffrillas)", reviews: 1085 },
    { name: "imanul", reviews: 1508 },
    { name: "24framesofnick", reviews: 1315 },
    { name: "Jashan Ramjee", reviews: 1061 },
  ];

  const users = [
    {
      id: 1,
      name: "Lucy",
      reviews: 1812,
      views: 2646,
      lists: 134,
      likes: 7448,
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmOGuTg9WA_jWDADo6sElaTq_rPwcb0di3rDfxk-cKuoH0ZMbGzthcomaUWA&s",
    },
    {
      id: 2,
      name: "Josh Lewis",
      reviews: 3982,
      views: 5429,
      lists: 39,
      likes: 7774,
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmOGuTg9WA_jWDADo6sElaTq_rPwcb0di3rDfxk-cKuoH0ZMbGzthcomaUWA&s",
    },
    {
      id: 3,
      name: "24framesofnick",
      reviews: 689,
      views: 1311,
      lists: 1,
      likes: 855,
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmOGuTg9WA_jWDADo6sElaTq_rPwcb0di3rDfxk-cKuoH0ZMbGzthcomaUWA&s",
    },
    {
      id: 4,
      name: "Lucy",
      reviews: 1812,
      views: 2646,
      lists: 134,
      likes: 7448,
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmOGuTg9WA_jWDADo6sElaTq_rPwcb0di3rDfxk-cKuoH0ZMbGzthcomaUWA&s",
    },
    {
      id: 5,
      name: "Josh Lewis",
      reviews: 3982,
      views: 5429,
      lists: 39,
      likes: 7774,
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmOGuTg9WA_jWDADo6sElaTq_rPwcb0di3rDfxk-cKuoH0ZMbGzthcomaUWA&s",
    },
    {
      id: 6,
      name: "24framesofnick",
      reviews: 689,
      views: 1311,
      lists: 1,
      likes: 855,
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmOGuTg9WA_jWDADo6sElaTq_rPwcb0di3rDfxk-cKuoH0ZMbGzthcomaUWA&s",
    },
    {
      id: 7,
      name: "Lucy",
      reviews: 1812,
      views: 2646,
      lists: 134,
      likes: 7448,
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmOGuTg9WA_jWDADo6sElaTq_rPwcb0di3rDfxk-cKuoH0ZMbGzthcomaUWA&s",
    },
    {
      id: 8,
      name: "Josh Lewis",
      reviews: 3982,
      views: 5429,
      lists: 39,
      likes: 7774,
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmOGuTg9WA_jWDADo6sElaTq_rPwcb0di3rDfxk-cKuoH0ZMbGzthcomaUWA&s",
    },
    {
      id: 9,
      name: "24framesofnick",
      reviews: 689,
      views: 1311,
      lists: 1,
      likes: 855,
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmOGuTg9WA_jWDADo6sElaTq_rPwcb0di3rDfxk-cKuoH0ZMbGzthcomaUWA&s",
    },
    {
      id: 10,
      name: "Lucy",
      reviews: 1812,
      views: 2646,
      lists: 134,
      likes: 7448,
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmOGuTg9WA_jWDADo6sElaTq_rPwcb0di3rDfxk-cKuoH0ZMbGzthcomaUWA&s",
    },
    {
      id: 11,
      name: "Josh Lewis",
      reviews: 3982,
      views: 5429,
      lists: 39,
      likes: 7774,
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmOGuTg9WA_jWDADo6sElaTq_rPwcb0di3rDfxk-cKuoH0ZMbGzthcomaUWA&s",
    },
    {
      id: 12,
      name: "24framesofnick",
      reviews: 689,
      views: 1311,
      lists: 1,
      likes: 855,
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmOGuTg9WA_jWDADo6sElaTq_rPwcb0di3rDfxk-cKuoH0ZMbGzthcomaUWA&s",
    },
    {
      id: 13,
      name: "Lucy",
      reviews: 1812,
      views: 2646,
      lists: 134,
      likes: 7448,
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmOGuTg9WA_jWDADo6sElaTq_rPwcb0di3rDfxk-cKuoH0ZMbGzthcomaUWA&s",
    },
    {
      id: 14,
      name: "Josh Lewis",
      reviews: 3982,
      views: 5429,
      lists: 39,
      likes: 7774,
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmOGuTg9WA_jWDADo6sElaTq_rPwcb0di3rDfxk-cKuoH0ZMbGzthcomaUWA&s",
    },
    {
      id: 15,
      name: "24framesofnick",
      reviews: 689,
      views: 1311,
      lists: 1,
      likes: 855,
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmOGuTg9WA_jWDADo6sElaTq_rPwcb0di3rDfxk-cKuoH0ZMbGzthcomaUWA&s",
    },
    {
      id: 16,
      name: "Lucy",
      reviews: 1812,
      views: 2646,
      lists: 134,
      likes: 7448,
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmOGuTg9WA_jWDADo6sElaTq_rPwcb0di3rDfxk-cKuoH0ZMbGzthcomaUWA&s",
    },
    {
      id: 17,
      name: "Josh Lewis",
      reviews: 3982,
      views: 5429,
      lists: 39,
      likes: 7774,
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmOGuTg9WA_jWDADo6sElaTq_rPwcb0di3rDfxk-cKuoH0ZMbGzthcomaUWA&s",
    },
    {
      id: 18,
      name: "24framesofnick",
      reviews: 689,
      views: 1311,
      lists: 1,
      likes: 855,
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmOGuTg9WA_jWDADo6sElaTq_rPwcb0di3rDfxk-cKuoH0ZMbGzthcomaUWA&s",
    },
    {
      id: 19,
      name: "Lucy",
      reviews: 1812,
      views: 2646,
      lists: 134,
      likes: 7448,
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmOGuTg9WA_jWDADo6sElaTq_rPwcb0di3rDfxk-cKuoH0ZMbGzthcomaUWA&s",
    },
    {
      id: 20,
      name: "Josh Lewis",
      reviews: 3982,
      views: 5429,
      lists: 39,
      likes: 7774,
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmOGuTg9WA_jWDADo6sElaTq_rPwcb0di3rDfxk-cKuoH0ZMbGzthcomaUWA&s",
    },
    {
      id: 21,
      name: "24framesofnick",
      reviews: 689,
      views: 1311,
      lists: 1,
      likes: 855,
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmOGuTg9WA_jWDADo6sElaTq_rPwcb0di3rDfxk-cKuoH0ZMbGzthcomaUWA&s",
    },
    {
      id: 22,
      name: "Lucy",
      reviews: 1812,
      views: 2646,
      lists: 134,
      likes: 7448,
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmOGuTg9WA_jWDADo6sElaTq_rPwcb0di3rDfxk-cKuoH0ZMbGzthcomaUWA&s",
    },
    {
      id: 23,
      name: "Josh Lewis",
      reviews: 3982,
      views: 5429,
      lists: 39,
      likes: 7774,
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmOGuTg9WA_jWDADo6sElaTq_rPwcb0di3rDfxk-cKuoH0ZMbGzthcomaUWA&s",
    },
    {
      id: 24,
      name: "24framesofnick",
      reviews: 689,
      views: 1311,
      lists: 1,
      likes: 855,
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmOGuTg9WA_jWDADo6sElaTq_rPwcb0di3rDfxk-cKuoH0ZMbGzthcomaUWA&s",
    },
    {
      id: 25,
      name: "Lucy",
      reviews: 1812,
      views: 2646,
      lists: 134,
      likes: 7448,
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmOGuTg9WA_jWDADo6sElaTq_rPwcb0di3rDfxk-cKuoH0ZMbGzthcomaUWA&s",
    },
    {
      id: 26,
      name: "Josh Lewis",
      reviews: 3982,
      views: 5429,
      lists: 39,
      likes: 7774,
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmOGuTg9WA_jWDADo6sElaTq_rPwcb0di3rDfxk-cKuoH0ZMbGzthcomaUWA&s",
    },
    {
      id: 27,
      name: "24framesofnick",
      reviews: 689,
      views: 1311,
      lists: 1,
      likes: 855,
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmOGuTg9WA_jWDADo6sElaTq_rPwcb0di3rDfxk-cKuoH0ZMbGzthcomaUWA&s",
    },
    {
      id: 28,
      name: "Lucy",
      reviews: 1812,
      views: 2646,
      lists: 134,
      likes: 7448,
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmOGuTg9WA_jWDADo6sElaTq_rPwcb0di3rDfxk-cKuoH0ZMbGzthcomaUWA&s",
    },
    {
      id: 29,
      name: "Josh Lewis",
      reviews: 3982,
      views: 5429,
      lists: 39,
      likes: 7774,
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmOGuTg9WA_jWDADo6sElaTq_rPwcb0di3rDfxk-cKuoH0ZMbGzthcomaUWA&s",
    },
    {
      id: 30,
      name: "24framesofnick",
      reviews: 689,
      views: 1311,
      lists: 1,
      likes: 855,
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmOGuTg9WA_jWDADo6sElaTq_rPwcb0di3rDfxk-cKuoH0ZMbGzthcomaUWA&s",
    },
  ];

  return (
    <div className="bg-black py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-8 d-flex justify-content-between">
            <h4 className="text-light">Popular Members</h4>
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-sort">
                Sort by: {sortOption}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => setSortOption("All Time")}>
                  All Time
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSortOption("This Week")}>
                  This Week
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSortOption("This Month")}>
                  This Month
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSortOption("This Year")}>
                  This Year
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="col-md-12 col-lg-8 ">
            <div className=" my-4 text-light   ">
              {users.map((user) => (
                <div
                  key={user.id}
                  className="d-flex align-items-center justify-content-between py-2 border-bottom border-secondary"
                >
                  {/* Avatar and User Info */}
                  <div className="d-flex align-items-center">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="rounded-circle"
                      style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "cover",
                      }}
                    />
                    <div className="ms-3">
                      <h5 className="mb-0">{user.name}</h5>
                      <small>{user.reviews} reviews</small>
                    </div>
                  </div>

                  <div className="w-50">
                    <div className="row">
                      <div className="offset-md-6 col-md-2 col-4">
                        <FontAwesomeIcon
                          icon={faEye}
                          className="me-2 text-success"
                        />
                        <span>{user.views}</span>
                      </div>

                      <div className="col-md-2 col-4">
                        <div className="d-flex align-items-center me-4">
                          <FontAwesomeIcon
                            icon={faTh}
                            className="me-2 text-info"
                          />
                          <span>{user.lists}</span>
                        </div>
                      </div>
                      <div className="col-md-2 col-4">
                        <div className="d-flex align-items-center">
                          <FontAwesomeIcon
                            icon={faHeart}
                            className="me-2 text-warning"
                          />
                          <span>{user.likes}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-10 col-lg-3 offset-md-1">
            <h4 className="text-light">Popular Reviewers</h4>
            <ListGroup className="mt-3">
              {reviewers.map((reviewer, index) => (
                <ListGroup.Item
                  key={index}
                  className="d-flex justify-content-between align-items-center text-light bg-black"
                >
                  <div className="reviewer-info">
                    <img
                      src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmOGuTg9WA_jWDADo6sElaTq_rPwcb0di3rDfxk-cKuoH0ZMbGzthcomaUWA&s`}
                      alt="profile"
                      className="rounded-circle"
                      height="40px"
                    />
                    <div className="reviewer-details">
                      <strong>{reviewer.name}</strong>
                    </div>
                  </div>
                  <div className="text-right">{reviewer.reviews} reviews</div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        </div>
        <div className="col-lg-8   offset-7 ">
          <Link to="/PopularList2">
            <button className="btn btn-dark px-5">next</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularList;
