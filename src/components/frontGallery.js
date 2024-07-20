import React, { Fragment } from "react"
import { Gallery } from "react-grid-gallery"
import { useNavigate } from "react-router-dom"
import { useFetchImages } from "./useFetchImages"

const frontGallery = () => {
  const navigate = useNavigate()
  const images = useFetchImages()

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

export default frontGallery
