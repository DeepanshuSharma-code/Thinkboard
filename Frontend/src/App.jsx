import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/homepage'
import CreatePage from './pages/createpage'
import NoteDetailPage from './pages/notedetailpage'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/create' element={<CreatePage />} />
        <Route path='/:id' element={<NoteDetailPage />} />
      </Routes>
    </div>
  )
}

export default App
