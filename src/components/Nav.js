import { Route, Link } from "react-router-dom";
import About from "./About";

const Nav = () => {

  return (
    <div>
      <nav>
        <Link to="/">HOME</Link>

        <Route path="/about">
          <Link to="/about">ABOUT</Link>
          <About />
        </Route>

        <Link to="/post">NEW POST</Link>

        <Link to="/events">EVENTS</Link>

      </nav>
    </div>
  )
} 

export default Nav;