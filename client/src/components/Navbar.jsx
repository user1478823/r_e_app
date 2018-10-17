import React from "react";

export default () => (
  <div className="container">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        React Express App
      </a>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a href="/create" className="nav-link">
              Create
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);
