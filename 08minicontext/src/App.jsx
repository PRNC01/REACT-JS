import './App.css'
import UserContextProvider from './context/UsercontextProvider'
import Login from '../src/components/Login'
import Profile from '../src/components/Profile'


function App() {

  return (
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
