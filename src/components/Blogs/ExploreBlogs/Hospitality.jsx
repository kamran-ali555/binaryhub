import { Box, Typography } from '@mui/material'
import React from 'react'

const Hospitality = () => {
  return (
    <>
    <Box 
    sx={{
      width: "full",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}>
           <Typography 
             variant='h2' 
             sx={{
                 fontWeight: "500",
                 fontSize: "32px",
                 textAlign: "center",
                 lineHeight: "41px",
                 color: "#9A2935",
                 paddingTop: "32px",
                 maxWidth: "650px"
             }}>
                 The Green Revolution in Hospitality:  Eco-Friendly Shifts in Small Hotels and  Resorts?
           </Typography>
           
           <Box
             sx={{
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "24px",
              color: "##525252",
              paddingTop: "32px"
             }}>
           <Typography 
             variant='p'
             sx={{
              paddingTop:"32px",
             }}>
                The hospitality industry having a market size of 4.3 trillion dollars (2023) contributes to 8% of the total  greenhouse gases and 21% of the total carbon footprint. Due to complex size, rigid organizational  structures, and slow innovation growth, the adoption of new trends and compliance with government  regulations cost a lot of capital and take a sizeable time for implementation. The adoption trends are pretty  visible in the large industry but are being adopted at a really slow pace in the small and medium sectors. This study article mainly incorporates those in the small and medium within the industry as the adoption of  change is much faster due to their relatively small size and a less complex structure of hierarchy. Why small and medium sectors are finding it very hard to accept the change in this industry? The reason  can be summarized as:
           </Typography>

         <Box
             variant='ul'
             sx={{
              paddingTop:"32px",
             }}>
              1.
            <Typography
              variant='li'>
                 Lack of knowledge about the sustainability sector.
            </Typography>
            <br />
              2.
            <Typography
              variant='li'>
                 The burden of extra cost in the transition.
            </Typography>
            <br />
              3.
            <Typography
              variant='li'>
                 Lack of guidance in overcoming the obstacle of transition.
            </Typography>
            <br />
            4.    
            <Typography
              variant='li'>
                  The transition of the business model will impact the quality of services and products, which may  impact their client turnover.
            </Typography>
         </Box>

         <Box
             variant='p'
             sx={{
              paddingTop:"32px",
              paddingBottom:"32px",
             }}>
              Through the transition of business towards a more sustainable approach, making relevant policies and  creating an experience that stands out is a huge factor at the middle and the bottom of the industry. But  some are trying to thrive with little to no resources. The approaches to lay down a good foundation for  future trends are:
         </Box>

         <Typography
           variant='ol'
           sx={{
            paddingTop:"32px",
           }}>
            1.
             <Typography
              variant='li'>
                 Design Thinking Approach
             </Typography>
             <br />
            2.
             <Typography
              variant='li'>
                 Energy Efficiency approach
             </Typography>
             <br />
            3.
             <Typography
              variant='li'>
                 Waste Management and Reduction Approach
             </Typography>
             <br />
            4.
             <Typography
              variant='li'>
                 Water Conservation Approach
             </Typography>
             <br />
            5.
             <Typography
              variant='li'>
                 Sustainable experience approach
             </Typography>
         </Typography>
             

           </Box> 
           </Box>     
    </>
  )
}

export default Hospitality
