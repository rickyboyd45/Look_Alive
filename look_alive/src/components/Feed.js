
import axios from "axios";

import { Link } from "react-router-dom";

const API_URL = 'https://api.airtable.com/v0/app2HujIdBEExdRd1/Table%201?api_key=keymcQ6E3LYsrFEc7'

const Feed = ({ postData, toggleFetch, setToggleFetch }) => {

  const deletePost = async () => {
    await axios.delete(API_URL + `&records[]=${postData.id}`);

    setToggleFetch(!toggleFetch);
};


  return (
    <div>
      <h3>{postData.fields.author}</h3>
      <p><em>{postData.fields.title}</em></p>
      <p><em>{postData.fields.posts}</em></p>
      <button onClick={deletePost}>Delete</button>
      <Link to={`/edit/${postData.id}`}>Edit Post</Link>
    </div>
  )
} 

export default Feed;