import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import style from './Navbar.module.css'

export default function Navbar() {
    function changeBackGround(eInfo){
        let y = eInfo.target;
        y.classList.add(style.bgMain)
        if(y.classList.contains(`active`)==false)
        {
            y.classList.remove(style.bgMain)
        }
    }
  return <>
    <nav class="navbar navbar-expand-lg py-4">
  <div class="container">
    <a class="navbar-brand text-white text-bold h1" href="#">START FRAMEWORK</a>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <NavLink className={`${style.link} nav-link active text-white`} aria-current="page" to={'about'} onClick={changeBackGround}>ABOUT</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className={`${style.link} nav-link text-white`} to={'portofolio'} onClick={changeBackGround}>PORTOFOLIO</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className={`${style.link} nav-link text-white`} to={'contact'} onClick={changeBackGround}>CONTACT</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </>
}
