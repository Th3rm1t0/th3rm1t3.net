import { Link } from 'react-router-dom'
import './App.css'
import { Profile } from './profile/Profile'
import { useState } from 'react'

export const App = () => {
  type attribute = "none" | "timeline" | "skill"
  type languages = "ja" | "en"

  const [lang, setLang] = useState<languages>("ja")


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

  const ChangeAttributeButton = (props: {attr: attribute}) => {
    return (
      <div className='grow py-8 border border-gray-300 bg-white rounded-lg shadow-md'>
        <Link to={"./" + props.attr}>{props.attr}</Link>
      </div>
    )
  }

  return (
    <>
      <div className='flex md:items-center md:justify-center h-screen'>
        <div className='flex-col'>
          <div className='md:w-[800px]'>
            <Profile lang={lang}/>
          </div>
          <div className='flex flex-row px-10 mt-5'>
            <ChangeAttributeButton attr='timeline'/>
            <ChangeAttributeButton attr='skill'/>
          </div>
        </div>
      </div>
      <ChangeLangButton />
    </>
  )
}
