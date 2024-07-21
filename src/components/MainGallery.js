import React, { Fragment } from "react"
import { useNavigate } from "react-router-dom"
import useFetchImages from "./useFetchImages"
import PhotoAlbum from "react-photo-album"

const MainGallery = () => {
  const navigate = useNavigate()
  const images = useFetchImages()

  const imageClick = (index) => {
    const albumName = images[index].albumName
    navigate(`/${albumName}`)
  }

  return (
    <Fragment>
      <div className="GifSearch">
        <div className="front-gallery">
          <PhotoAlbum
            photos={images}
            layout="rows"
            targetRowHeight="400"
            onClick={(e) => {
              imageClick(e.index)
            }}
          />
        </div>
      </div>
    </Fragment>
  )
}

export default MainGallery
