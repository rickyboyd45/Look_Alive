import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = 'https://api.airtable.com/v0/app2HujIdBEExdRd1/Post?api_key=keymcQ6E3LYsrFEc7'

const Post = ({ postData, toggleFetch, setToggleFetch }) => {

  const deletePost = async () => {
  await axios.delete(API_URL + `&records[]=${postData.id}`);

  setToggleFetch(!toggleFetch);
};

  return (
<div className="new">
  <h4>Title: {postData.fields.title}</h4>
  <p>{postData.fields.posts}</p>
  <em>Author: {postData.fields.author}</em>

  <button onClick={deletePost}>Delete</button>
  <Link to={`/edit/${postData.id}`}>Edit Post</Link>
</div>
  )
} 

export default Post;