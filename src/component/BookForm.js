import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BookForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: '',
    author: '',
    genre: '',
    publicationDate: '',
    publisher: '', 
    language: '', 
    pages: '',     
    image: '',
    description: '',
    borrowed: false,
  });

  useEffect(() => {
    
    const books = JSON.parse(localStorage.getItem('books')) || [];
    if (id) {
     
      const existingBook = books[id];
      if (existingBook) {
        setBook(existingBook);
      }
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const books = JSON.parse(localStorage.getItem('books')) || [];

    if (id) {
      
      books[id] = book;
    } else {
      
      books.push(book);
    }

    localStorage.setItem('books', JSON.stringify(books)); 
    navigate('/'); 
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 w-50 shadow m-auto p-5 bg-white">
    <h2 className="text-center mb-4">{id ? 'Edit Book' : 'Add New Book'}</h2>

    {/* Title */}
    <div className="form-group mb-3">
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        name="title"
        value={book.title}
        onChange={handleChange}
        required
        className="form-control"
      />
    </div>

    {/* Author */}
    <div className="form-group mb-3">
      <label htmlFor="author">Author</label>
      <input
        type="text"
        id="author"
        name="author"
        value={book.author}
        onChange={handleChange}
        required
        className="form-control"
      />
    </div>

    {/* Genre */}
    <div className="form-group mb-3">
      <label htmlFor="genre">Genre</label>
      <input
        type="text"
        id="genre"
        name="genre"
        value={book.genre}
        onChange={handleChange}
        required
        className="form-control"
      />
    </div>

    {/* Publication Date */}
    <div className="form-group mb-3">
      <label htmlFor="publicationDate">Publication Date</label>
      <input
        type="date"
        id="publicationDate"
        name="publicationDate"
        value={book.publicationDate}
        onChange={handleChange}
        required
        className="form-control"
      />
    </div>

    {/* Publisher */}
    <div className="form-group mb-3">
      <label htmlFor="publisher">Publisher</label>
      <input
        type="text"
        id="publisher"
        name="publisher"
        value={book.publisher}
        onChange={handleChange}
        required
        className="form-control"
      />
    </div>

    {/* Language */}
    <div className="form-group mb-3">
      <label htmlFor="language">Language</label>
      <input
        type="text"
        id="language"
        name="language"
        value={book.language}
        onChange={handleChange}
        required
        className="form-control"
      />
    </div>

    {/* Pages */}
    <div className="form-group mb-3">
      <label htmlFor="pages">Number of Pages</label>
      <input
        type="number"
        id="pages"
        name="pages"
        value={book.pages}
        onChange={handleChange}
        required
        className="form-control"
      />
    </div>

    {/* Image URL */}
    <div className="form-group mb-3">
      <label htmlFor="image">Image URL</label>
      <input
        type="text"
        id="image"
        name="image"
        value={book.image}
        onChange={handleChange}
        required
        className="form-control"
      />
    </div>

    {/* Description */}
    <div className="form-group mb-3">
      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        name="description"
        value={book.description}
        onChange={handleChange}
        required
        rows="4"
        className="form-control"
      ></textarea>
    </div>

    {/* Submit Button */}
    <div className="text-center">
      <button type="submit" className="btn btn-primary">
        {id ? 'Update Book' : 'Add Book'}
      </button>
    </div>
  </form>
  );
};

export default BookForm;
