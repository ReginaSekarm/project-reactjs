import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DesintaRahma from './pages/DesintaRahma'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/desinta-rahma" element={<DesintaRahma />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App