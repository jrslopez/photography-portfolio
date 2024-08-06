import { useEffect, useState } from "react"

const useFetchImages = () => {
  const [images, setImages] = useState([])

  const getImages = async () => {
    try {
      const response = await fetch("http://localhost:4000")
      const jsonData = await response.json()

      //returns width and height automatically (how? idk) to be used for PhotoAlbum

      const processedImages = await Promise.all(
        jsonData.map(async (element) => {
          const image = new Image()
          image.src = element.url
          return new Promise((resolve) => {
            image.onload = () => {
              resolve({
                src: element.url,
                albumName: element.album_name,
                width: image.width,
                height: image.height,
                front: element.front,
              })
            }
          })
        })
      )

      // this is simpler but does not return width and height automatically

      // const processedImages = jsonData.map((element) => {
      //   return { src: element.url, albumName: element.album_name }
      // })

      setImages(processedImages)
    } catch (error) {
      console.error(error.message)
    }
  }

  useEffect(() => {
    getImages()
  }, [])

  return images
}

export default useFetchImages
