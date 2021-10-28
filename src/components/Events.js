import React, { useEffect, useState } from "react";


const API_URL2 = 'https://api.airtable.com/v0/app2HujIdBEExdRd1/Events?api_key=keymcQ6E3LYsrFEc7'

const Events = () => {
  const [concerts, setConcerts] = useState({})
  
useEffect(() => {
  fetch(`${API_URL2}`)
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
    <div >

{concerts.length > 0 ? (
  concerts.map((record) => (
        
    <div>
      <a href={record.fields.ticketInfo} key={record.id}>
      <img src={record.fields.imageURL[0].url} alt={record.fields.event}/>
      </a>
      <h1>Artist: {record.fields.event}</h1>
      <h2>Venue: {record.fields.venue}</h2>
      <h3>Date: {record.fields.date}</h3>
    </div>
  ))
    ) : (

      <p>Fetching Data...</p>
    
  )}

    </div>
  );
};

export default Events;