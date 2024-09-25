import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { SearchContext } from '../context/SearchContext';
import Header from '../Header';
import 'jquery-ui-dist/jquery-ui';
import $ from 'jquery'
import Footer from '../Footer';

const BookListing = () => {
  const [books, setBooks] = useState([]);
  const { searchTerm } = useContext(SearchContext);
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    setFilteredBooks(
      books.filter(book =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, books]);

  const handleBorrowReturn = (index) => {
    const updatedBooks = books.map((book, i) => {
      if (i === index) {
        return { ...book, borrowed: !book.borrowed };
      }
      return book;
    });

    setBooks(updatedBooks);
    localStorage.setItem('books', JSON.stringify(updatedBooks));

  };

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem('books')) || [];
    setBooks(storedBooks);
  }, []);
  const handleSaveBook = (newBook, index) => {
    let updatedBooks;

    if (index !== undefined) {
      updatedBooks = books.map((book, i) => (i === index ? newBook : book));
    } else {
      updatedBooks = [...books, newBook];
    }

    setBooks(updatedBooks);
    localStorage.setItem('books', JSON.stringify(updatedBooks));
  };

  return (
    <>
      <Header />
      <div className="container mx-auto bg-white border border-dark rounded-lg p-5 mt-5">
        <h2 className="text-2xl font-semibold mb-4">Tranding</h2>

        <ul className="list-disc list-inside d-flex justify-content-between">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book, index) => (
              <li key={index} className="mb-4">
                <div className="card" style={{ width: '18rem' }}>
                  <div className="card-body d-flex flex-column align-items-center">
                    <Link to={`/book/${index}`} className="text-decoration-none text-blue-600">
                      <img
                        src={book.image}
                        alt={book.title}
                        className="card-img-top w-100"
                        style={{ height: '300px', objectFit: 'cover' }}
                      />
                    </Link>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <button
                        onClick={() => handleBorrowReturn(index)}
                        className={`btn w-100 ${book.borrowed ? 'btn-danger' : 'btn-success'}`}
                      >
                        {book.borrowed ? 'Return' : 'Borrow'}
                      </button>

                    </div>
                  </div>
                </div>
              </li>
            ))
          ) : (
            <li>No books available. Please add some books!</li>
          )}
        </ul>
      </div>
      <Footer/>
    </>
  );
};

export default BookListing;
