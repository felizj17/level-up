import React, {useEffect, useState} from 'react'
import Centers from './Centers'
import Header from './Header'
import Footer from './Footer'
import '../css/home.css'

export default function Home() {
  return (
    <div>
      <h1 style={{textAlign:'center'}}>Financial Empowerment Centers</h1>
        <section className='index'>
            <Centers />
        </section>
    </div>
  )
}
