import React from 'react'
import Nav from './Nav'
import image from '../assets/nycbaby.jpg'
import '../css/header.css'

export default function Header(){
    return (
        <header>
            <img src={image} />
            <Nav/>
        </header>
    )
}