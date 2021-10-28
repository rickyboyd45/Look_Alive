import './form.css';
import { useState } from 'react';
import { Redirect, useParams } from "react-router-dom";
import axios from 'axios';

const API_URL1 = 'https://api.airtable.com/v0/app2HujIdBEExdRd1/Post?api_key=keymcQ6E3LYsrFEc7'

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
              author,
              posts
            }
          }
        ]
      }
  
      await axios.post(API_URL1, newPost);
      
      setRedirectHome(true);
      setToggleFetch(!toggleFetch);
    }
    
    const handlePutRequest = async (ev) => {
      ev.preventDefault();
      const post_id = params.post_id;

      const updatedPost = {
          records: [
            {
              id: post_id,
              fields: {
                title,
                author,
                posts
              }
            }
          ]
      }
      await axios.put(API_URL1, updatedPost);
  
      setRedirectHome(true);
      setToggleFetch(!toggleFetch);
  }

  if (redirectHome) {
    return <Redirect to="/"/>
}

  return (
    <div className="form">
            <form onSubmit={formType === 'post' ? handlePostRequest : handlePutRequest}>
                <label htmlFor="title">Title: </label>
        <input value={title}type="text" id="title" onChange={(ev) => setTitle(ev.target.value)}/>

                <label htmlFor="posts">Posts: </label>
                <input value={posts}type="text" id="posts" onChange={(ev) => setPosts(ev.target.value)}/>

                <label htmlFor="author">Author: </label>
                <input value={author} type="text" id="author" onChange={(ev) => setAuthor(ev.target.value)}/>

                <input type="submit" />
      </form>

    </div>
  )
} 

export default Form;