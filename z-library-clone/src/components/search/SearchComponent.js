import React from 'react';
import { Box, TextField, Button } from '@mui/material';

const SearchComponent = () => {
  // Add your search handling logic here

  return (
    <Box sx={{ mb: 4 }}>
      <TextField fullWidth label="Search for title, author, ISBN, publisher, md5..." variant="outlined" />
      <Button variant="contained" color="primary" sx={{ mt: 1 }}>
        Search
      </Button>
    </Box>
  );
};

export default SearchComponent;
