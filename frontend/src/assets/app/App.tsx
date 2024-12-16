import './App.css'
import { Box, Fab, Container } from '@mui/material'
import { Profile } from './profile/Profile'
import { useState } from 'react'

export const App = () => {
  const [lang, setLang] = useState<"ja"|"en">("ja")

  const changeLang = () => {
    if (lang === "ja") {
      setLang("en")
    } else {
      setLang("ja")
    }
  }

  return (
    <>
      <Container>
        <Profile lang={lang}/>
      </Container>
      <Box 
        sx={{
          position: 'fixed',
          bottom: 30,
          left: 30,
          zIndex: 1000,
        }}
      >
        <Fab color="primary" aria-label="home" onClick={changeLang}>
          {lang}
        </Fab>
      </Box>
    </>
  )
}
