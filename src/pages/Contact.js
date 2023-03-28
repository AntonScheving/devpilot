import React from 'react'
import Navbar from '../Components/Navbar';
import ContactForm from "../Components/ContactForm";
import Box from "@mui/material/Box";
import Footer from '../Components/Footer';



const Contact = () => {
  return (
    <>
      <Navbar />
      <div>Contact</div>
    
      <Box sx={{ py: 20, bgcolor: "#E9EAEC" }}>
        <Box sx={{ m: "20px", bgcolor: "#ffffff" }}>
          <ContactForm />
        </Box>
      </Box>
      <Footer />
    </>
  );
}

export default Contact;