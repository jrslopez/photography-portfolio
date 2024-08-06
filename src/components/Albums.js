import React, { Fragment, useState } from "react"
import { useParams } from "react-router-dom"
import FetchImages from "./FetchImages"
import PhotoAlbum from "react-photo-album"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"

const Album = () => {
  const [index, setIndex] = useState(-1)
  const images = FetchImages()

  const { albumName } = useParams()

  const albumImages = images.filter((image) => image.albumName === albumName)

  const slides = albumImages.map((image) => {
    return {
      src: image.src,
    }
  })

  return (
    <Fragment>
      <div>
        <h1> Album: {albumName}</h1>
      </div>
      <div>
        <div className="album-gallery">
          <PhotoAlbum
            photos={albumImages}
            layout="rows"
            targetRowHeight="450"
            spacing="5"
            onClick={(e) => {
              setIndex(e.index)
            }}
          />

          <Lightbox
            slides={slides}
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
          />
        </div>
      </div>
    </Fragment>
  )
}

export default Album
