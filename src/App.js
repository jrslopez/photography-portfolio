import "bootstrap/dist/css/bootstrap.css"
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Upload from "./components/Upload"
import Album from "./components/Albums"

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/upload" element={<Upload />} />
            <Route exact path="/:albumName" element={<Album />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
