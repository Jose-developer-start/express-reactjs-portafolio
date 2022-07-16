import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import "./main.css"
export default function Navigation() {
    const [activeMenu,setActiveMenu] = useState();
    const [stateMenu,setStateMenu] = useState(true);
    const [menuBar,setMenuBar] = useState();
    const isOpenMenu = ()=>{
        if(stateMenu){
            setActiveMenu('is-active')
            setMenuBar('active')
            setStateMenu(false)
        }else{
            setActiveMenu('')
            setStateMenu(true)
            setMenuBar('')
        }
    }
  return (
    <nav className="navbar">
        <div className="container navbar__container">
            <Link to={'/'} className="navbar__logo">JOSE <span>DEV</span></Link>
            <div onClick={isOpenMenu} className={`navbar__toggle  ${menuBar}`} id="mobile">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            <ul className={`navbar__menu ${activeMenu}`}>
                <li className="navbar__items">
                    <Link to={'/'} className="navbar__links" >Home</Link>
                </li>
                <li className="navbar__items">
                    
                    <Link to={'/blog'} className="navbar__links" >Blog</Link>
                </li>
                <li className="navbar__items">
                    
                    <Link to={'/contact'} className="navbar__links" >Contact</Link>
                </li>
                <li className="navbar__items">
                    
                    <Link to={'/about'} className="navbar__links" >About</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}