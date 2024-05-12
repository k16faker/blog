


import React from 'react'

const Header = () => {
  return (
    <header>
        <div>
            <h1>My Blog</h1>
        </div>
        <nav className='flex'>
            <ul className='flex items-center'>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/list">List</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header