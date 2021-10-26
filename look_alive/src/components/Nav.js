import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Nav = () => {

  return (
    <div>
      <nav>
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/newpost">NEW POST</Link>
      </nav>
    </div>
  )
} 

export default Nav;