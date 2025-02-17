import { Box, Typography } from '@mui/material'
import React from 'react'
const Market = () => {
  return (
    <>
    <Typography
      variant='h2'
      sx={{
        fontWeight: "500",
        fontSize: "32px",
        textAlign: "center",
        lineHeight: "41px",
        color: "#9A2935",
        padding: "32px 0px",
    }}>
        Market Overview and Trends
    </Typography>

    <Typography
      variant='p'
      sx={{
        fontWeight: "400",
        fontSize: "16px",
        lineHeight: "24px",
        color: "#525252",
        paddingBottom: "32px"
      }}>
         Market overview and trend in this research article will be developed and underlined on the 12 factors stated  by The Green Lodging Trends Report 2024. With the help of these factors will be able to identify key  businesses that are thriving to make a mark in the industry
    </Typography>

    {/* Overview main box */}
    <Box
      sx={{
        padding:{xs:'0px',sm:'28px', md:'0px',lg:'0px',xl:'0px'},
      }}>
        
        {/* inner box one */}
        <Box 
          sx={{
            width: "full",
            display: "flex",
            flexDirection:{sm:'column',xs:'column', md:'row', lg:'row',xl:'row'},
            justifyContent: "space-evenly",
            alignItems: "center",
            marginTop:{xs:'30px',sm:'40px', md:'50px', lg:'0px'},
            gap: "16px",
            padding:{xs:'0px',sm:'0px', md:'24px',lg:'24px',xl:'24px'},
          }}>

            {/* Management box */}
            <Box 
              sx={{
                width:{xs:'280px',sm:'330px', md:'360px',lg:'360px',xl:'360px'},
                height: "224px",
                borderRadius: "12px",
                backgroundColor: "#1BC285",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}>
                <Typography
                  variant='h3'
                  sx={{
                    fontWeight: "400px",
                    fontSize: "20px",
                    lineHeight: "24p",
                  }}>
                      Management and Efficiency
                </Typography>
            </Box>

            {/* Management contant box */}
            <Box
              sx={{
                width:{ sm:'300px', md:'400px', lg: '580px'},
                padding:{xs:'0px', sm:'10px',md:'10px', lg:'40px', xl:'40px'},
              }}>
                <Typography
                variant='p'
                  sx={{
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "#000000",
                    padding: "0px 40px",
                  }}>
                    <hr />
                    Measure and reduce energy use
                    <hr /> 
                    Measure and reduce water use 
                    <hr /> 
                    Identify and reduce waste.
                    <hr /> 
                    Measure and reduce carbon emissions
                    <hr /> 
                </Typography>
            </Box>
        </Box>

        {/* inner box two */}
        <Box 
          sx={{
            width: "full",
            display: "flex",
            flexDirection:{sm:'column',xs:'column', md:'row', lg:'row'},
            justifyContent: "space-evenly",
            alignItems: "center",
            marginTop:{xs:'30px',sm:'40px', md:'50px', lg:'0px'},
            gap: "16px",
            padding:{xs:'0px',sm:'0px', md:'24px',lg:'24px',xl:'24px'},
          }}>

            {/* Planet box */}
            <Box 
              sx={{
                width:{xs:'280px',sm:'330px', md:'360px',lg:'360px',xl:'360px'},
                height: "336px",
                borderRadius: "12px",
                backgroundColor: "#1BC285",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}>
                <Typography
                  variant='h3'
                  sx={{
                    fontWeight: "400px",
                    fontSize: "20px",
                    lineHeight: "24p",
                  }}>
                      Management and Efficiency
                </Typography>
            </Box>

            {/* Management contant box */}
            <Box
              sx={{
                width:{ sm:'300px', md:'400px', lg: '580px'},
                padding:{xs:'0px', sm:'10px',md:'10px', lg:'40px', xl:'40px'},
              }}>
                <Typography
                variant='p'
                  sx={{
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "#000000",
                    padding: "0px 40px",
                  }}>
                    <hr />
                    Linen reuse program
                    <hr /> 
                    No single-use plastic straws or stirrers
                    <hr /> 
                    Replace single use plastic water bottles
                    <hr /> 
                    Green cleaning products
                    <hr /> 
                    Vegetarian options
                    <hr />
                    Replace single use plastic mini toiletry bottles
                    <hr />
                </Typography>
            </Box>
        </Box>

        {/* inner box three */}
        <Box 
          sx={{
            width: "full",
            display: "flex",
            flexDirection:{sm:'column',xs:'column', md:'row', lg:'row'},
            justifyContent: "space-evenly",
            alignItems: "center",
            marginTop:{xs:'30px',sm:'40px', md:'50px', lg:'0px'},
            gap: "16px",
            padding:{xs:'0px',sm:'0px', md:'24px',lg:'24px',xl:'24px'},
          }}>

            {/* Management box */}
            <Box 
              sx={{
                width:{xs:'280px',sm:'330px', md:'360px',lg:'360px',xl:'360px'},
                height: "112px",
                borderRadius: "12px",
                backgroundColor: "#1BC285",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}>
                <Typography
                  variant='h3'
                  sx={{
                    fontWeight: "400px",
                    fontSize: "20px",
                    lineHeight: "24p",
                  }}>
                      People
                </Typography>
            </Box>

            {/* Management contant box */}
            <Box
              sx={{
                width:{ sm:'300px', md:'400px', lg: '580px'},
                padding:{xs:'0px', sm:'10px',md:'10px', lg:'40px', xl:'40px'},
              }}>
                <Typography
                variant='p'
                  sx={{
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "#000000",
                    padding: "0px 40px",
                  }}>
                    <hr />
                    Community benefit
                    <hr /> 
                    Reduce inequalities  
                    <hr /> 
                </Typography>
            </Box>
        </Box>
    </Box>

    <Typography
      variant='p'
      sx={{
        fontWeight: "400px",
        fontSize: "16px",
        lineHeight: "24px",
        paddingTop: "32px",
      }}>
        How can small hotels cope up with the green revolution trends, the factor lies on the size of their operations  and the capacity of the hotel and resort. Lets start with some examples:
        AlpHoliday Dolomiti
    </Typography>
    </>
  )
}

export default Market
