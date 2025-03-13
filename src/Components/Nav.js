import React from 'react';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand">RYDE<sup><em id="sync">Sync</em></sup></a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-1 my-sm-0 navbar-nav-scroll">
            <li className="nav-item px-3">
              <a
                className="nav-link active"
                aria-current="page"
                title="View Your Task List"
                onClick={() => navigate("/TaskList")}
              >
                Home
              </a>
            </li>
            <li className="nav-item px-3">
              <a
                className="nav-link active"
                title="Learn more about RydeSync"
                onClick={() => navigate("/About")}
              >
                About Us
              </a>
            </li>
            <li className="nav-item px-3">
              <a
                className="nav-link active"
                title="Add a New Maintenance Schedule"
                onClick={() => navigate("/AddTask")}
              >
                Add Schedule
              </a>
            </li>
            <li className="nav-item px-3">
              <a
                className="nav-link disabled"
                id="la"
                title="This feature is coming soon"
              >
                Register Vehicle
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
