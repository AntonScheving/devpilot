import React from 'react'
import { useState } from "react";
import { TextField, Box, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { CustomButton } from "../common/CommonButton/CustomButton";

const ContactForm = () => {
  const theme = useTheme();

  // initialize the form data with default values using state hook
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    cv: null,
  });

  // handle change function to update the form data on user input
    const handleChange = (e) => {
      // destructure the properties from the event target
      const { name, value, files } = e.target;
      // update the form data using the previous data and the new input value
      setFormData((prevData) => ({
        ...prevData,
        [name]: files ? files[0] : value,
      }));
    };

  // handle submit function to save the form data and clear the inputs
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("devpilotFormData", JSON.stringify(formData));
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      cv: null,
    });
  };

  // return the form UI, with responsivness added
  return (
    <Box component="form" onSubmit={handleSubmit} sw={{ margin: 4 }}>
      <style>
        {`@media (min-width: 768px) {
    form {
      width: 33%;
      margin: 0 auto;
    }
  }
  `}
      </style>
      <Typography
        variant="h2"
        color={theme.palette.text.tertiary}
        // backgroundColor={theme.palette.primary.main}
        fontWeight={300}
      >
        Contact Us
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        color={theme.palette.text.tertiary}
        // backgroundColor={theme.palette.primary.main}
      >
        Fill in the form below to receive more information about DevPilot.
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} sx={{ mx: 2 }}>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            required
            InputProps={{
              style: { backgroundColor: "#FFFFFF" },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={12} sx={{ mx: 2 }}>
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            required
            InputProps={{
              style: { backgroundColor: "#FFFFFF" },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={12} sx={{ mx: 2 }}>
          <TextField
            label="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            fullWidth
            required
            InputProps={{
              style: { backgroundColor: "#FFFFFF" },
            }}
          />
        </Grid>

        <Grid item xs={12} sx={{ mx: 2 }}>
          <TextField
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            multiline
            rows={4}
            fullWidth
            required
            InputProps={{
              style: { backgroundColor: "#FFFFFF" },
            }}
          />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <CustomButton
          type="submit"
          variant="contained"
          style={{ margin: "20px" }}
        >
          Submit
        </CustomButton>
      </Grid>
    </Box>
  );
};

export default ContactForm