import React from 'react'

export default function VideoCard({children}) {
  return (
    <section className="videocard">
        <div className="container">
            <div className="videocard__content">
                <div className="videocard__row">
                    <div className="videocard__items zoom">
                        <div className="videocard__img">
                            <img src="https://www.reactnativeschool.com/static/636cf0b19e97a23d9a9e9755109953c2/87706/lesson-fallback.png" alt="portada de video" />
                        </div>
                        <div className="videocard__body">
                            <a href="#" className="videocard__title">Express & Mongoose</a>
                            <p className="videocard__subtitle">Learn how to build a RESTful API with Express and Mongoose with CRUD functionalities.</p>
                        </div>
                    </div>
                    <div className="videocard__items zoom">
                        <div className="videocard__img">
                            <img src="https://www.reactnativeschool.com/static/636cf0b19e97a23d9a9e9755109953c2/87706/lesson-fallback.png" alt="portada de video" />
                        </div>
                        <div className="videocard__body">
                            <a href="#" className="videocard__title">Express & Mongoose</a>
                            <p className="videocard__subtitle">Learn how to build a RESTful API with Express and Mongoose with CRUD functionalities.</p>
                        </div>
                    </div>
                </div>
                {children}
            </div>
        </div>
    </section>
  )
}
