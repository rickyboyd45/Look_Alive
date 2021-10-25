import { Link } from "react-router-dom";
import ButtonUnstyled from '@mui/core/ButtonUnstyled';

const Home = () => {

  return (
    <div>
      <Link to="/" exact>
      <h3>HOME</h3>
      </Link>
    </div>
  )
} 

export default Home;