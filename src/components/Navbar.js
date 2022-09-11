import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/src/collapse.js";

import {
  FaHeart,
  FaUndoAlt,
  FaShareAlt,
  FaUnlockAlt,
  FaSearch,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div class="row">
        <div class="col-md-6 mb-4">
          <div class="input-group md-form form-sm form-1 pl-0">
            <div class="input-group-prepend">
              <span class="input-group-text purple lighten-3" id="basic-text1">
                <FaSearch />
              </span>
            </div>
            <input
              class="form-control my-0 py-1"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn-btn-danger"
              type="button"
              id="search-btn"
              onclick="SearchData()"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg-left navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <FaHeart /> Dashboard
                </a>
                <br />
                <a className="nav-link active" aria-current="page" href="#">
                  <FaUndoAlt />
                  Anayltics
                </a>
                <br />
                <a className="nav-link active" aria-current="page" href="#">
                  <FaShareAlt />
                  Pages
                </a>
                <br />
                <a className="nav-link active" aria-current="page" href="#">
                  {" "}
                  <FaUndoAlt />
                  <br />
                  Dashboard
                </a>
                <br />
                <a className="nav-link active" aria-current="page" href="#">
                  <FaUnlockAlt />
                  Dashboard
                </a>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="#">Features</a> */}
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="#">Pricing</a> */}
              </li>
              <li className="nav-item">
                {/* <a className="nav-link disabled">Disabled</a> */}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
