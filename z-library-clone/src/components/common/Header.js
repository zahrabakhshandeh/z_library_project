import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { CssBaseline, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';  // Import useNavigate instead of useHistory

const Header = ({ onToggleMenu }) => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const navigate = useNavigate();  // Use useNavigate instead of useHistory

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const goToHomePage = () => {
    navigate('/'); // Redirect to the home page
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={0}>
        <Toolbar sx={{ minHeight: '48px', padding: '0px' }}>
          {/* Books Search and Articles Search buttons */}
          <Box
            sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
            onClick={goToHomePage}
          >
            <Box bgcolor="#49AFD0" p={1} borderRadius={1} mr={2} sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="subtitle1" style={{ fontSize: '14px' }} color="common.white" noWrap>
                Books Search
              </Typography>
            </Box>
            <Box bgcolor="#71B82C" p={1} borderRadius={1} sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="subtitle1" style={{ fontSize: '14px' }} color="common.white" noWrap>
                Articles Search
              </Typography>
            </Box>
          </Box>

          <Box display="flex" flexGrow={1} justifyContent="flex-end" alignItems="center">
            {/* Sign In Button */}
            <Button color="inherit">Sign In</Button>

            {/* Search functionality */}
            {isSearchVisible ? (
              <TextField
                autoFocus
                variant="outlined"
                size="small"
                placeholder="Search for title, author, ISBN, publisher, md5.."
                sx={{
                  ml: 1, // Adds margin to the left of the search box
                  width: 380,
                  '& .MuiOutlinedInput-root': {
                    '&.Mui-focused fieldset': {
                      borderColor: '#49AFD0',
                      borderWidth: '0.5px',
                    },
                  },
                }}
                onBlur={() => setIsSearchVisible(false)} // Optionally close search on blur
              />
            ) : (
              <IconButton color="inherit" onClick={toggleSearch}>
                <SearchIcon />
              </IconButton>
            )}
            <IconButton color="inherit" aria-label="menu" onClick={onToggleMenu}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
