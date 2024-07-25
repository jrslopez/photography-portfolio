import Logo from "./logo"
import MainGallery from "./MainGallery"
import Navbar from "./navbar"
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
