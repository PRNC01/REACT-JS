import { useContext, useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/Theme'
import ThemeBtn from './components/ThemeBtn';
import Card from './components/Card';

function App() {
  const [themeMode, setThemeMode] = useState('light');

  const toggleTheme = () => {
    setThemeMode((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))
    console.log(themeMode);
    
  }

  return (
    <ThemeProvider value={ { themeMode, toggleTheme } }>
      <ThemeBtn />
      <Card />
    </ThemeProvider>
  )
}

export default App
