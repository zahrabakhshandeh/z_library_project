import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Divider, Grid } from '@mui/material';
import SearchComponent from '../components/search/SearchComponent';
import BooksGrid from '../components/books/BooksGrid';
import SocialShare from '../components/ui/SocialShare';

const HomePage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch data from the Flask API
    fetch('http://127.0.0.1:5000/api/images')  // Update the URL to your Flask API endpoint
      .then(response => response.json())
      .then(data => {
        // Assuming your API returns an array of books
        setBooks(data);
      })
      .catch(error => console.error('Error fetching data: ', error));
  }, []);  // Empty dependency array ensures useEffect runs only once on component mount

  console.log(books);
  return (
    <Container maxWidth="lg" sx={{ mt: 8 }}> {/* Top margin of the entire container */}
      {/* Logo with specific size and top margin */}
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', mt: 4 }}>
        <img 
          src="/logo.zlibrary.articles.png" 
          alt="Z-Library Articles Logo" 
          style={{ width: '300px', height: '76.2333px'}}
        />
      </Box>
      
      {/* Warning message with custom styles */}
      <Typography
        variant="body2"
        sx={{
          textAlign: 'center',
          color: '#90A5A8',
          fontWeight: 400,
          padding: '4px 0 15px 0',
          fontStyle: 'italic',
          marginBottom: 2 
        }}
      >
        Your gateway to knowledge and culture. Accessible for everyone. 
      </Typography>

      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center'}}>
        <img
          src="/main_img.png"
          alt="Gateway to Knowledge"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </Box>
      
      {/* SearchComponent on its own line */}
      <Box>
        <SearchComponent />
      </Box>
      
      {/* SocialShare on a new line, aligned to the right */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end'}}>
        <SocialShare />
      </Box>
      
      <Typography variant="h5" sx={{ mb: 2, color: '#49afd0'}}>
        Most Popular
      </Typography>
      
      {/* Divider after Most Popular */}
      <Divider sx={{ borderColor: '#49afd0', borderWidth: 1, mb: 4 }} />

      <BooksGrid books={books.slice(0, 22)} />
      
      <Box sx={{ height: 50 }} /> {/* Margin before Footer */}
    </Container>
  );
};

export default HomePage;
