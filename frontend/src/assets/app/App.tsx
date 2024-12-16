import './App.css'
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

  const ChangeLangButton = () => {
    return (
      <div
        className="fixed bottom-8 left-8 z-[1000]"
      >
        <button
          onClick={changeLang}
          className="bg-green-700 h-13 px-5 text-white rounded-full p-4 shadow-lg focus:outline-none hover:bg-green-800"
        >
          {lang === "ja" ? (<><b>ja</b>/en</>) : (<>ja/<b>en</b></>)}
        </button>
      </div>
    )
  }

  return (
    <>
      <div className='container mx-auto'>
        <Profile lang={lang} />
      </div>
      <ChangeLangButton />
    </>
  )
}
