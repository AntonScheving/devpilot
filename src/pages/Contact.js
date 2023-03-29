import React from 'react'
import Navbar from '../Components/Navbar';
import ContactForm from "../Components/ContactForm";
import Box from "@mui/material/Box";
import Footer from "../Components/Footer";


const Contact = () => {
  return (
    <div>
      <Box
        sx={{
          display: "grid",
          minHeight: "100vh",
          gridTemplateRows: "1fr auto",
        }}
      >
        <Box>
          <Box>
            <Navbar />
          </Box>
          <Box sx={{ py: 10, bgcolor: "#E9EAEC", height: "100%" }}>
            <Box
              sx={{
                m: "20px",
                bgcolor: "#333652",
                borderRadius: 5,
              }}
            >
              <ContactForm />
            </Box>
          </Box>
        </Box>
        <Footer />
      </Box>
    </div>
  );
}

export default Contact;