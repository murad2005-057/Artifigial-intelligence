import React, { useRef } from 'react'
import '../App.css'
import './Navbar.css'
import Button from './Button'
import logo from '../assets/images/logo.svg'
import { AiOutlineBars } from "react-icons/ai";
import { GiCrossedSwords } from "react-icons/gi";

const Navbar = () => {
const overlayinRefi=useRef()
// overlayinRefi.current

  const menyunuAc = e=> {
if(e.target.classList.contains('menyunuAc')){
  overlayinRefi.current.classList.add('aktiv')
  }
  }
  const menyuBagla=e=>{
    if(e.target.classList.contains('cross-icon')){
      overlayinRefi.current.classList.remove('aktiv')
      }
  }
  return (
    <>
      <div className="overlay" ref={overlayinRefi}>
        {/* <button className='cross-icon'></button> */}
        <GiCrossedSwords  className='cross-icon'onClick={menyuBagla}/>
       
      </div>
      <div> <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img src={logo} alt="" /></a>
          <button onClick={menyunuAc} className="navbar-toggler menyunuAc"  >
            <AiOutlineBars className='bars-icon' />

          </button>
         
        </div>
      </nav></div>
    </>

  )
}

export default Navbar