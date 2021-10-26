import './App.css';

import axios from "axios";

import { useEffect, useState } from 'react';
import { Route, Link } from "react-router-dom";

import Form from "./components/Form"
import Feed from "./components/Feed"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Post from './components/Post';

const API_URL = 'https://api.airtable.com/v0/app2HujIdBEExdRd1/Post?api_key=keymcQ6E3LYsrFEc7'


function App() {
  const [posts, setPosts] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(true);

  useEffect(() => {
    console.log('Getting Posts');

    const getPosts = async () => {
      const resp = await axios.get(API_URL);
      console.log(resp.data);
      setPosts(resp.data.records);
    }

    getPosts();
  }, [toggleFetch]);

  return (
    <div className="App">

      
      <Header />

      {/* <Feed /> */}

      <Form />

        <Route path="/" exact>
      {posts.map((blogPost) => (
          <Post 
          key={blogPost.id}
          postData={blogPost}
          toggleFetch={toggleFetch}
          setToggleFetch={setToggleFetch}
        />
      ))}
      </Route>

      <Route path="/newpost">
        <Form 
          formType={'post'}
          toggleFetch={toggleFetch}
          setToggleFetch={setToggleFetch}
        />
      </Route>

      <Route path="/edit/:blog_id">
        <Form
          formType={'put'}
          toggleFetch={toggleFetch}
          setToggleFetch={setToggleFetch}
        />
      </Route>
      

      <Footer />

    </div>
  );
}

export default App;
