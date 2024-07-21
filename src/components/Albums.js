import React, { Fragment, useState } from "react"
import { useParams } from "react-router-dom"
import useFetchImages from "./useFetchImages"
import { Gallery } from "react-grid-gallery"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"

const Album = () => {
  const [index, setIndex] = useState(-1)
  const images = useFetchImages()

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
      <div className="GifSearch">
        <div className="album-gallery">
          <Gallery
            images={albumImages}
            rowHeight={350}
            enableImageSelection={false}
            margin={10}
            onClick={(e) => {
              setIndex(e)
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
