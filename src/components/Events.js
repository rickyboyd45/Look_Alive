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
      <p>Click Photo For Ticket Info</p>
      <h2>Artist: {record.fields.event}</h2>
      <h3>Venue: {record.fields.venue}</h3>
      <h4>Date: {record.fields.date}</h4>
    </div>
  ))
    ) : (

      <p>Retrieving Data...</p>
    
  )}

    </div>
  );
};

export default Events;