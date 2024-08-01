import Logo from "./Logo"
import MainGallery from "./MainGallery"
import Navbar from "./Navbar"
import React, { Fragment } from "react"

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Logo />
      <MainGallery />
    </Fragment>
  )
}

export default Home
