import React from 'react'
import "./main.css"
export default function CardPost({children}) {
  return (
    <div className="container">
        <section className="post__list">
            <div className="post__card zoom">
                <p className="post__category">React JS</p>
                <h2 className="post__title">How to Display an Image Picker in Swift</h2>
                <p className="post__subtitle">In this tutorial, I'm going to show you how you can add an image picker component on your iOS apps using UIImagePickerController, a view…</p>
            </div>
            <div className="post__card zoom">
                <p className="post__category">React JS</p>
                <a className='post__title' href="#">How to Display an Image Picker in Swift</a>
                <p className="post__subtitle">In this tutorial, I'm going to show you how you can add an image picker component on your iOS apps using UIImagePickerController, a view…</p>
            </div>
            {children}
        </section>
    </div>


  )
}
