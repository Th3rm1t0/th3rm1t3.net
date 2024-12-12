import './App.css'
import { Container, Box, Avatar, Typography } from '@mui/material'

export const App = () => {
  return (
    <>
      <Container>
        <Box id="profile-box">
          <Avatar 
            alt="Profile Icon" 
            src="/path-to-your-image.jpg" 
            sx={{ width: 56, height: 56 }} 
          />
          <Typography variant="body1" textAlign="left" marginLeft="16px">
            
          </Typography>
        </Box>
      </Container>
    </>
  )
}
