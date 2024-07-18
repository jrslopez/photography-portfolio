import Landing from "./components/landing"
import Next from "./components/next"
import Navbar from "./components/navbar"
import Logo from "./components/logo"
import Icons from "./components/icons"
import "bootstrap/dist/css/bootstrap.css"
import "./App.css"
import { Gallery } from "react-grid-gallery"
import { images } from "./components/gallery"

function App() {
  return (
    <div>
      <Navbar />
      <Logo />
      <Landing />
      <Next />
      <Icons />
      <Gallery images={images} rowHeight={400} />
    </div>
  )
}

export default App
