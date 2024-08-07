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
      <div>
        <form className="d-flex flex-column mt-5" onSubmit={onSubmitForm}>
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
    </Fragment>
  )
}

export default Login
