import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import FluidCursor from './pages/FluidCursor'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App