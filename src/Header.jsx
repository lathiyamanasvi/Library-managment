import React, { useContext, useState } from 'react'
import { SearchContext } from './context/SearchContext';
import { Link } from 'react-router-dom';

const Header = () => {
    const { searchTerm, setSearchTerm } = useContext(SearchContext);

    const handleSearch = (e) => {
      setSearchTerm(e.target.value);
    };

    return (
        <>
  <nav class="navbar navbar-expand-lg navbar-light bg-transperent">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src='https://openlibrary.org/static/images/openlibrary-logo-tighter.svg' width="300px"/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item text-black">
          <a class="nav-link fs-3 text-dark fw-normal" aria-current="page" href="#">My Books</a>
        </li>
        <li class="nav-item dropdown ms-5">
          <a class="nav-link dropdown-toggle fs-3 text-dark" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Browse
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Subjects </a></li>
        <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Tranding</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">classic</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Romance</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Thrillers</a></li>
            
          </ul>
        </li>
      </ul>
      <form class="d-flex">
    
        <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search by title..."
        className="form-control me-2 w-100 pe-5 ps-3 py-2"
      />
        <Link to="/add" className="btn btn-primary text-white px-5 py-2 rounded fs-6">Add</Link>
      </form>
    </div>
  </div>
</nav>


        </>
    )
}

export default Header

