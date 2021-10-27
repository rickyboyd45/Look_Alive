import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const API_URL2 = 'https://api.airtable.com/v0/app2HujIdBEExdRd1/Events?api_key=keymcQ6E3LYsrFEc7'

const Events = () => {
  const [concerts, setConcerts] = useState({})
  
useEffect(() => {
  fetch("https://api.airtable.com/v0/app2HujIdBEExdRd1/Events?api_key=keymcQ6E3LYsrFEc7")
    .then((res) => res.json())
    .then((data) => {
      setConcerts(data.records);
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}, []);



return (
  <div>

{concerts.length >= 0 ? (
      concerts.map((record) => (

        <img src={record.fields.imageURL[0].filename} alt={record.fields.event}/>

          // <p>{record.fields.event}</p>
      
      ))
    ) : (
      <p>Fetching Data...</p>
    )}


    </div>
  );
};

export default Events;