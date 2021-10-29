import './App.css';
import "bootstrap/dist/css/bootstrap.css"

import React from 'react';

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
    <div className="image1">
        <img src="https://www.washington.org/sites/default/files/styles/generic_hero_banner_1440_x_600/public/glass_animals_at_930_club_lisa_walker_credit.jpg?h=199d8c1f&itok=ksRkQb40" class="img-fluid" alt="Responsive image">
        </img>
        </div>

      <div className="post2">
      {posts.map((post) => (
          <Post 
          key={post.id}
          postData={post}
          toggleFetch={toggleFetch}
          setToggleFetch={setToggleFetch}
        />
      ))}
      </div>  
    </Route>

    <Route path="/newpost" exact>
    <div className="image2">
        <img src="https://www.washington.org/sites/default/files/styles/generic_hero_banner_1440_x_600/public/glass_animals_at_930_club_lisa_walker_credit.jpg?h=199d8c1f&itok=ksRkQb40" class="img-fluid" alt="Responsive image">
        </img>
        </div>

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
      <div className="image3">
        <img src="https://www.washington.org/sites/default/files/styles/generic_hero_banner_1440_x_600/public/glass_animals_at_930_club_lisa_walker_credit.jpg?h=199d8c1f&itok=ksRkQb40" class="img-fluid" alt="Responsive image">
        </img>
      </div>
        
      <About />
    </Route>
      
    <Route path="/events" exact>
      <Events />
    </Route>
      
      <Footer />

      </div>
  );
}

export default App;
