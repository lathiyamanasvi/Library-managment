import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { IoStarOutline } from "react-icons/io5";
import { IoStarHalfOutline } from "react-icons/io5";
import { IoStar } from "react-icons/io5";
import Header from '../Header';
import Footer from '../Footer';
import { MdReviews } from "react-icons/md";
import { FaRegNoteSticky } from "react-icons/fa6";
import { IoShareSocialSharp } from "react-icons/io5";

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const books = JSON.parse(localStorage.getItem('books')) || [];
    setBook(books[id]);
  }, [id]);

  const handleBorrowReturn = () => {
    const books = JSON.parse(localStorage.getItem('books')) || [];
    books[id].borrowed = !books[id].borrowed;
    localStorage.setItem('books', JSON.stringify(books));
    setBook({ ...books[id] });
  };

  if (!book) {
    return <div>Book not found!</div>;
  }

  return (
    <>
      <Header />
      <div class="d-flex flex-wrap p-4 mt-5" style={{ backgroundColor: "#FEFCFF", border: "1px solid #B6B6B4", borderRadius: "10px" }}>
        <div class="col-md-4 col-lg-4 col-12 border border-dark p-3">
          <img src={book.image} class="img-fluid" width="400px" />
          <button
            onClick={handleBorrowReturn}
            className={` w-100 d-block btn btn-primary ${book.borrowed ? 'red' : 'green'}-500 text-white p-2 rounded mt-4`}
          >
            {book.borrowed ? 'Return Book' : 'Borrow Book'}
          </button>

          <div class="rating mt-3 text-center">
            <span class="fs-3"><IoStarOutline /></span>
            <span class="fs-3 mx-2"><IoStarOutline /></span>
            <span class="fs-3"><IoStarOutline /></span>
            <span class="fs-3 mx-2"><IoStarOutline /></span>
            <span class="fs-3"><IoStarOutline /></span>
          </div>
        </div>
        <div class="col-md-8 col-lg-8 col-12 ps-5">
          <div class="row">
            <div class="col-md-12">
              <div className='d-flex justify-content-between'>
                <div>
                  <p className='fs-5 text-muted'>An edition of <span className='text-decoration-underline'>{book.title}(2014)</span></p>
                  <h1 class="mt-3" style={{ fontSize: "40px" }}>{book.title}</h1>

                </div>

                <div>
                  <Link to={`/edit/${id}`} className="btn btn-outline-secondary text-black px-5 py-2 rounded mt-4 inline-block">   Edit Book </Link>
                </div>
              </div>

              <p className='fs-5'>by <a href="#">{book.author}</a></p>
              <p>
                <span class="fs-3"><IoStar /></span>
                <span class="fs-3"><IoStar /></span>
                <span class="fs-3"><IoStar /></span>
                <span class="fs-3"><IoStar /></span>
                <span class="fs-3"><IoStarHalfOutline /></span>
              </p>
              <p className='fs-5'>{book.description}</p>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-md-3">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Publish Date</h5>
                  <p class="card-text">{book.publicationDate}</p>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Publisher</h5>
                  <p class="card-text">{book.publisher}</p>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Language</h5>
                  <p class="card-text">{book.language}</p>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Pages</h5>
                  <p class="card-text">{book.pages}</p>
                </div>
              </div>
            </div>
          </div>
          <p class="mt-4 fs-5">Previews available in: <a href="#">English</a></p>
          <p class="mt-2">Last edited by <a href="#">Drini</a> July 8, 2024 | <a href="#">History</a> </p>

          <hr />
          <div class="d-flex justify-content-around">
            <div>
              <button type="button" class="btn btn-link fs-2 text-dark">
                <MdReviews />
              </button>
              <div>Review</div>
            </div>
            <div>
              <button type="button" class="btn btn-link fs-2 text-dark">
                <FaRegNoteSticky />
              </button>
              <div>Notes</div>
            </div>
            <div>
              <button type="button" class="btn btn-link fs-2 text-dark">
                <IoShareSocialSharp />
              </button>
              <div>Share</div>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default BookDetail;
