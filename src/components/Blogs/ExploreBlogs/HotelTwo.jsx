import { Box, Typography } from '@mui/material'
import React from 'react'
import hotel2 from '../../../Assets/images/hotel-image-two.png'
const HotelTwo = () => {
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
        Hotel Les Pilotes
    </Typography>

<br />
      {/* Image box */}
      <Box
       sx={{
        borderRadius: "16px", 
       }}>
        <Typography
         component="img"
         src={hotel2}
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
            Enjoying an outstanding location in the city center, the hotel Drivers offers an unrivaled view of the Bay. If they are eyeing each to a setting different scene, the 25 rooms are all a vintage spirit: Scottish carpets,  psychedelic or animal, wallpaper and unique paintings, curtains male costume fabrics, Scandinavian  furniture and lamps 60s antique, mosaics glass or porcelain tiles in the bathrooms, lights Gras Matégot ...  Upon arrival, the hotel is so warm that it poses, that it is based, that it soothes.
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
                Now lets deep into Hotel Les Pilotes green strategies:
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
                 }}> Organic or Local Food
               </Typography>
               <br />
               3. Car-free accessibility
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
                 }}> Ecological cleaning products
               </Typography>
               <br />
               5.
               <Typography 
                 variant='li'
                 sx={{
                   listStyleType:"initial"
                 }}> More than 80% waste recycling
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
                 }}> Towel change on request
               </Typography>
               <br />
               8.
               <Typography 
                 variant='li'
                 sx={{
                   listStyleType:"initial"
                 }}>  High efficiency boiler > 90%
               </Typography>
               <br />
               9.
               <Typography 
                 variant='li'
                 sx={{
                   listStyleType:"initial"
                 }}> Water-saving toilets
               </Typography>
          </Box>
        </Box>
      </Box>

    </>
  )
}

export default HotelTwo
