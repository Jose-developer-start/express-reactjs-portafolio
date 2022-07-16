import React from 'react'
import joseIMG from "../images/josedeodanes.jpg"
import "./main.css"
export default function Header({title,subtitle,img}) {
  return (
    <div className="header">
        <div className="container">
            <div className="header__content">
                { img ? 
                <div className="header__right-picture">
                    <div className="header__image">
                        <img className='header__picture' src="https://res.cloudinary.com/ddfsqcy12/image/upload/v1657726159/portafolio/josedeodanes_xshiwi.png" alt="" />
                    </div>
                </div>
                : <div></div>
                }
                <h1 className='title-h1'>{title}</h1>
                <p className='text'>{subtitle}</p>
            </div>
        </div>
    </div>
  )
}
