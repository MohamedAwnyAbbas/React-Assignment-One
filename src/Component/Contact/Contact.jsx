import React from 'react'
import style from './Contact.module.css'

export default function Contact() {
  return <>
    <div className="p-5">
    <h2 className='text-center'>CONTACT COMPONENT</h2>
    <div className={`text-center py-2 ${style.contactIcon}`}><i className="fa-solid fa-star"></i></div>
    <form className='container d-flex flex-column justify-content-center align-items-center'>
        <input placeholder='Name' type='text' className={`${style.input} my-4 p-2`}></input>
        <input placeholder='Age' type='number' className={`${style.input} my-4 p-2`}></input>
        <input placeholder='Email' type='email' className={`${style.input} my-4 p-2`}></input>
        <input placeholder='Password' type='password' className={`${style.input} my-4 p-2`}></input>
        <button className='btn btn-success'>Send Message</button>
    </form>
    </div>
  </>
}
