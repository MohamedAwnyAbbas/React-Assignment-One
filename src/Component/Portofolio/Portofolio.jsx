import React from 'react'
import style from './Portofolio.module.css'
import imgOne from '../../Assets/images/poert1.png'
import imgTwo from '../../Assets/images/port2.png'
import imgThree from '../../Assets/images/port3.png'
export default function Portofolio() {
  return <>
    <div className={`${style.porto} p-5`}>
        <h2 className='text-center'>PORTFOLIO COMPONENT</h2>
        <div className={`text-center py-2 ${style.portoIcon}`}><i className="fa-solid fa-star"></i></div>
        <div className='container'>
            <div className="row g-5">
                <div className="col-md-4">
                    <div className={`${style.img}`}>
                    <img src={imgOne} className= 'w-100 rounded'/>
                    <div className={`${style.overlay}`}><i class="fa-solid fa-plus"></i></div>
                    </div>
                </div>
                <div className="col-md-4">
                <div className={`${style.img}`}>
                    <img src={imgTwo} className= 'w-100 rounded'/>
                    <div className={`${style.overlay}`}><i class="fa-solid fa-plus"></i></div>
                    </div>
                </div>
                <div className="col-md-4">
                <div className={`${style.img}`}>
                    <img src={imgThree} className= 'w-100 rounded'/>
                    <div className={`${style.overlay}`}><i class="fa-solid fa-plus"></i></div>
                    </div>
                </div>
                <div className="col-md-4">
                <div className={`${style.img}`}>
                    <img src={imgOne} className= 'w-100 rounded'/>
                    <div className={`${style.overlay}`}><i class="fa-solid fa-plus"></i></div>
                    </div>
                </div>
                <div className="col-md-4">
                <div className={`${style.img}`}>
                    <img src={imgTwo} className= 'w-100 rounded'/>
                    <div className={`${style.overlay}`}><i class="fa-solid fa-plus"></i></div>
                    </div>
                </div>
                <div className="col-md-4">
                <div className={`${style.img}`}>
                    <img src={imgThree} className= 'w-100 rounded'/>
                    <div className={`${style.overlay}`}><i class="fa-solid fa-plus"></i></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </>
}
