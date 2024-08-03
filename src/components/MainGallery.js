import React, { Fragment } from "react"
import { useNavigate } from "react-router-dom"
import useFetchImages from "./useFetchImages"
import PhotoAlbum from "react-photo-album"

const MainGallery = () => {
  const navigate = useNavigate()
  const images = useFetchImages()

  const frontImages = images.filter((element) => element.front === true)

  const imageClick = (index) => {
    const albumName = frontImages[index].albumName
    navigate(`/${albumName}`)
  }

  return (
    <Fragment>
      <div>
        <div className="front-gallery">
          <PhotoAlbum
            photos={frontImages}
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
