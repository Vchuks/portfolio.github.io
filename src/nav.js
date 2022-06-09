import React from 'react'

const Nav = () => {
  return (
    <div className = "navbar">
        <button><a href="/">Home</a></button>
        <button><a href="/projects">Projects</a></button>
        <button><a href="/about">About Me</a></button>
        <button><a href="/contact">Contact</a></button>
    </div>
  )
}

export default Nav;
