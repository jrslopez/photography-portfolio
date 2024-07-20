import { useEffect, useState } from "react"

const useFetchImages = () => {
  const [images, setImages] = useState([])

  const getImages = async () => {
    try {
      const response = await fetch("http://localhost:4000")
      const jsonData = await response.json()
      const processedImages = jsonData.map((element) => {
        return { src: element.url, albumName: element.album_name }
      })
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
