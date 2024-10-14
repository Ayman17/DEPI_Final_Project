import React from "react";
import "./style.css";

const Journal = () => {
  return (
    <div>
      {/* <nav className="navbar navbar-dark bg-black">
        <div className="container">
          <div className="navbar-brand">
            <span
              className="navbar-icon"
              style={{ display: "inline-block", marginRight: "10px" }}
            >
              🔵🟢🟡
            </span>
            <span>JOURNAL</span>
          </div>
          <div className="ml-auto">
            <button className="btn btn-link text-light">Sections</button>
            <button className="btn btn-link text-light">Newsletter</button>
            <button className="btn btn-link text-light">Podcast</button>
          </div>
        </div>
      </nav> */}
      {/* Main Content */}
      <div>
        <div className="position-absolute w-100 ">
          <div className="  overflow-auto bg-secondary pb-9">
            <div className="container mt-5  ">
              <div className="row ">
                <div className="col-lg-12 text-center  d-flex ">
                  <img
                    src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg" // Replace with actual image
                    className="img-fluid"
                    alt="Main Visual"
                  />
                  <div className="mt-4">
                    <h2 className="text-light">Friends Furever.</h2>
                    <p className="lead w-50 m-auto text-light">
                      With <strong>The Wild Robot</strong> flying into theaters
                      via DreamWorks, Kambole Campbell sits down with director
                      Chris Sanders to explore the film’s breathtaking
                      hand-painted visuals and evolutionary vocal performance
                      from Lupita Nyong'o.
                    </p>
                    <p>
                      <strong className="text-light">Kambole Campbell</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container GridImages position-relative w-75 ">
            <div className="row mt-4 gy-4">
              <div className="col-md-4">
                <div className="">
                  <img
                    src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg" // Replace with actual image
                    className="img-fluid"
                    alt="Thumbnail 1"
                  />
                  <div className="row">
                    <div className="offset-2 col-4">
                      <a href="#">interview</a>
                    </div>
                    <div className="col-4">
                      <p>26 Sep 2024</p>
                    </div>
                  </div>
                  <p className="text-center w-75 m-auto">
                    <span className="fw-bold">Butts and Guts.</span> As The
                    Substance oozes into theaters worldwide, writer-director
                    Coralie Fargeat tells all to Mia Lee Vicino about subverting
                    the butt shot and the “freak” archetype with her new
                    body-horror satire—and its explosive ending.{" "}
                    <a href="#">Mia Lee Vicino</a>
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="">
                  <img
                    src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg" // Replace with actual image
                    className="img-fluid"
                    alt="Thumbnail 1"
                  />
                  <div className="row">
                    <div className="offset-2 col-4">
                      <a href="#">interview</a>
                    </div>
                    <div className="col-4">
                      <p>26 Sep 2024</p>
                    </div>
                  </div>
                  <p className="text-center w-75 m-auto">
                    <span className="fw-bold">Butts and Guts.</span> As The
                    Substance oozes into theaters worldwide, writer-director
                    Coralie Fargeat tells all to Mia Lee Vicino about subverting
                    the butt shot and the “freak” archetype with her new
                    body-horror satire—and its explosive ending.{" "}
                    <a href="#">Mia Lee Vicino</a>
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="">
                  <img
                    src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg" // Replace with actual image
                    className="img-fluid"
                    alt="Thumbnail 1"
                  />
                  <div className="row">
                    <div className="offset-2 col-4">
                      <a href="#">interview</a>
                    </div>
                    <div className="col-4">
                      <p>26 Sep 2024</p>
                    </div>
                  </div>
                  <p className="text-center  w-75 m-auto">
                    <span className="fw-bold">Butts and Guts.</span> As The
                    Substance oozes into theaters worldwide, writer-director
                    Coralie Fargeat tells all to Mia Lee Vicino about subverting
                    the butt shot and the “freak” archetype with her new
                    body-horror satire—and its explosive ending.{" "}
                    <a href="#">Mia Lee Vicino</a>
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="">
                  <img
                    src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg" // Replace with actual image
                    className="img-fluid"
                    alt="Thumbnail 1"
                  />
                  <div className="row">
                    <div className="offset-2 col-4">
                      <a href="#">interview</a>
                    </div>
                    <div className="col-4">
                      <p>26 Sep 2024</p>
                    </div>
                  </div>
                  <p className="text-center  w-75 m-auto">
                    <span className="fw-bold">Butts and Guts.</span> As The
                    Substance oozes into theaters worldwide, writer-director
                    Coralie Fargeat tells all to Mia Lee Vicino about subverting
                    the butt shot and the “freak” archetype with her new
                    body-horror satire—and its explosive ending.{" "}
                    <a href="#">Mia Lee Vicino</a>
                  </p>
                </div>
              </div>

              <div className="col-md-4 ">
                <div className="">
                  <img
                    src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg" // Replace with actual image
                    className="img-fluid"
                    alt="Thumbnail 1"
                  />
                  <div className="row">
                    <div className="offset-2 col-4">
                      <a href="#">interview</a>
                    </div>
                    <div className="col-4">
                      <p>26 Sep 2024</p>
                    </div>
                  </div>
                  <p className="text-center  w-75 m-auto">
                    <span className="fw-bold">Butts and Guts.</span> As The
                    Substance oozes into theaters worldwide, writer-director
                    Coralie Fargeat tells all to Mia Lee Vicino about subverting
                    the butt shot and the “freak” archetype with her new
                    body-horror satire—and its explosive ending.{" "}
                    <a href="#">Mia Lee Vicino</a>
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="">
                  <img
                    src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg" // Replace with actual image
                    className="img-fluid"
                    alt="Thumbnail 1"
                  />
                  <div className="row">
                    <div className="offset-2 col-4">
                      <a href="#">interview</a>
                    </div>
                    <div className="col-4">
                      <p>26 Sep 2024</p>
                    </div>
                  </div>
                  <p className="text-center  w-75 m-auto">
                    <span className="fw-bold">Butts and Guts.</span> As The
                    Substance oozes into theaters worldwide, writer-director
                    Coralie Fargeat tells all to Mia Lee Vicino about subverting
                    the butt shot and the “freak” archetype with her new
                    body-horror satire—and its explosive ending.{" "}
                    <a href="#">Mia Lee Vicino</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container  w-75 ">
            <div className="row ">
              <div className="col-lg-12 text-center  d-flex ">
                <img
                  src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg" // Replace with actual image
                  className="img-fluid"
                  alt="Main Visual"
                />
                <div className="mt-4">
                  <h2>Friends Furever.</h2>
                  <p className="lead w-50 m-auto">
                    With <strong>The Wild Robot</strong> flying into theaters
                    via DreamWorks, Kambole Campbell sits down with director
                    Chris Sanders to explore the film’s breathtaking
                    hand-painted visuals and evolutionary vocal performance from
                    Lupita Nyong'o.
                  </p>
                  <p>
                    <strong>Kambole Campbell</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journal;
