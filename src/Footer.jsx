import React from 'react'
import './App.css'
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { BsBank2 } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <footer class="py-5">
  <div class="row">
    <div class="col-md-3">
      <h3>Open Library</h3>
      <ul class="list-unstyled fa-5">
        <li><a href="#">Vision</a></li>
        <li className='py-2'><a href="#">Volunteer</a></li>
        <li><a href="#">Partner With Us</a></li>
        <li className='py-2'><a href="#">Careers</a></li>
        <li><a href="#">Blog</a></li>
        <li className='py-2'><a href="#">Terms of Service</a></li>
        <li><a href="#">Donate</a></li>
      </ul>
    </div>
    <div class="col-md-3">
      <h3>Discover</h3>
      <ul class="list-unstyled fs-5">
        <li><a href="#">Home</a></li>
        <li className='py-2'><a href="#">Books</a></li>
        <li><a href="#">Authors</a></li>
        <li className='py-2'><a href="#">Subjects</a></li>
        <li><a href="#">Collections</a></li>
        <li className='py-2'><a href="#">Advanced Search</a></li>
        <li><a href="#">Return to Top</a></li>
      </ul>
    </div>
    <div class="col-md-3">
      <h3>Develop</h3>
      <ul class="list-unstyled fs-5">
        <li><a href="#">Developer Center</a></li>
        <li className='py-2'><a href="#">API Documentation</a></li>
        <li><a href="#">Bulk Data Dumps</a></li>
        <li className='py-2'><a href="#">Writing Bots</a></li>
      </ul>
    </div>
    <div class="col-md-3">
      <h3>Help</h3>
      <ul class="list-unstyled fs-5">
        <li><a href="#">Help Center</a></li>
        <li className='py-2'><a href="#">Report A Problem</a></li>
        <li><a href="#">Suggesting Edits</a></li>
        <li className='py-2'><a href="#">Add a Book</a></li>
        <li><a href="#">Release Notes</a></li>
      </ul>
      <div class="btn-group" role="group">
        <button type="button" class="btn btn-dark fs-2 me-2 rounded"><FaXTwitter /></button>
        <button type="button" class="btn btn-dark fs-2 rounded"><FaGithub /></button>
      </div>
    </div>
  </div>
</footer>
<hr/>
<div className='d-flex justify-content-between'>
<p>
<BsBank2  className='fs-3'/> Open Library is an initiative of the 
  <a href="">Internet Archive</a>, a 501(c)(3) non-profit, building a digital library of Internet sites and other
  cultural artifacts in digital form. Other <a href="">projects</a> include the 
  <a href="">Wayback Machine</a>, <a href="">archive.org</a> and 
  <a href="">archive-it.org</a>.
</p>
<button class="btn bg-secondary text-white">version 078cdf8</button> 
</div>

    </div>
  )
}

export default Footer
