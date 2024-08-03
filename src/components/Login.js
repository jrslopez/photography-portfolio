import React, { useState, Fragment } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")
  const [authenticated, setAuthenticated] = useState(false)

  const navigate = useNavigate()

  const getCredentials = async () => {
    const response = await fetch("http://localhost:4000/login")
    const jsonData = await response.json()
  }

  const onSubmitForm = async (e) => {
    try {
      e.preventDefault()
      if ((user === "admin" && password === "1234") || authenticated) {
        if (!authenticated) {
          setAuthenticated(true)
        }
        navigate("/about")
      } else {
        alert("maliit titi mo")
      }
    } catch (error) {
      console.error(error.message)
    }
  }

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
                Enter Username and Password
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
                <form
                  className="d-flex flex-column mt-5"
                  onSubmit={onSubmitForm}
                >
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
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Save changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Login
