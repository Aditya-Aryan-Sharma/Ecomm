import React from "react";
import logo from './logo.svg';
import "./style.css"

export default function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top custom-nav">
            <img src={logo} className="App-logo" alt="logo" />
            <h2 className="nav-title">E-COMM</h2>
            <ul className="nav-content"> 
                <h5 className="nav-content-text">Home</h5>
                <h5 className="nav-content-text">Electronics</h5>
                <h5 className="nav-content-text">Books</h5>
                <h5 className="nav-content-text">Music</h5>
                <h5 className="nav-content-text">Movies</h5>
                <h5 className="nav-content-text">Clothing</h5>
                <h5 className="nav-content-text">Games</h5>
                <div className="dropdown">
                    <h5
                        className="nav-content-text dropdown-toggle"
                        id="moreDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        More
                    </h5>
                    <ul className="dropdown-content" aria-labelledby="navbarDropdown">
                        <li>
                        <a className="dropdown-item" href="https://google.com">
                            Action
                        </a>
                        </li>
                    </ul>
                </div>
                <div className="search-content">
                    <div className="input-group justify-content-end">
                        <div className="input-group-prepend">
                        <button id="button-addon8" type="submit" className="btn btn-danger">
                            <i className="fa fa-search"></i>
                        </button>
                        </div>
                        <input
                            type="search"
                            placeholder="Search something"
                            aria-describedby="button-addon8"
                            className="search-container form-control" style={{ width: "350px" }}
                        />
                    </div>
                </div>
            </ul>
        </nav>
    );
}