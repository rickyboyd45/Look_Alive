import { Route, Link } from "react-router-dom";
import About from "./About";

const Nav = () => {

  return (
    <div>
      <nav>
        <Link to="/">HOME</Link>

        <Link to="/about">ABOUT</Link>

        <Link to="/newpost">NEW POST</Link>

        <Link to="/events">EVENTS</Link>

      </nav>
    </div>
  )
} 

export default Nav;