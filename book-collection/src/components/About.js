import React from 'react'
import { Box, Typography } from '@mui/material'
const About = () => {
  return (
    <div>
        <Box display="flex" flexDirection="column" alignItems="center">
         <Typography sx={{fontFamily:"fantasy"}}variant="h2">This is a CRUD Operation</Typography>
         <Typography sx={{fontFamily:"fantasy"}} variant="h3">By MERN Stack</Typography>
        </Box>
    </div>
  )
}

export default About