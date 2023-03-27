import React from 'react'
import { ThemeProvider, Typography, Box} from '@mui/material';

import { useTheme } from '@emotion/react';




  

const Footer = () => {
 
 const theme = useTheme()
  return (
    <ThemeProvider theme={theme}>
    <Box
    sx=
    {{backgroundColor: theme.palette.primary.main,
      padding: '10px',
      height: '50px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      
      
    }}
    
    >
    <Typography variant="h6" fontSize={15} align="center" color={theme.palette.text.secondary}
       gutterBottom>
        &copy; 2023: Made by Anton, Maud & Vinita
      </Typography>
      
    </Box>
    </ThemeProvider>
  )
}

export default Footer;