import React from 'react'
import style from './Footer.module.css'

export default function Footer() {
  return <>
    <footer>
        <div className={`${style.footerUpper} p-5`}>
            <div className={` text-white p-3 container d-flex justify-content-between`}>
            <div>
                <h2>LOCATION</h2>
                <h5>2215 John Daniel Drive</h5>
                <h5>Clark, MO 65243</h5>
            </div>
            <div className='text-center'>
                <h2>AROUND THE WEB</h2>
                <div className="d-flex justify-content-center">
                <div className={`${style.icon} ms-1`}><i class="fa-brands fa-facebook-f"></i></div>
                <div className={`${style.icon} ms-1`}><i class="fa-brands fa-twitter"></i></div>
                <div className={`${style.icon} ms-1`}><i class="fa-brands fa-linkedin-in"></i></div>
                <div className={`${style.icon} ms-1`}><i class="fa-solid fa-globe"></i></div>
                </div>
                </div>
            
            <div>
                <h2>ABOUT FREELANCER</h2>
                <p className='text-center'>Freelance is a free to use,<br></br> licensed Bootstrap theme created by Route</p>
            </div>
            </div>
        </div>

        <div className= {`text-center py-2 text-white ${style.footerBottom}`} > 
            <p>Copyright © Your Website 2021</p>
        </div>
    </footer>
  </>
}
