import React, { Fragment } from "react"
import { useParams } from "react-router-dom"
import useFetchImages from "./useFetchImages"
import { Gallery } from "react-grid-gallery"

const Album = () => {
  const images = useFetchImages()

  const { albumName } = useParams()

  const albumImages = images.filter((image) => image.albumName === albumName)

  return (
    <Fragment>
      <div>
        <h1> Album: {albumName}</h1>
      </div>
      <div className="GifSearch">
        <div className="album-gallery">
          <Gallery
            images={albumImages}
            rowHeight={350}
            enableImageSelection={false}
            margin={10}
          />
        </div>
      </div>
    </Fragment>
  )
}

export default Album
