import { Link } from "react-router-dom";

const Home = ({ post }) => {

  return (
    <div>
      <Link to="/">
      <h3>HOME</h3>
      </Link>

      <Link to={`/${post.id}`}>
        <h4>{post.fields.title}</h4>
        </Link>
    </div>
  )
} 

export default Home;