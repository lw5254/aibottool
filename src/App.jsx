import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ToolCategory from './pages/ToolCategory.jsx'
import News from './pages/News.jsx'
import Projects from './pages/Projects.jsx'
import Tutorials from './pages/Tutorials.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="app">
      <Header />
      
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tools/:category" element={<ToolCategory />} />
          <Route path="/news" element={<News />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/tutorials" element={<Tutorials />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  )
}

export default App