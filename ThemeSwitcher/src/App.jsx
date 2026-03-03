import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/Themebutton'
import Card from './components/card'

function App() {
  const [themeMode , setThemeMode] = useState("dark")

  const darkTheme = () =>{
    setThemeMode("dark")
  }
  const lightTheme = () =>{
    setThemeMode("light")
  }


  useEffect (()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.documentElement.classList.add(themeMode)

  },[themeMode])

  return (
      <ThemeProvider value={{themeMode , lightTheme , darkTheme}}>

         <div className="flex flex-wrap min-h-screen items-center">
         <div className="w-full">
         <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                          <ThemeBtn/>
         </div>

         <div className="w-full max-w-sm mx-auto">
                  <Card/>
         </div>
         </div>
         </div>
              
    </ThemeProvider>

  )
}

export default App
