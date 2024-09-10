import './App.css'
import Home from './components/Home'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Registration from './components/Registration'
import { Route,Routes } from 'react-router-dom'

function App() {
 

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/register' element={<Registration/>}></Route>
        <Route path='/home' element={<Home/>}></Route>

      </Routes>
      

    </>
  )
}

export default App
