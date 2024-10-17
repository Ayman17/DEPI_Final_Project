import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
const HqMembers = () => {
  const profiles = [
    {
      name: "High On Films",
      joined: "Joined 8 years ago",
      img: "https://a.ltrbxd.com/resized/avatar/twitter/2/3/7/6/6/9/shard/http___pbs.twimg.com_profile_images_1164765400623538176_BSfKiCy6-0-300-0-300-crop.jpg?v=46dcb79593",
    },
    {
      name: "QuietOnSet",
      joined: "Joined 4 years ago",
      img: "https://a.ltrbxd.com/resized/avatar/upload/1/5/7/8/8/1/2/6/shard/avtr-0-300-0-300-crop.jpg?v=8d98973774",
    },
    {
      name: "Kino Xenix",
      joined: "Joined 8 months ago",
      img: "https://a.ltrbxd.com/resized/avatar/upload/4/5/1/1/0/2/6/shard/avtr-0-300-0-300-crop.jpg?v=48ab928b41",
    },
    {
      name: "deepcutpod",
      joined: "Joined 3 years ago",
      img: "https://a.ltrbxd.com/resized/avatar/upload/6/2/1/1/9/2/2/shard/avtr-0-300-0-300-crop.jpg?v=05e5bf9973",
    },
    {
      name: "Sean Kelly on Movies",
      joined: "Joined 3 years ago",
      img: "https://a.ltrbxd.com/resized/avatar/upload/1/8/8/6/0/1/shard/avtr-0-300-0-300-crop.jpg?v=113bf2729b",
    },
    {
      name: "The Prince Charles Cinema",
      joined: "Joined 12 years ago",
      img: "https://a.ltrbxd.com/resized/avatar/upload/1/8/8/6/0/1/shard/avtr-0-300-0-300-crop.jpg?v=113bf2729b",
    },
    {
      name: "High On Films",
      joined: "Joined 8 years ago",
      img: "https://a.ltrbxd.com/resized/avatar/twitter/2/3/7/6/6/9/shard/http___pbs.twimg.com_profile_images_1164765400623538176_BSfKiCy6-0-300-0-300-crop.jpg?v=46dcb79593",
    },
    {
      name: "QuietOnSet",
      joined: "Joined 4 years ago",
      img: "https://a.ltrbxd.com/resized/avatar/upload/1/5/7/8/8/1/2/6/shard/avtr-0-300-0-300-crop.jpg?v=8d98973774",
    },
    {
      name: "Kino Xenix",
      joined: "Joined 8 months ago",
      img: "https://a.ltrbxd.com/resized/avatar/upload/4/5/1/1/0/2/6/shard/avtr-0-300-0-300-crop.jpg?v=48ab928b41",
    },
    {
      name: "deepcutpod",
      joined: "Joined 3 years ago",
      img: "https://a.ltrbxd.com/resized/avatar/upload/6/2/1/1/9/2/2/shard/avtr-0-300-0-300-crop.jpg?v=05e5bf9973",
    },
    {
      name: "Sean Kelly on Movies",
      joined: "Joined 3 years ago",
      img: "https://a.ltrbxd.com/resized/avatar/upload/1/8/8/6/0/1/shard/avtr-0-300-0-300-crop.jpg?v=113bf2729b",
    },
    {
      name: "The Prince Charles Cinema",
      joined: "Joined 12 years ago",
      img: "https://a.ltrbxd.com/resized/avatar/upload/1/8/8/6/0/1/shard/avtr-0-300-0-300-crop.jpg?v=113bf2729b",
    },
    {
      name: "High On Films",
      joined: "Joined 8 years ago",
      img: "https://a.ltrbxd.com/resized/avatar/twitter/2/3/7/6/6/9/shard/http___pbs.twimg.com_profile_images_1164765400623538176_BSfKiCy6-0-300-0-300-crop.jpg?v=46dcb79593",
    },
    {
      name: "QuietOnSet",
      joined: "Joined 4 years ago",
      img: "https://a.ltrbxd.com/resized/avatar/upload/1/5/7/8/8/1/2/6/shard/avtr-0-300-0-300-crop.jpg?v=8d98973774",
    },
    {
      name: "Kino Xenix",
      joined: "Joined 8 months ago",
      img: "https://a.ltrbxd.com/resized/avatar/upload/4/5/1/1/0/2/6/shard/avtr-0-300-0-300-crop.jpg?v=48ab928b41",
    },
    {
      name: "deepcutpod",
      joined: "Joined 3 years ago",
      img: "https://a.ltrbxd.com/resized/avatar/upload/6/2/1/1/9/2/2/shard/avtr-0-300-0-300-crop.jpg?v=05e5bf9973",
    },
    {
      name: "Sean Kelly on Movies",
      joined: "Joined 3 years ago",
      img: "https://a.ltrbxd.com/resized/avatar/upload/1/8/8/6/0/1/shard/avtr-0-300-0-300-crop.jpg?v=113bf2729b",
    },
    {
      name: "The Prince Charles Cinema",
      joined: "Joined 12 years ago",
      img: "https://a.ltrbxd.com/resized/avatar/upload/1/8/8/6/0/1/shard/avtr-0-300-0-300-crop.jpg?v=113bf2729b",
    },
  ];

  return (
    <div className="bg-black  text-light pt-5 ">
      <div className="container text-center w-75 ">
        {/* Button */}
        <button className="btn btn-primary mb-4">HQs</button>
        <p>
          Our HQ tier is for studios, distributors, festivals, theaters,
          podcasts, and film-related organizations. Follow the accounts below to
          receive their updates in your activity feed.
        </p>

        {/* Profile Grid */}
        <div className="row justify-content-center pt-5">
          {profiles.map((profile, index) => (
            <div className="col-lg-3 col-md-4 col-sm-6 col-6 mb-4" key={index}>
              <div className="d-flex flex-column align-items-center">
                <Link to="/MembersProfile">
                  <img
                    src={profile.img}
                    alt={profile.name}
                    className="rounded-circle mb-2"
                    style={{ width: "100px", height: "100px" }}
                  />
                </Link>

                <Link to="/MembersProfile">
                  <h6>{profile.name}</h6>
                </Link>

                <p className="small">{profile.joined}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HqMembers;
