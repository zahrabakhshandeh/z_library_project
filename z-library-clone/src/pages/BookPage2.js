import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Grid, Typography, Box, Button } from '@mui/material';

const BookPage = () => {
  const { id } = useParams();
  const [bookData, setBookData] = useState({});

  useEffect(() => {
    // Fetch individual book data based on the route parameter
    fetch(`http://127.0.0.1:5000/api/images/65e104ca0e4afb49a7778f04`)
      .then(response => response.json())
      .then(data => setBookData(data))
      .catch(error => console.error('Error fetching book details:', error));
  }, [id]);

  const renderBookDetails = () => {
    // If bookData is not yet loaded, render nothing.
    if (!bookData) return null;

    // Convert the object to an array of [key, value] pairs for mapping
    const detailsArray = Object.entries(bookData);

    // Map over the array to create your UI elements
    return detailsArray.map(([key, value], index) => (
      <Grid item xs={12} sm={6} key={index}>
        <Typography variant="subtitle1">
          {`${key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}: ${value}`}
        </Typography>
      </Grid>
    ));
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        {/* Book cover image */}
        <Grid item xs={12} md={4}>
          <Box
            component="img"
            sx={{
              width: '100%',
              height: 'auto',
            }}
            alt={bookData.title}
            src={bookData.img_url}  // Assuming your image URL is in img_url
          />
        </Grid>

        {/* Book summary and details container */}
        <Grid item xs={12} md={8}>
          <Typography variant="h4" gutterBottom>{bookData.title}</Typography>
          <Link to={`/author/${bookData.author}`} underline="hover">
            <Typography variant="subtitle1">{bookData.author}</Typography>
          </Link>
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 2, mb: 2 }}>
            {/* Icons and ratings */}
          </Box>
          <Typography variant="body1" gutterBottom>{bookData.description}</Typography>

          {/* Nested Grid for book details in two columns */}
          <Grid container spacing={2} sx={{ mt: 2 }}>
            {renderBookDetails()}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BookPage;
