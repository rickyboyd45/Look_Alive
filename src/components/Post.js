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
    <h5>{postData.fields.title}</h5>
    
    <h6>{postData.fields.posts}</h6>
    
    <h6>Author: {postData.fields.author}</h6>

    <button onClick={deletePost} type="button" class="btn btn-secondary">Delete</button>
    <Link to={`/edit/${postData.id}`}>Edit Post</Link>
</div>
  )
}

export default Post;