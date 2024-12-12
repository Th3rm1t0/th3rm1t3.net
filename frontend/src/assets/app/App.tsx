import './App.css'
import { Container } from '@mui/material'
import { Profile } from './profile/Profile'
import { useState } from 'react'

export const App = () => {
  const [lang, _] = useState<"ja"|"en">("ja")
  return (
    <>
      <Container>
        <Profile lang={lang}/>
      </Container>
    </>
  )
}
