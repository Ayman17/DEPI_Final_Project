import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTh, faHeart } from "@fortawesome/free-solid-svg-icons";

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
];

const UserList = () => {
  return (
    <div className="container my-4 text-light">
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
              style={{ width: "50px", height: "50px", objectFit: "cover" }}
            />
            <div className="ms-3">
              <h5 className="mb-0">{user.name}</h5>
              <small>{user.reviews} reviews</small>
            </div>
          </div>

          <div className="w-50">
            <div className="row">
              <div className="offset-md-6 col-md-2 col-4">
                <FontAwesomeIcon icon={faEye} className="me-2 text-success" />
                <span>{user.views}</span>
              </div>

              <div className="col-md-2 col-4">
                <div className="d-flex align-items-center me-4">
                  <FontAwesomeIcon icon={faTh} className="me-2 text-info" />
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
  );
};

export default UserList;
