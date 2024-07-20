import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div class="mt-4">
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <Link class="nav-link text-main" to="">
            Home
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-main" to="/about">
            About
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-main" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
