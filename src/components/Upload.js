import React, { Fragment } from "react"

const Upload = () => {
  return (
    <Fragment>
      <h1>Upload here!</h1>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          User:
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Type username here"
          aria-describedby="basic-addon1"
        />
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          Pass:
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Type password here"
          aria-describedby="basic-addon1"
        />
      </div>

      <div class="input-group mb-3">
        <input type="file" class="form-control" id="inputGroupFile02" />
        <label class="input-group-text" for="inputGroupFile02">
          Upload
        </label>
      </div>
    </Fragment>
  )
}

export default Upload
