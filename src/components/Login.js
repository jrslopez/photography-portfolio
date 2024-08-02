import React, { useState, Fragment } from "react"

const Login = () => {
  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")

  // const onSubmitForm = async (e) => {
  //   try {
  //     const body = { album_name: albumName, date, url: imageURL, front }
  //     const response = await fetch("http://localhost:4000/upload", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(body),
  //     })
  //   } catch (error) {
  //     console.error(error.message)
  //   }
  // }

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Sign in here
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div>
                <form className="d-flex flex-column mt-5">
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="User Name"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                  />
                  <input
                    type="password"
                    className="form-control mb-2"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </form>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Login
