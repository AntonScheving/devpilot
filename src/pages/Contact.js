import React from 'react'
import Navbar from '../Components/Navbar';
import ContactForm from "../Components/ContactForm";
import Box from "@mui/material/Box";
import Footer from "../Components/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <Box sx={{ py: 10, bgcolor: "#E9EAEC" }}>
        <Box sx={{ m: "20px", bgcolor: "#333652", borderRadius:5 }}>
          <ContactForm />
        </Box>
      </Box>

      <Footer/>
    </>
  );
}

export default Contact;