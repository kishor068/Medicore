import React from 'react'
import { Link } from 'react-router-dom'
import css from '../Pages/Home.module.css'
import logo from '../Images/logo5.png'
const Nav2 = () => {
  return (
    <div>
       <nav className={css.navMain}>
    <h1 className={css.medical}><img src={logo} alt="ERR" height="70px" width="400px"/></h1>
    <Link to="/">
      <button className={css.button}>LogOut</button>
    </Link>
  </nav>
    </div>
  )
}

export default Nav2
