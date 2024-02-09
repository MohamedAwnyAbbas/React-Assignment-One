import React from 'react'
import style from './About.module.css'
export default function About() {
  return <>
    <div className={`${style.about} p-5 text-white`}>
        <h2 className='h1 text-center'>ABOUT COMPONENT</h2>
        <div className={`text-center py-2 ${style.aboutIcon}`}><i className="fa-solid fa-star"></i></div>
        <div className='d-flex container py-4'>
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
    </div>
  </>
}
