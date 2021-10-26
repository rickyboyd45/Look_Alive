import './App.css';

import Form from "./components/Form"
import Dropbox from './components/Dropbox';
import Events from "./components/Events"
import Feed from "./components/Feed"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About";

import axios from 'axios';
import { useEffect, useState } from 'react';

import { Route, Link } from 'react-router-dom';

const API_URL = 'https://api.airtable.com/v0/appeOyl9E2Y6Dvsph/Table%201?api_key=keyEjvYopYJCZ2c7b'

function App() {
  const [posts, setPosts] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(true);

  useEffect(() => {
    console.log('Getting Blog Posts');

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

      <Route path="/">
      <Home />
      </Route>

      <Route>
      <About/>
      </Route>
      
      <Route path="/" exact>
      <Dropbox />
      </Route>

      <Feed />

      <Route path="/events">
      <Events />
      </Route>

      <Route path="/" exact>

        {posts.map((post) => (

          <Feed
            key={post.id}
            postData={post}
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
