import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div style={{backgroundColor:"black"}}>
            <ul class="nav nav-tabs">
  <li class="nav-item">
    <Link class="nav-link" aria-current="page" to="/">Home</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" to="/about">About</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" to="/add-blog">Add Blog</Link>
  </li>
</ul>
        </div>
    )
}
