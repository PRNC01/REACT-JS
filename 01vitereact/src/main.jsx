import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
        <h1>CUSTOM APP</h1>
        
    </div>
  )
}

const anotherElement = (
  <a href='https://google.com' target='_blank'>VISIT GOOGLE</a>
)

const anotherUser = 'PRINCE'

const reactElement = React.createElement(
  'a',
  {
    href: "https://google.com",
    target: '_blank'
  },
  'CLICK ME TO VISIT GOOGLE',
  anotherUser
)

createRoot(document.getElementById('root')).render(

  reactElement
    
)
