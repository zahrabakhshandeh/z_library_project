import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const BooksGrid = ({ books }) => {
  return (
    
    <Grid container spacing={2}>
      {books.map((book, index) => (
        <Grid item xs={12 / 5} sm={12 / 5} md={12 / 5} key={index}>
          <Paper>
            {/* Replace "https://example.com" with the actual URL you want the image to link to */}
            <a href="https://example.com" target="_blank" rel="noopener noreferrer">
              <Link to={`/book/${book._id}`}>
                <img
                  src={book.url}  // Assuming your image URL is in img_url
                  alt={book.title}
                  style={{ width: '100%', height: 'auto' }}
                />
              </Link>
            </a>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default BooksGrid;
