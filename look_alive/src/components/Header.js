import { Link } from "react-router-dom";

const Header = () => {

  return (
    <div>

      <Link to="/" exact>
        <h3>LOOK ALIVE</h3>
      </Link>

    </div>
  )
} 

export default Header;