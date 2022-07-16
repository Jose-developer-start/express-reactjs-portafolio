import React from 'react'
import "./main.css"
export default function Footer() {
  return (
    <footer className="footer">
        <div className="container">
            <div className="footer__content">
                <a className='footer__title' href="/">José Deodanes © 2022</a>
                <div className="footer__items">
                    <a href="" className="footer__links"><i className="fa-brands fa-github"></i></a>
                    <a href="#" className="footer__links"><i className="fa-brands fa-youtube"></i></a>
                    <a href="#" className="footer__links"><i className="fa-brands fa-telegram"></i></a>
                </div>
            </div>
        </div>
    </footer>
  )
}
