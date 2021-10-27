import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const API_URL2 = 'https://api.airtable.com/v0/app2HujIdBEExdRd1/Events?api_key=keymcQ6E3LYsrFEc7'

const Feed = () => {
  const [concert, setConcert] = useState([])
  
  useEffect(() => {
    const fetchConcert = async () => {
      const resp = await axios.get(API_URL2);
      setConcert(resp.data);
      console.log(resp.data)
    };
    fetchConcert();
  }, [])

return (
    <div>
    {concert.map((music) => (
      <div>
          <Link to={`${music.event}`} >
          <img src={`${music.imageURL}`}></img>
        </Link>
      </div>
    ))
    }

    </div>
  );
};

export default Feed;