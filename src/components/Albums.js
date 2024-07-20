import React, { Fragment, useState } from "react"
import { useParams } from "react-router-dom"
import useFetchImages from "./useFetchImages"
import { Gallery } from "react-grid-gallery"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"

const Album = () => {
  const [open, setOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const images = useFetchImages()

  const { albumName } = useParams()

  const albumImages = images.filter((image) => image.albumName === albumName)

  const handleClick = (index) => {
    setOpen(true)
    setCurrentIndex(index)
  }

  const slides = albumImages.map((image) => {
    console.log("image url", image.url)
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
            onClick={() => setOpen(true)}
          />
        </div>
      </div>

      {/* test */}

      <Lightbox
        // index={index}
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        currentIndex={currentIndex}
      />
    </Fragment>
  )
}

export default Album
