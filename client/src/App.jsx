import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Team from './pages/Team'
import Publications from './pages/Publications'
import Research from './pages/Research'
import Collaborations from './pages/Collaborations'
import Teaching from './pages/Teaching'
import Awards from './pages/Awards'
import News from './pages/News'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/team' element={<Team />} />
        <Route path='/publications' element={<Publications />} />
        <Route path='/research' element={<Research />} />
        <Route path='/collaborations' element={<Collaborations />} />
        <Route path='/teaching' element={<Teaching />} />
        <Route path='/awards' element={<Awards />} />
        <Route path='/news' element={<News />} />
        <Route path='/contact-us' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
