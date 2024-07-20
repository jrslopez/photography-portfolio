import React from "react"
import { useParams } from "react-router-dom"

const Album = () => {
  const { albumName } = useParams()
  return (
    <div>
      <h1> Album: {albumName}</h1>
    </div>
  )
}

export default Album
