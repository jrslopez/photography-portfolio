import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className="mt-4">
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
  )
}

export default Navbar
