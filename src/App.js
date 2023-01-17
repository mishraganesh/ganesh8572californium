import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import About from './components/About';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='register' element={<Register />} ></Route>
        <Route path='login' element={<Login />} ></Route>
        <Route path='about' element={<About />} ></Route>
            

      </Routes>
    </div>
  )
}

export default App;
