import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <AppBar position="static" color="default" component="footer" sx={{ top: 'auto', bottom: 0 }}>
      <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="body1" color="inherit" sx={{ flexGrow: 1 }}>
            Z-Library Since 2009
          </Typography>
          <Typography variant="body1" component="a" href="mailto:support@z-lib.se" color="inherit">
            support@z-lib.se
          </Typography>
          {/* Add more links as needed */}
          <IconButton component={Link} to="/faq">
            FAQ
          </IconButton>
          <IconButton component={Link} to="/blog">
            Blog
          </IconButton>
          {/* Social Media Icons */}
          <IconButton component="a" href="https://twitter.com" target="_blank" color="inherit">
            <TwitterIcon />
          </IconButton>
          <IconButton component="a" href="https://facebook.com" target="_blank" color="inherit">
            <FacebookIcon />
          </IconButton>
          <IconButton component="a" href="https://youtube.com" target="_blank" color="inherit">
            <YouTubeIcon />
          </IconButton>
          {/* Add more social media icons as needed */}
          <Typography variant="body1" component={Link} to="/terms" color="inherit">
            Terms
          </Typography>
          <Typography variant="body1" component={Link} to="/dmca" color="inherit">
            DMCA
          </Typography>
          <Typography variant="body1" component={Link} to="/our-mission" color="inherit">
            Our Mission
          </Typography>
          {/* Language Selector or other elements */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;
