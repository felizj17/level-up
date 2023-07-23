import React, {useEffect, useState} from 'react'
import Header from './Header'
import Footer from './Footer'
import './home.css'

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <h1 style={{textAlign:'center'}}>Financial Empowerment Centers</h1>
        <section className='index'>
          <aside className='left'>
            <h3>List of Locations</h3>
            <p>Feel free to redesign</p>
          </aside>
          <aside className='right'>
            <h3>Details of Selected Location</h3>
            <p>feel free to redisgn these</p>
          </aside>
        </section>
      </main>
      <Footer />
    </div>
  )
}
