import { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import React from "react";

import './events.css';

import Card from 'react-bootstrap/Card'


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
  
    <div classname="content" class="d-flex align-content-stretch flex-wrap">

{concerts.length > 0 ? (
      concerts.map((record) => (
        
    <div key={record.id}>
      
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={record.fields.imageURL[0].url} />

        <Card.Body>
          <Card.Title>Artist: {record.fields.event}</Card.Title>
        </Card.Body>

      <ul className="list-group list-group-flush">
        <li className="list-group-item">Venue: {record.fields.venue}</li>
        <li className="list-group-item">Date: {record.fields.date}</li>
      </ul>

        <Card.Body>
    <Card.Link href={record.fields.ticketInfo}>Click Here For Ticket Info</Card.Link>
            </Card.Body>
          </Card>

    </div>
  ))
    ) : (

      <p>Retrieving Data...</p>
    
  )}

    </div>
  );
};

export default Events;