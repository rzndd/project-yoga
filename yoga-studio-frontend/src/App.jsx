import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { ToastContainer } from './components/common'
import { Home } from './pages/Home'
import { Classes } from './pages/Classes'
import { ClassDetail } from './pages/ClassDetail'
import { Schedule } from './pages/Schedule'
import { Memberships } from './pages/Memberships'
import { Instructors } from './pages/Instructors'
import { InstructorDetail } from './pages/InstructorDetail'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/classes/:id" element={<ClassDetail />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/memberships" element={<Memberships />} />
            <Route path="/instructors" element={<Instructors />} />
            <Route path="/instructors/:id" element={<InstructorDetail />} />
          </Routes>
        </main>
        <Footer />
        <ToastContainer />
      </div>
    </Router>
  )
}

export default App
