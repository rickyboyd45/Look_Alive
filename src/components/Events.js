import React from "react";
import axios from "axios";
import  { useEffect, useState } from "react";

import { useParams } from 'react-router-dom'

// const API_URL2 = 'https://api.airtable.com/v0/app2HujIdBEExdRd1/Events?api_key=keymcQ6E3LYsrFEc7'

const Events = ({ concertData }) => {
  console.log(concertData);

return (
  <div>
    <img src={concertData.fields.imageURL} alt={concertData.event}/>
    <h2>Event:{concertData.fields.event}</h2>
    <h3>Venue:{concertData.fields.venue}</h3>
    <h3>Date:{concertData.fields.date}</h3>
    <h4>More Info"Ticket URL"": {concertData.fields.ticketInfo}</h4>
    </div>
  );
}


export default Events;