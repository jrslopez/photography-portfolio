import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "bootstrap-icons/font/bootstrap-icons.css"
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Upload from "./components/Upload"
import Album from "./components/Albums"
import Login from "./components/Login"
import Validation from "./components/Validation"

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/upload" element={<Upload />} />
          <Route exact path="/:albumName" element={<Album />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/validation" element={<Validation />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
