import React, { useEffect, useState } from "react";


const API_URL2 = 'https://api.airtable.com/v0/app2HujIdBEExdRd1/Events?api_key=keymcQ6E3LYsrFEc7'

const Events = () => {
  const [concerts, setConcerts] = useState([])
  
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
  <div>

{concerts.length > 0 ? (
      concerts.map((record) => (
        
        <p>{record.fields.event, record.fields.ticketInfo}</p>
      
      ))
    ) : (
      <p>Fetching Data...</p>
    )}

    </div>
  );
};

export default Events;