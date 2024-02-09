import React from 'react'
import style from './Home.module.css'
import img from '../../Assets/images/avataaars.svg'
export default function Home() {
  return <>
    <div className={`${style.home}  p-5`}>
        <div className='w-25 m-auto'>
        <img src={img}/>
        </div>
        <h2 className='text-white text-center py-1'>START FRAMEWORK</h2>
        <div className={`text-center text-white py-2 ${style.homeIcon}`}><i className="fa-solid fa-star"></i></div>
        <p className='text-white text-center'>Graphic Artist - Web Designer - Illustrator</p>
    </div>
  </>
}
