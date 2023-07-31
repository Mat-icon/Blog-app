import React from 'react'
import './app.css'
import { Link } from 'react-router-dom'

function Navbar({isAuth, signOut}) {
  return (
    <div className='nav'>
      <div className='nav-links'>
        <ul>
          <li><Link to='/'>Home</Link></li>
          {!isAuth ? <li><Link to='/login'>Login</Link></li> :
          <>
          
            <li><Link to='/post'>Create Post</Link></li>
            <button onClick={signOut} className='signout'>Sign Out</button>
            </>
          }
        </ul>
      </div>
    </div>
  )
}

export default Navbar