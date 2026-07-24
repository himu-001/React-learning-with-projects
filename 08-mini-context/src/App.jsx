import UserContextProvider from './context/UserContextProvider'
import './App.css'
import Login from './Component/Login'
import Profile from './Component/Profile'

function App() {
  return (
    <UserContextProvider>
      <h1>Hello React Dev</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
