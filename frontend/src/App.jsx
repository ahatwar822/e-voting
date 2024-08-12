import { createBrowserRouter } from 'react-router-dom'
import './App.css'
import Navbar from './components/shared/Navbar'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'



const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/signup",
    element: <Signup/>
  }

])
function App(){

  return (
    <>
      <h1>This is front end part</h1>
      <Navbar/>
    </>
  )
}

export default App 