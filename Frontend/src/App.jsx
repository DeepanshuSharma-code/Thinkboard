import React from 'react'
import { Routes, Route } from 'react-router'

import Homepage from './Pages/HomePage.jsx'
import CreatePage from './Pages/CreatePage.jsx'
import NoteDetailPage from './Pages/NoteDetailPage.jsx'

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
