import React from 'react';
import { Box, IconButton, Typography, SvgIcon } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/MailOutline';
import RedditIcon from '@mui/icons-material/Reddit';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkIcon from '@mui/icons-material/Link';
import { blue, green, red, brown } from '@mui/material/colors';

// Correctly defining the TelegramIcon component

const SocialShare = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mt: 2, mb: 2 }}>
      <Typography sx={{ mr: 1 }}>Share with the world:</Typography>
      {[
        { Icon: FacebookIcon, color: blue[700], label: 'Facebook' },
        { Icon: TwitterIcon, color: blue[300], label: 'Twitter' },
        { Icon: WhatsAppIcon, color: green[500], label: 'WhatsApp' },
        { Icon: TelegramIcon, color: blue[700], label: 'Telegram' },
        { Icon: LinkedInIcon, color: blue[700], label: 'LinkedIn' },
        { Icon: EmailIcon, color: brown[500], label: 'Email' },
        { Icon: LinkIcon, color: '#3df', label: 'Reddit' },
      ].map(({ Icon, color, label }) => (
        <IconButton
          key={label}
          aria-label={label}
          sx={{
            color: '#ffffff',
            backgroundColor: color,
            margin: '0 4px',
            borderRadius: '0',
            width: 19, // Conditional size for Facebook icon
            height: 19, // Conditional size for Facebook icon
            padding: '0.9rem 0.9rem',
            ':hover': {
              backgroundColor: color,
              transform: 'scale(1.1)',
            },
            transition: 'transform 0.3s ease-in-out',
          }}
        >
          <Icon />
        </IconButton>
      ))}
    </Box>
  );
};

export default SocialShare;
