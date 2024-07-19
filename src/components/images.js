import React, { Fragment, useEffect, useState } from "react"
import { Gallery } from "react-grid-gallery"

const Images = () => {
  const [frontImages, setFrontImages] = useState([])

  const getImages = async () => {
    try {
      const response = await fetch("http://localhost:4000")
      const jsonData = await response.json()
      setFrontImages(jsonData)
      // console.log(jsonData[0].url)
    } catch (error) {
      console.error(error.message)
    }
  }

  useEffect(() => {
    getImages()
  }, [])

  const images = frontImages.map((element) => ({
    src: element.url,
  }))

  console.log(images)

  return (
    <Fragment>
      <div className="GifSearch">
        <div>
          <Gallery images={images} rowHeight={300} />
        </div>
      </div>
    </Fragment>
  )
}

export default Images
