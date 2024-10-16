import Hello from "./hello"
function App() {
  const UserName = 'PRINCE'
  return (
    // IN REAC T WE CAN ONLY USE ONE TAG THIS IS THE RULE OF .jsx 
    // SO IF YOU WANT TO USE MULTIPLE TAG USE VRAPE THEM INSIDE A SINGLE EMPTY TAG KNOW AS FREGMENT(<></>)
        
    // THIS IS FREGMENT TAG
    <>
      <Hello/>
      <h3>THIS IS REACT USING VITE BY {UserName}</h3>
    </>
  )
}

export default App
