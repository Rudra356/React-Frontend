import React from 'react';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate =  useNavigate();
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" >Task Studio</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="material-symbols-outlined">
          menu
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul
            className="navbar-nav me-auto my-1 my-sm-0 navbar-nav-scroll"
            >
            <li className="nav-item px-3">
              <a className="nav-link active" aria-current="page"
              onClick={()=>navigate("/")}>
                Home
              </a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link active" 
              onClick={()=>navigate("/AddTask")}>
                Add Task
              </a>
            </li>
            <li className="nav-item px-3 ">
              <a className="nav-link active"
              onClick={()=>navigate("/TaskList")}>
                About Us
              </a>
            </li>
          </ul>
          <form className="d-flex px-3 " role="search">
            <input
              className="form-control me-3"
              type="search"
              placeholder="Type here"
              aria-label="Search"
              id='searchid'
            />
            <button className="btnxx rounded px-3 " type="submit">
              Find
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
