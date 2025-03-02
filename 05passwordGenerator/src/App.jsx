import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  let [length, setLength] = useState(8);
  let [numberAllowed, setNumberAllowed] = useState(false);
  let [charactersAllowed, setCharatersAllowed] = useState(false)
  let [password, setPassword] = useState("")

  let passwordRef = useRef(null)

  let passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) {
      str += "0123456789"
    }

    if (charactersAllowed) {
      str += "!@#$%^&*()_+-=[]?{}|;:,.<>?`~"
    }

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllowed, charactersAllowed, setPassword])

  let copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charactersAllowed, passwordGenerator])

  return (
    <>
      <h1 className='text-4xl text-center '>Password Generator</h1>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='PASSWORD' readOnly ref={passwordRef}/>
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyPasswordToClipboard}>Copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range" 
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            /> <label> Length : {length}</label>
          </div>

          <div className='flex intems-center gap-x-1'>
          <input 
          type="checkbox"  
          defaultChecked={numberAllowed}
          id='numberInput'
          onChange={() => {
            setNumberAllowed((prev) => !prev)
          }}
          /><label>Number</label>
          <input 
          type="checkbox"  
          defaultChecked={charactersAllowed}
          id='characterInput'
          onChange={() => {
            setCharatersAllowed((prev) => !prev)
          }}
          /><label>Characters</label>
          </div>

        </div>
        
      </div>
    </>
  )
}

export default App
