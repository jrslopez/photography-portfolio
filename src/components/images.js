import React, { Fragment, useEffect, useState } from "react"
import { Gallery } from "react-grid-gallery"

const Images = () => {
  const [frontImages, setFrontImages] = useState([])

  const getImages = async () => {
    try {
      const response = await fetch("http://localhost:4000")
      const jsonData = await response.json()
      setFrontImages(jsonData)
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

  //test click to direct to albums
  const testClick = () => {
    console.log("click my etits")
  }

  return (
    <Fragment>
      <div className="GifSearch">
        <div className="front-gallery">
          <Gallery
            images={images}
            rowHeight={350}
            enableImageSelection={false}
            margin={10}
            onClick={testClick}
          />
        </div>
      </div>
    </Fragment>
  )
}

export default Images
