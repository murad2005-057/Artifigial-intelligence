import './Button.css'
import React from 'react'
import playIcon from '../assets/images/play.svg'

const Button = ({butonunIcindekiDeyer,klassAdi,icon}) => {
  // console.log(props.butonunIcindekiDeyer)
  return (
    <button className={klassAdi}>{icon && <img src={playIcon} className='play-icon'/>}{butonunIcindekiDeyer}</button>
  )
}

export default Button