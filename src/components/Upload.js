import React, { useState, Fragment } from "react"
import Login from "./Login"

const Upload = () => {
  const [imageURL, setImageURL] = useState("")
  const [albumName, setAlbumName] = useState("")
  const [date, setDate] = useState("")
  const [front, setFront] = useState("")

  const onSubmitForm = async (e) => {
    try {
      const body = { album_name: albumName, date, url: imageURL, front }
      const response = await fetch("http://localhost:4000/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })
    } catch (error) {
      console.error(error.message)
    }
  }

  return (
    <Fragment>
      <Login />
      <h1 className="text-center mt-5">Upload Album Information</h1>
      <form className="d-flex flex-column mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Image URL"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
        />
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Album Name"
          value={albumName}
          onChange={(e) => setAlbumName(e.target.value)}
        />
        <input
          type="date"
          className="form-control mb-2"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <select
          className="form-select"
          aria-label="Default select example"
          value={front}
          onChange={(e) => setFront(e.target.value)}
        >
          <option value="">Put in Home Page?</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <button className="btn btn-success mt-2">Add</button>
      </form>
    </Fragment>
  )
}

export default Upload
