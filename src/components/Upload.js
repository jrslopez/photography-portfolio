import React, { useState, useEffect, Fragment } from "react"

const Upload = () => {
  const [state, setState] = useState({
    imageURL: "",
    albumName: "",
    date: "",
    front: "",
  })

  const { imageURL, albumName, date, front } = state

  const updateField = (field, value) => {
    setState((prevState) => ({
      ...prevState,
      [field]: value,
    }))
  }

  const resetForm = () => {
    updateField("imageURL", "")
    updateField("albumName", "")
    updateField("date", "")
    updateField("front", "")
  }

  useEffect(() => {
    const forms = document.querySelectorAll(".needs-validation")

    Array.from(forms).forEach((form) => {
      form.addEventListener(
        "submit",
        (event) => {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }

          form.classList.add("was-validated")
        },
        false
      )
    })
  }, [])

  const onSubmitForm = async (e) => {
    try {
      e.preventDefault()
      const body = { album_name: albumName, date, url: imageURL, front }
      const response = await fetch("http://localhost:4000/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })
      const alert = document.querySelector(".alert-success")
      alert.classList.add("show")
    } catch (error) {
      console.error(error.message)
    }
  }

  return (
    <Fragment>
      <h1 className="text-center mt-5 crimson-text-regular">
        Upload Album Information
      </h1>
      <div className="d-flex">
        <form
          className="d-flex flex-column mt-1 needs-validation container w-50"
          noValidate
          onSubmit={onSubmitForm}
        >
          <div className="row w-100 mx-auto">
            <div className="col-md">
              <label
                htmlFor="validationCustom01"
                className="form-label crimson-text-regular"
              >
                Image
              </label>
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Image URL"
                value={imageURL}
                onChange={(e) => updateField("imageURL", e.target.value)}
                id="validationCustom01"
                required
              />
              <div className="invalid-feedback">
                Please enter the image URL.
              </div>
            </div>
          </div>

          <div className="row w-100 mx-auto">
            <div className="col-md">
              <label
                htmlFor="validationCustom01"
                className="form-label crimson-text-regular"
              >
                Album
              </label>
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Album Name"
                value={albumName}
                onChange={(e) => updateField("albumName", e.target.value)}
                id="validationCustom01"
                required
              />
              <div className="invalid-feedback">
                Please enter the album name.
              </div>
            </div>
          </div>

          <div className="row w-100 mx-auto">
            <div className="col-md-9">
              <label
                htmlFor="validationCustom01"
                className="form-label crimson-text-regular"
              >
                Date
              </label>
              <input
                type="date"
                className="form-control mb-2"
                value={date}
                onChange={(e) => updateField("date", e.target.value)}
                id="validationCustom01"
                required
              />
              <div className="invalid-feedback">Please enter the date.</div>
            </div>

            <div className="col-md-3">
              <label
                htmlFor="validationCustom01"
                className="form-label crimson-text-regular"
              >
                Put in Home Page?
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                value={front}
                onChange={(e) => updateField("front", e.target.value)}
                id="validationCustom01"
                required
              >
                <option value=""></option>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
              <div className="invalid-feedback">
                Please enter whether to be shown on front page or not.
              </div>
            </div>
          </div>

          <div className="row w-100 mx-auto">
            <div className="col-md-12 d-flex justify-content-end">
              <button
                type="button"
                className="btn btn-secondary me-2 mt-2 crimson-text-regular"
                onClick={resetForm}
              >
                Reset
              </button>
              <button
                type="submit"
                className="btn btn-success mt-2 crimson-text-regular"
              >
                Add
              </button>
            </div>
          </div>

          <div
            className="alert alert-success mt-2 alert-dismissible fade"
            role="alert"
          >
            Upload successful!
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        </form>
      </div>
    </Fragment>
  )
}

export default Upload
