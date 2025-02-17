import React from 'react'
import Header from '../../Protfolio/Header'
import { Grid, Box, Typography, Button } from "@mui/material";
import Hospitality from './Hospitality';
import Market from './Market';
import HotelOne from './HotelOne';
import HotelTwo from './HotelTwo';
import HotelThree from './HotelThree';
import Footer from '../../Footer/Footer';
import Hero from '../../Hero/Hero';


const explore = () => {
  return (
    <>
        {/* <Hero/> */}
              {/* main box */}
          <Box 
            sx={{
              width: "full",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              margin: "0 auto",
            }}>
      
              {/* outer box */}
               <Box 
                 sx={{
                  maxWidth: "1240px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "16px",
                  marginBottom:"30px",
                  boxShadow: "1px 8px 27px 0px #2D02061F;"
                 }}>
      
                  {/* padding box */}
                  <Box 
                    sx={{
                      padding: "30px 28px",
                    }}>
                      <Hospitality/>
                      <Market/>
                      <HotelOne/>
                      <HotelTwo/>
                      <HotelThree/>
                  </Box>
               </Box>
          </Box>
        {/* <Footer/> */}
    </>
  )
}

export default explore
