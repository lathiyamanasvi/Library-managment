import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BookListing from './component/BookListing';
import BookDetail from './component/BookDetail';
import BookForm from './component/BookForm';
import { SearchProvider } from './context/SearchContext';

function App() {
  return (
   <SearchProvider>
     <BrowserRouter>
    <div className='bg'>
    <div className="container mx-auto p-4">
      <Routes>
        <Route path="/" element={<BookListing />} />
        <Route path="/book/:id" element={<BookDetail />} />
        <Route path="/add" element={<BookForm />} />
        <Route path="/edit/:id" element={<BookForm />} />
      </Routes>
    </div>
    </div>
  </BrowserRouter>
   </SearchProvider>
  );
}

export default App;
