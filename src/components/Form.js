// Will house comment section
import { useState } from 'react';
import { Redirect, useParams } from "react-router-dom";
import axios from 'axios';

const API_URL = 'https://api.airtable.com/v0/app2HujIdBEExdRd1/Post?api_key=keymcQ6E3LYsrFEc7'

  const Form = ({ formType, toggleFetch, setToggleFetch }) => {
    const [title, setTitle] = useState('');
    const [posts, setPosts] = useState('');
    const [author, setAuthor] = useState('');
    const [redirectHome, setRedirectHome] = useState(false);
    const params = useParams();

    const handlePostRequest = async (ev) => {
      ev.preventDefault();

      const newPost = {
        records: [
          {
            fields: {
              title,
              posts,
              author
            }
          }
        ]
      }
  
      await axios.post(API_URL, newPost);
      
      setRedirectHome(true);
      setToggleFetch(!toggleFetch);
    }
    
    const handlePutRequest = async (ev) => {
      ev.preventDefault();
      const blog_id = params.blog_id;

      const updatedPost = {
          records: [
            {
              id: blog_id,
              fields: {
                title,
                posts,
                author
              }
            }
          ]
      }
      await axios.put(API_URL, updatedPost);
  
      setRedirectHome(true);
      setToggleFetch(!toggleFetch);
  }

  if (redirectHome) {
    return <Redirect to="/"/>
}

  return (
    <div>
            <form onSubmit={formType === 'post' ? handlePostRequest : handlePutRequest}>
                <label htmlFor="title">Title: </label>
                <input type="text" id="title" onChange={(ev) => setTitle(ev.target.value)}/>

                <label htmlFor="posts">Posts: </label>
                <input type="text" id="posts" onChange={(ev) => setPosts(ev.target.value)}/>

                <label htmlFor="author">Author: </label>
                <input type="text" id="author" onChange={(ev) => setAuthor(ev.target.value)}/>

                <input type="submit" />
            </form>

    </div>
  )
} 

export default Form;