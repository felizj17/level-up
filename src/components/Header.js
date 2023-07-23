import React from 'react'
import Nav from './Nav'

export default function Header(){
    return (
        <header>
            {/* <img /> */}
            <p style={{margin:0}}>Image of NYC goes here</p> {/*delete this after adding image */}
            <Nav/>
        </header>
    )
}