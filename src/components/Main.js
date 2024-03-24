import React from 'react'
import { Link } from 'react-router-dom'

export const Main = () => {
  return (
    <header className="px-5 my-2">
      <nav className="d-flex mx-auto w-75 justify-content-around">
        <Link to="/"> Users </Link>
        <Link to="/todos"> Todos </Link>
        <Link to="/posts"> Posts </Link>
        <Link to="/comments"> Comments </Link>
      </nav>
    </header>
  )
}
