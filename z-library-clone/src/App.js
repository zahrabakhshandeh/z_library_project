import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/common/Header';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import HomePage from './pages/HomePage';
import BookPage from './pages/BookPage';
import RequestsPage from './pages/RequestsPage';
import CategoriesPage from './pages/CategoriesPage'; // Your CategoriesPage component
import BooksPage from './pages/BooksPage'; // Component for displaying books by category

function App() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };

  return (
    <Router>
      <CssBaseline />
      <Header onToggleMenu={toggleNavbar} />
      {isNavbarVisible && <Navbar />}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/book/:id" element={<BookPage />} />
          <Route path="/book-requests" element={<RequestsPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          {/* Adjusted route for BooksPage to not include :categoryId */}
          <Route path="/books" element={<BooksPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
