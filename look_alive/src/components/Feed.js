
// import axios from "axios";

// import { Link } from "react-router-dom";

import { useParams } from "react-router-dom"

// const API_URL = 'https://api.airtable.com/v0/app2HujIdBEExdRd1/Table%201?api_key=keymcQ6E3LYsrFEc7'

const Feed = (props) => {
  const params = useParams();
  const showPosts = props.posts.find((post) =>  post.id === params.id )
  // const deletePost = async () => {
  //   await axios.delete(API_URL + `&records[]=${post.id}`);

//     setToggleFetch(!toggleFetch);
// };


  return (
    <div>
      <h3>{showPosts?.fields.author}</h3>
      <p><em>{showPosts?.fields.title}</em></p>
      <p><em>{showPosts?.fields.posts}</em></p>

      {/* <button onClick={deletePost}>Delete</button> */}
      {/* <Link to={`/edit/${post.id}`}>Edit Post</Link> */}
    </div>
  )
} 

export default Feed;