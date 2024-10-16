import { useState } from 'react'

function App() {

  let [Counter, setCounter] = useState(0)

  // let Counter = 5

  const addValue = () => {
    if (Counter == 0) {
      setCounter(Counter - 1)
    }
  }

  const removeValue = () => {
    if (Counter == 0) {
      setCounter(Counter - 1)
    }
  }

  return(
    <>
      <h1>PRINCE</h1>
      <h1>COUNTER VALUE : {Counter}</h1>
      <button onClick={addValue}>ADD VALUE</button>
      <br/>
      <button onClick={removeValue}>REMOVE VALUE</button>
    </>
  )

}

export default App
