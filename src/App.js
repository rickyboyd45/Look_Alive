import './App.css';
import "bootstrap/dist/css/bootstrap.css"

import axios from "axios";

import { useEffect, useState } from 'react';
import { Route } from "react-router-dom";

import Form from "./components/Form";
import Footer from "./components/Footer";
import Post from './components/Post';
import About from './components/About';
import Events from './components/Events';
import Navi from "./components/Navi";



const API_URL = 'https://api.airtable.com/v0/app2HujIdBEExdRd1/Post?api_key=keymcQ6E3LYsrFEc7'


function App() {
  const [posts, setPosts] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(true);

  useEffect(() => {

    const getPosts = async () => {
      const resp = await axios.get(API_URL);
      setPosts(resp.data.records);
    }

    getPosts();
  }, [toggleFetch]);

  return (
    <div className="App">

      <Navi />

        <Route path="/" exact>
      {posts.map((post) => (
          <Post 
          key={post.id}
          postData={post}
          toggleFetch={toggleFetch}
          setToggleFetch={setToggleFetch}
        />
      ))}
      </Route>

      <Route path="/newpost" exact>
        <Form 
          formType={'post'}
          toggleFetch={toggleFetch}
          setToggleFetch={setToggleFetch}
        />
      </Route>

      <Route path="/edit/:post_id" exact>
        <Form
          formType={'put'}
          toggleFetch={toggleFetch}
          setToggleFetch={setToggleFetch}
        />
      </Route>

    <Route path="/about">
      <About/>
    </Route>
      
    <Route path="/events" exact>
        <Events />
    </Route>
      

      <Footer />

    </div>
  );
}

export default App;
