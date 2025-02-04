import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Introduction from './pages/introduction'
import About from './pages/About'
import Projects from './pages/projects'
import Tecnologies from './pages/tecnologies'
import Contact from './pages/contact'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {
  

  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Introduction/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/tecnologies" element={<Tecnologies />} />
      <Route path="/contact" element={<Contact />} />
      
    </Routes>
    <Footer />

    </BrowserRouter>
  )
}

export default App
