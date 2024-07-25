import { Link } from "react-router-dom"
import { Fragment } from "react"
import Icons from "./icons"

function Navbar() {
  return (
    <Fragment>
      <div className="row">
        <div className="col-8">
          <div className="mt-4 crimson-text-bold">
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <Link className="nav-link text-main" to="">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-main" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-main" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-4 mt-4">
          <ul className="nav justify-content-center">
            <li className="nav-link">
              <Icons />
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  )
}

export default Navbar
