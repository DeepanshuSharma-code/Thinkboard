import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from './Pages/HomePage'
import CreatePage from './Pages/CreatePage'
import NoteDetailPage from './Pages/NoteDetailPage'


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
