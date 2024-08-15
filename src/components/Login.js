import React, { useState, Fragment } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
  document.title = "Login"
  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const onSubmitForm = async (e) => {
    try {
      e.preventDefault()
      if (user === "admin" && password === "1234") {
        navigate("/upload")
      } else alert("Wrong username and/or password!")
    } catch (error) {
      console.error(error.message)
    }
  }

  return (
    <Fragment>
      <div className="d-flex justify-content-center">
        <form
          className="d-flex flex-column mt-5 needs-validation"
          noValidate
          onSubmit={onSubmitForm}
        >
          <div className="col-md">
            <label
              htmlFor="validationCustom01"
              className="form-label crimson-text-regular"
            >
              Username
            </label>
            <input
              type="text"
              className="form-control mb-2"
              id="validationCustom01"
              onChange={(e) => setUser(e.target.value)}
              required
            />
            <div className="invalid-feedback">Wrong username!</div>
          </div>
          <div className="col-md">
            <label
              htmlFor="validationCustom02"
              className="form-label crimson-text-regular"
            >
              Password
            </label>
            <input
              type="password"
              className="form-control mb-2"
              id="validationCustom02"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="invalid-feedback">Wrong password!</div>
          </div>

          <div className="mb-4">
            <button
              type="submit"
              className="btn btn-primary btn-sm crimson-text-regular"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  )
}

export default Login
