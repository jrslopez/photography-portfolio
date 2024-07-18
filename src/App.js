import Landing from "./components/landing"
import Next from "./components/next"
import Navbar from "./components/navbar"
import Logo from "./components/logo"
import Icons from "./components/icons"
import "bootstrap/dist/css/bootstrap.css"
import "./App.css"

function App() {
  return (
    <div>
      <Navbar />
      <Logo />
      <Landing />
      <Next />
      <Icons />
    </div>
  )
}

export default App
