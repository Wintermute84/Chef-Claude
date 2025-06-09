import { useState, useEffect } from 'react'
import Header from './components/header.jsx'
import Main from './components/main.jsx'

function App(){
  const [darkMode,setDarkMode] = useState(false)
  
  useEffect(()=>{
    if(darkMode){
      document.documentElement.classList.add("dark")
    }
    else{
      document.documentElement.classList.remove("dark")
    }
  },
  [darkMode]);

  function toggleDarkMode(){
    setDarkMode(prevValue=>!prevValue)
  }

  return (
    <>
      <Header toggle={toggleDarkMode} darkMode={darkMode}/>
      <Main darkMode={darkMode}/>
    </>
  )
}

export default App
