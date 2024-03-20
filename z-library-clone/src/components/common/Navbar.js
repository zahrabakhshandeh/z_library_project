import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Link from '@mui/material/Link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import ListIcon from '@mui/icons-material/List';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import Typography from '@mui/material/Typography';
import IosShareIcon from '@mui/icons-material/IosShare';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import BookIcon from '@mui/icons-material/Book';

const Navbar = ({ menuHeight, appBarHeight }) => {
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
  {/* Title directly in the List for a top placement */}
  <Typography sx={{ color: 'gray', marginBottom: 2 , marginLeft: 3}}>PERSONAL</Typography>
  
  {/* List item with icon and text */}
  <ListItem sx={{...listItemHoverStyle}}>
    <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
      <HourglassEmptyIcon sx={{ color: '#49AFD0', mr: 2 }}/>
      <ListItemText primary="Book Requests" />
    </div>
  </ListItem>
</List>


        <List sx={{ width: '20%', backgroundColor: 'white' }}>
          <Typography sx={{ color: 'gray', marginBottom: 2 , marginLeft: 3}}>EXPLORE</Typography>
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
          <Typography sx={{ color: 'gray', marginBottom: 2 , marginLeft: 3}}>COUNTRIBUTION</Typography>
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
          <Typography sx={{ color: 'gray', marginBottom: 2 , marginLeft: 3}}>LITERA LIBRARY</Typography>
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
  );
};

export default Navbar;
