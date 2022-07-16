import React from 'react'
import "./../main.css"
import "./contact.css"
export default function Information() {
  return (
    <div className="contact">
        <div className="container">
            <div className="contact__content">
                <p className="contact__description">Si tiene alguna pregunta, no dude en ponerse en contacto conmigo por correo electrónico o una de estas cuentas sociales. Puedes escribirme en español y ingles.</p>

                <div className="contact__redes">
                    <p>Encuéntrame en la web:</p>
                    <ul>
                        <li><b>Email: </b>josedeodanes99@gmail.com</li>
                        <li><b>Telegram: </b><a href="#">@noscriptsh</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
