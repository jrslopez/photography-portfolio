import React, { Fragment, useEffect, useState } from "react"

const Images = () => {
  const getImages = async () => {
    try {
      const response = await fetch("http://localhost:4000")
      const jsonData = await response.json()
      console.log(jsonData)
    } catch (error) {
      console.error(error.message)
    }
  }

  useEffect(() => {
    getImages()
  }, [])

  return (
    <Fragment>
      <div>hi</div>
    </Fragment>
  )
}

export default Images
