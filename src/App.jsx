import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Subjects from './pages/Subjects'
import TestimonialsPage from './pages/TestimonialsPage'
import Contact from './pages/Contact'
import BookSession from './pages/BookSession'

// Subject Pages
import ASLevel from './pages/subjects/ASLevel'
import APCourses from './pages/subjects/APCourses'
import NEET from './pages/subjects/NEET'
import CBSE from './pages/subjects/CBSE'
import IB from './pages/subjects/IB'
import IGCSE from './pages/subjects/IGCSE'
import JEE from './pages/subjects/JEE'

import './App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/subjects" element={<Subjects />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book-session" element={<BookSession />} />
        
        {/* Subject Routes */}
        <Route path="/subjects/as-level" element={<ASLevel />} />
        <Route path="/subjects/ap-courses" element={<APCourses />} />
        <Route path="/subjects/neet" element={<NEET />} />
        <Route path="/subjects/cbse" element={<CBSE />} />
        <Route path="/subjects/ib" element={<IB />} />
        <Route path="/subjects/igcse" element={<IGCSE />} />
        <Route path="/subjects/jee" element={<JEE />} />
      </Routes>
    </div>
  )
}

export default App
