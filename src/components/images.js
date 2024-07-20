import React, { Fragment, useEffect, useState } from "react"
import { Gallery } from "react-grid-gallery"
import { useNavigate } from "react-router-dom"

const Images = () => {
  const [frontImages, setFrontImages] = useState([])
  const navigate = useNavigate()

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

  const images = frontImages.map((element) => {
    return {
      src: element.url,
      albumName: element.album_name,
    }
  })

  const imageClick = (albumName) => {
    navigate(`/${albumName}`)
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
            onClick={(e) => imageClick(images[e].albumName)}
          />
        </div>
      </div>
    </Fragment>
  )
}

export default Images
