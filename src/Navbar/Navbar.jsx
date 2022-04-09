import React, { Component } from 'react'
import './Navbar.css';
export class Navbar extends Component {
  render() {
    return (
      <div>


        <nav className="navbar navbar-expand-lg navbar-light Navbar-body ">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarTogglerDemo01">
              <a className="navbar-brand Navbar-Text text-light" href="#">
                  NetWork
              </a>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item Navbar-Li">
                  <a className="nav-link active text-light " aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item Navbar-Li">
                  <a className="nav-link text-light" href="#">
                  Message
                  </a>
                </li>
                <li className="nav-item Navbar-Li">
                  <a className="nav-link text-light">Disabled</a>
                </li>
              </ul>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                ></input>
                <button className="btn btn-outline-success text-light" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;