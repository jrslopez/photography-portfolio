import React, { Fragment } from "react"
import { Gallery } from "react-grid-gallery"
import { useNavigate } from "react-router-dom"
import useFetchImages from "./useFetchImages"

const MainGallery = () => {
  const navigate = useNavigate()
  const images = useFetchImages()
  console.log("images", images)

  const imageClick = (index) => {
    const albumName = images[index].albumName
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
            onClick={(e) => {
              imageClick(e)
            }}
          />
        </div>
      </div>
    </Fragment>
  )
}

export default MainGallery
