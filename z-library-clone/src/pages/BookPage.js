import React, { useState, useEffect } from 'react';
import {IconButton, Collapse, Button} from '@mui/material';
import { Container, Typography, Box, Divider, Grid } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import CommentIcon from '@mui/icons-material/Comment';
import { useParams, Link } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BooksGrid from '../components/books/BooksGrid';


const BookPage = () => {
  const { id } = useParams();
  const [bookData, setBookData] = useState({});
  const [isSummaryExpanded, setIsSummaryExpanded] = useState(false);
  useEffect(() => {
    // Fetch individual book data based on the route parameter
    fetch(`http://127.0.0.1:5000/api/images/${id}`)
      .then(response => response.json())
      .then(data => setBookData(data))
      .catch(error => console.error('Error fetching book details:', error));
  }, [id]);

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

  const [bookDetails, setBookDetails] = useState({});

useEffect(() => {
  fetch(`http://70.34.217.65:5123/api/images/${id}`)
    .then(response => response.json())
    .then(data => {
      // Assuming your API returns a book object with properties like id_, title, desc, etc.
      const { _id, title, desc, img_url,author, img_path, ['IPFS CID']: IPFS_CID, ['IPFS CID blake2b']: IPFS_CID_blake2b,...rest } = data;
      setBookDetails(rest);
    })
    .catch(error => console.error('Error fetching book details:', error));
}, [id]);

  // Toggle the summary text expansion
  const toggleSummaryExpansion = () => {
    setIsSummaryExpanded(!isSummaryExpanded);
  };

  const renderBookDetails = () => {
  // If bookDetails is not yet loaded, render nothing.
  if (!bookDetails) return null;

  // Convert the object to an array of [key, value] pairs for mapping
  const detailsArray = Object.entries(bookDetails);

  // Map over the array to create your UI elements
  return detailsArray.map(([key, value], index) => (
    <Grid item xs={12} sm={6} key={index}>
      <Typography variant="subtitle1">
      <span style={{ color: 'gray' }}>
        {`${key.charAt(0).toUpperCase() + key.slice(1)}:`}
      </span>
      {` ${value}`}
    </Typography>
    </Grid>
  ));
};

const LoginButton = () => {
  const buttonStyles = {
    minWidth: '150px',
    padding: '4px 8px',
    margin: '0px 8px',
    backgroundColor: 'var(--color-white)',
    border: 'solid 1px var(--color-bordergray)',
    borderRadius: '2px',
    cursor: 'pointer', // Add this to make the button cursor change on hover
  };
};

  return (
    <Container maxWidth="lg" sx={{ marginTop: 8, marginBottom: 28 }}>
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
            src={bookData.img_url}
          />
        </Grid>

        {/* Book summary and details container */}
        <Grid item xs={12} md={8}>
          <Typography variant="h4" gutterBottom>{bookData.title}</Typography>
          <Link href="#" underline="hover">{bookData.author}</Link>
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 2, mb: 2 }}>
            {/* Icons and ratings */}
          </Box>
          <Collapse in={isSummaryExpanded} collapsedSize={100}>
            <Typography variant="body1" gutterBottom>{bookData.desc}</Typography>
          </Collapse>
          <Button onClick={toggleSummaryExpansion}>{isSummaryExpanded ? 'Read less' : 'Read more'}</Button>

          {/* Nested Grid for book details in two columns */}
          <Grid container spacing={2} sx={{ mt: 2 }}>
            {renderBookDetails()}
          </Grid>
        </Grid>
      </Grid>

      <Grid container justifyContent="center" sx={{ textAlign: 'center', marginTop: 2 }}>
        <Grid item xs={12}>
          <button
            style={{
              minWidth: '132px',
              minHeight: '38px',
              padding: '4px 8px',
              backgroundColor: 'var(--color-white)',
              border: 'solid 1px var(--color-bordergray)',
              borderRadius: '2px',
              backgroundColor: '#49AFD0',
              color: 'white',
              cursor: 'pointer',
              fontSize: '14px',
            }}
          >
            Log In
          </button>
        </Grid>
      </Grid>

      <Typography variant="h5" sx={{ mb: 2, color: '#49afd0', marginTop: '80px'}}>
         You may be interested in 
      </Typography>
      <Divider sx={{ borderColor: '#49afd0', borderWidth: 1, mb: 4 }} />
      <BooksGrid books={books.slice(0, 15)} />
    </Container>      
  );
};

export default BookPage;
