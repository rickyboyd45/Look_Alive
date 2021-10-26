import { Route, Link } from "react-router-dom";

import Nav from "./Nav";

const Header = () => {

  return (
    <div>

      <Link to="/" exact>
        <h3>LOOK ALIVE</h3>
      </Link>

      <Nav />

    </div>
  )
} 

export default Header;