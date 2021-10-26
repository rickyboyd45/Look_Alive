import { Link } from "react-router-dom";

const Nav = () => {

  return (
    <div>
      <nav>
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/post">NEW POST</Link>
      </nav>
    </div>
  )
} 

export default Nav;