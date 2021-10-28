import { Link } from "react-router-dom";

import Navi from "./Navi";

const Header = () => {

  return (
    <div>
      <Navi />

      <Link to="/" exact>
        <h3>LOOK ALIVE</h3>
      </Link>

      <Link to="/" exact></Link>


    </div>
  )
} 

export default Header;