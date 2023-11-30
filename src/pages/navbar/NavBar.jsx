import { Link } from "react-router-dom"
import "./NavBar.css";


export const NavBar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link className="link" to="/">Home</Link>
          </li>
          <li>
            <Link className="link" to="/about-us">AboutUs</Link>
          </li>
          <li>
            <Link className="link" to="/products">Products</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
