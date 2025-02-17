import { Box, Typography } from '@mui/material'
import React from 'react'
import hotel1 from '../../../Assets/images/hotel-image-one.png'
const HotelOne = () => {
  return (
    <>
    <Typography
      variant='h2'
      sx={{
        fontWeight: "500px",
        fontSize: "24px",
        lineHeight: "22px",
        paddingTop: "30px",
        color: "#9A2935"
      }}>
        AlpHoliday Dolomiti
    </Typography>

<br />
      {/* Image box */}
      <Box
       sx={{
        borderRadius: "16px", 
       }}>
        <Typography
         component="img"
         src={hotel1}
         alt='hotel image'
         sx={{
            width: '100%'
         }}>
        </Typography>

        {/* content box */}
        <Box 
          sx={{
            paddingTop: "32px",
          }}>
        <Typography
           variant='p'
           sx={{
            fontWeight:"500px",
            fontSize:"16px",
            lineHeight:"24px",
           }}>
            A low environmental impact hotel between the Adamella and Stelvio parks, in Val di Sole, Trentino. Enjoy  the panoramic view of the Brenta Dolomites, the wellness center, the pools, and the free ski bus to the ski  slopes. Alpholiday Dolomiti Wellness & Fun Hotel offers spacious rooms with balcony, private bathroom,  wooden floors, TV and free Wi-Fi internet access. The Alpholiday Hotel offers free bicycles to discover the  surrounding area, and a wellness center with sauna, Turkish bath, jacuzzi, gym and beauty treatments. The  restaurant serves Trentino cuisine, also offering zero kilometer products. 
            Now how is AlpHoliday Dolomiti coping up with green opportunities:
             Bicycle rental service
             Supporting the local economy
             Promoting "eco" activities
             No single dose
             Ecological cleaning products
             Energy saving lights
             Solar thermal panels for hot water
             Water flow reducers
             Recycled paper
             Regional Food
             Hotel Les Pilotes
         </Typography>
         <br />
         <br />
         <Typography
           variant='p'
           sx={{
            fontWeight:"500px",
            fontSize:"16px",
            lineHeight:"24px",  
            }}>
             Now how is AlpHoliday Dolomiti coping up with green opportunities:
         </Typography>

          <Box
          variant='ol'
          sx={{
            paddingTop:"32px",
            fontWeight:"500px",
            fontSize:"16px",
            lineHeight:"24px",    
          }}>1. 
               <Typography 
                 variant='li'
                 sx={{
                   listStyleType:"initial"
                 }}> Bicycle rental service
               </Typography>
               <br />
               2.
               <Typography 
                 variant='li'
                 sx={{
                   listStyleType:"initial"
                 }}> Supporting the local economy
               </Typography>
               <br />
               3.
               <Typography 
                 variant='li'
                 sx={{
                   listStyleType:"initial"
                 }}> Promoting "eco" activities
               </Typography>
               <br />
               4.
               <Typography 
                 variant='li'
                 sx={{
                   listStyleType:"initial"
                 }}> No single dose
               </Typography>
               <br />
               5.
               <Typography 
                 variant='li'
                 sx={{
                   listStyleType:"initial"
                 }}> Ecological cleaning products
               </Typography>
               <br />
               6.
               <Typography 
                 variant='li'
                 sx={{
                   listStyleType:"initial"
                 }}> Energy saving lights
               </Typography>
               <br />
               7.
               <Typography 
                 variant='li'
                 sx={{
                   listStyleType:"initial"
                 }}> Solar thermal panels for hot water
               </Typography>
               <br />
               8.
               <Typography 
                 variant='li'
                 sx={{
                   listStyleType:"initial"
                 }}> Water flow reducers
               </Typography>
               <br />
               9.
               <Typography 
                 variant='li'
                 sx={{
                   listStyleType:"initial"
                 }}> Recycled paper
               </Typography>
               <br />
               10.
               <Typography 
                 variant='li'
                 sx={{
                   listStyleType:"initial"
                 }}> Regional Food
               </Typography>

          </Box>
        </Box>
      </Box>

    </>
  )
}

export default HotelOne
