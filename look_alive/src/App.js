import './App.css';

import Form from "./components/Form"
import Dropbox from './components/Dropbox';
import Events from "./components/Events"
import Feed from "./components/Feed"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About";

import { Route, Link } from 'react-router-dom';




function App() {
  return (
    <div className="App">

      <Header />

      <Route path="/">
      <Home />
      </Route>

      <Route>
      <Link to="/about">
        <h3>ABOUT</h3>
        </Link>
        <About/>
      </Route>
      
      <Route path="/" exact>
      <Dropbox />
      </Route>

      <Feed />

      <Route path="/events">
      <Events />
      </Route>

      <Form />

      <Footer />

    </div>
  );
}

export default App;
