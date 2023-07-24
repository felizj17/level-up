import React from 'react'
import Nav from './Nav'
import image from '../assets/nycbaby.svg'
import '../css/header.css'

export default function Header() {
    return (
        <header className='header'>
            <img src={image} alt='city skyline' />
            <div className='text'>
                <h2> Better New Yorkers For A Better New York </h2>
                <p className='subheader'> Financial literacy & resources that aid in personal growth in order to achieve freedom and stability </p>
            </div>
            <br />
            <Nav />
        </header>
    )
}