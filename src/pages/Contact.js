import React from 'react'
import Navbar from '../Components/Navbar';
import ContactForm from "../Components/ContactForm";
import Box from "@mui/material/Box";

const Contact = () => {
  return (
    <>
      <Navbar />
      <Box sx={{ pt: 20 }}>
        <ContactForm />
      </Box>
    </>
  );
}

export default Contact;