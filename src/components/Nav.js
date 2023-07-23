import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Nav() {
  return (
    <nav>
      <h1>
        LEVEL-UP NYC
      </h1>
        <NavLink className='nav-link' to='/'>
          Empowerment Centers
        </NavLink>
        <NavLink className='nav-link' to='/quizes'>
          Quizes
        </NavLink>
    </nav>
  )
}
