import React from 'react'
import { Routes, Route } from 'react-router'
import Homepage from './pages/Homepage'
import CreatePage from './pages/CreatePage'
import NoteDetailPage from './Pages/NoteDetailPage'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/create' element={<CreatePage />}/>
        <Route path='/:id' element={<NoteDetailPage />}/>
      </Routes>
    </div>
  )
}

export default App
