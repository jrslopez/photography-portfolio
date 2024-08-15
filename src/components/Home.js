import Logo from "./Logo"
import MainGallery from "./MainGallery"

import React, { Fragment } from "react"

const Home = () => {
  document.title = "JRSLopez Photography"
  return (
    <Fragment>
      <Logo />
      <MainGallery />
    </Fragment>
  )
}

export default Home
