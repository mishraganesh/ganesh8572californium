import './Navbar.css'
import {Link} from 'react-router-dom'
import {CgProfile} from 'react-icons/cg'
import {FaBars} from 'react-icons/fa'
import { IoAirplane } from "react-icons/io5";
import { IoHomeSharp } from "react-icons/io5";
import {useState} from 'react'

function Navbar() {
    const[show, setShow ] = useState(true)
    
    function toggle() {
        setShow(!show)
    }  
return(
    <div  >
       {show ?  <span className='bar' onClick={toggle}><FaBars /> </span> :  <span className='bar' ><FaBars /> </span>}
     
      <nav className='mainComponent'>
     
      <ul className='buttons'>
         
         
          <Link className='linker' to='/' >< IoHomeSharp/ ></Link>
          <Link className='linker' to='/register'>Register</Link>
          <Link className='linker' to= '/login'>Login</Link>
          <Link className='linker' to= '/about'>About</Link>

          {/* <label className='profileIcon' to='/About' >About us  </label> */}
         
      </ul>
      </nav>
    </div>
)
}
export default Navbar

