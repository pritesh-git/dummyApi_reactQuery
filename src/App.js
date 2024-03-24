import React from 'react'
import { Main } from './components/Main'
import { Todos } from './components/Todos'
import { Users } from './components/Users'
import { Comments } from './components/Comments'
import { Posts } from './components/Posts'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Main />
      <Routes>
        <Route exact path="/" element={<Users />} />
        <Route path="todos" element={<Todos />} />
        <Route path="posts" element={<Posts />} />
        <Route path="comments" element={<Comments />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
