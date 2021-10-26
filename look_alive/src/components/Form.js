import { useState } from 'react';
import { Route, Link } from "react-router-dom";

import axios from 'axios';

const API_URL = 'https://api.airtable.com/v0/app2HujIdBEExdRd1/Table%201?api_key=keymcQ6E3LYsrFEc7'

const Form = ({ props, toggleFetch, setToggleFetch }) => {
  const [title, setTitle] = useState('');
  const [posts, setPosts] = useState('');
  const [author, setAuthor] = useState('');
  const params = useParams();

  const handlePostRequest = async (ev) => {
    ev.preventDefault();

    const newPosts = {
      'records': [
        {
          'fields': {
            'title': title,
            'posts': posts,
            'author': author
          }
        }
      ]
    }

    await axios.post(API_URL, newPosts);

    setToggleFetch(!toggleFetch);
  }

  return (
    <div>
      <form onSubmit={formType === 'post' ? handlePostRequest : handlePutRequest}>

        <label htmlFor="title">Title: </label>
          <input type="text" id="title" onChange={(ev) => setTitle(ev.target.value)}/>

        <label htmlFor="post">Post: </label>
        <input type="text" id="post" onChange={(ev) => setPosts(ev.target.value)} />
        
        <label htmlFor="author">Author: </label>
          <input type="text" id="author" onChange={(ev) => setAuthor(ev.target.value)}/>

        <input type="submit" />

      </form>

    </div>
  )
} 

export default Form;