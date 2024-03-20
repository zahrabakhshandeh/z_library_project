import React, { useState, useRef, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Link from '@mui/material/Link';
import { CssBaseline } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'; // <-- Add this line
import IconButton from '@mui/material/IconButton'; // <-- Add this line
import SearchIcon from '@mui/icons-material/Search'; // <-- Add this line
import MenuIcon from '@mui/icons-material/Menu'; // <-- Add this line
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'; // Placeholder for the custom arrow icon
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'; // Generic placeholder for other custom icons
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import ListIcon from '@mui/icons-material/List';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import IosShareIcon from '@mui/icons-material/IosShare';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import BookIcon from '@mui/icons-material/Book';

const Header = () => {
  const [menuHeight, setMenuHeight] = useState('0px');
  const appBarRef = useRef(null);

  // Toggle the menu's expansion
  const toggleMenu = () => {
    setMenuHeight(menuHeight === '0px' ? '300px' : '0px');
  };

  // Determine the height of the AppBar to position the menu directly below it
  const [appBarHeight, setAppBarHeight] = useState('0px');
  useEffect(() => {
    if (appBarRef.current) {
      setAppBarHeight(`${appBarRef.current.clientHeight}px`);
    }
  }, []);
 
 const listItemHoverStyle = {
    '&:hover': {
      color: '#49AFD0',
      '.MuiSvgIcon-root': { color: '#49AFD0' },
    },
    textDecoration: 'none',
  };

  const flexStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const iconeStyle = {
    color: '#49AFD0',
    mr: 2, 
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={0} ref={appBarRef}>
        <Toolbar sx={{ minHeight: '48px', padding: '0px' }}>
          <Box display="flex" flexGrow={1} alignItems="center">
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
          <Button color="inherit">Sign In</Button>
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton edge="end" color="inherit" aria-label="menu" onClick={toggleMenu}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {/* Expanding menu */}
     <Box
        sx={{
          width: '100%',
          height: menuHeight,
          position: 'absolute',
          top: appBarHeight,
          left: 0,
          transition: 'height 0.3s ease',
          overflow: 'hidden',
          zIndex: 1200,
          display: 'flex',
          flexDirection: 'row', // Align children in a row
        }}
      >
         <Box sx={{
    width: '15%',
    textAlign: 'left',
    color: 'white',
    backgroundColor: '#49AFD0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: '1rem', // Adjust padding as needed
  }}>
    <Typography sx={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem', fontSize: '1.5rem' }}>
  <Link href="/signin" sx={{ textDecoration: 'underline', color: 'inherit', display: 'flex', alignItems: 'center', fontSize: '1.25rem' }}>
    Sign In
  </Link>
</Typography>
    <Typography variant="caption" sx={{ marginBottom: '1rem' }}>
      to access more features
    </Typography>
    <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
      <ArrowForwardIcon sx={{ fontSize: '1rem', marginRight: '0.25rem' }} />
      personal recommendations
    </Typography>
    <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' , marginBottom: '0.5rem'}}>
      <ArrowForwardIcon sx={{ fontSize: '1rem', marginRight: '0.5rem' }} />
      Telegram Bot
    </Typography>
    <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' , marginBottom: '0.5rem'}}>
      <ArrowForwardIcon sx={{ fontSize: '1rem', marginRight: '0.5rem' }} />
      download history
    </Typography>
    <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' , marginBottom: '0.5rem'}}>
      <ArrowForwardIcon sx={{ fontSize: '1rem', marginRight: '0.5rem' }} />
      send to Email or Kindle
    </Typography>
    <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' , marginBottom: '0.5rem'}}>
      <ArrowForwardIcon sx={{ fontSize: '1rem', marginRight: '0.25rem' }} />
      manage booklists
    </Typography>
    <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' , marginBottom: '0.5rem'}}>
      <ArrowForwardIcon sx={{ fontSize: '1rem', marginRight: '0.25rem' }} />
      save to favorites
    </Typography>
  </Box>

        {/* Part 2 - Explore */}
        <List sx={{ width: '20%', backgroundColor: 'white' }}>
          <ListItem sx={{...listItemHoverStyle}}>
            <div style={{...flexStyle}}> {/* Corrected to apply flex layout */}
              <HourglassEmptyIcon sx={{ color: '#49AFD0', mr: 2 }}/> {/* mr for margin-right to add padding */}
              <ListItemText primary="Book Requests" />
            </div>
          </ListItem>
        </List>

        <List sx={{ width: '20%', backgroundColor: 'white' }}>
          {/* ... Use actual icon components for your icons */}
         <ListItem button component="a" href="users/zrecommended" sx={{...listItemHoverStyle}}>
            <div style={{...flexStyle}}>
              <StarBorderIcon sx={{ color: '#49AFD0', mr: 2 }}/>
            </div>
          <ListItemText primary="Z-Recommend" />
        </ListItem>

          <ListItem button component="a" href="/booklists" sx={{...listItemHoverStyle}}>
            <div style={{...flexStyle}}>
              <TurnedInNotIcon sx={{ color: '#49AFD0', mr: 2 }}/>
            </div>
            <ListItemText primary="Booklists" />
          </ListItem>
          <ListItem button component="a" href="/popular" sx={{...listItemHoverStyle}}>
            <div style={{...flexStyle}}>
              <WhatshotIcon sx={{ color: '#49AFD0', mr: 2 }}/>
            </div>
            <ListItemText primary="Most Popular" />
          </ListItem>
          <ListItem button component="a" href="/categories" sx={{...listItemHoverStyle}}>
            <div style={{...flexStyle}}>
              <ListIcon sx={{ color: '#49AFD0', mr: 2 }}/>
            </div>
            <ListItemText primary="Categories" />
          </ListItem>
        </List>

       {/* Part 3 - Contribution */}
        <List sx={{ width: '20%', backgroundColor: 'white', padding: '1rem' }}>
          <ListItem button component={Link} href="/how-to-donate" sx={{...listItemHoverStyle}}>
            <div style={{...flexStyle}}>
              <LocalAtmIcon sx={{ color: '#49AFD0', mr: 2 }}/>
            </div>
            <ListItemText primary="Donate" />
          </ListItem>
          <ListItem button component={Link} href="/book-add" sx={{...listItemHoverStyle}}>
            <div style={{...flexStyle}}>
              <IosShareIcon sx={{ color: '#49AFD0', mr: 2 }}/>
            </div>
            <ListItemText primary="Uploads" />
          </ListItem>
          <ListItem button component={Link} href="/testimonials" sx={{...listItemHoverStyle}}>
            <div style={{...flexStyle}}>
              <HourglassEmptyIcon sx={{ color: '#49AFD0', mr: 2 }}/>
            </div>
            <ListItemText primary="Share your story" />
          </ListItem>
        </List>
           {/* Part 4 - Interlibrary */}
        <List sx={{ width: '25%', backgroundColor: 'white', padding: '1rem' }}>
          <ListItem button component={Link} href="/inter-library" sx={{...listItemHoverStyle}}>
            <div style={{...flexStyle}}>
              <BookIcon sx={{ color: '#49AFD0', mr: 2 }}/>
            </div>
            <ListItemText primary="Donate paper books to InterLibrary" />
          </ListItem>
          <ListItem button component={Link} href="/books-offline" sx={{...listItemHoverStyle}}>
            <div style={{...flexStyle}}>
              <ImportContactsIcon sx={{ color: '#49AFD0', mr: 2 }}/>
            </div>
            <ListItemText primary="Add paper books to InterLibrary" />
          </ListItem>
        </List>

      
      </Box>
    </>
  );
};

export default Header;