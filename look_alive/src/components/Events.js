import React from "react";

const Events = ({ event, date, venue, ticketInfo, imageURL }) => (
  <div className="card">
    <img className="card-img-top" src={imageURL[0].url} alt="Event Poster" />
    <div className="card-body">
      <h5 className="card-title">{event}</h5>
      <p className="card-text">{venue}</p>
      <p className="card-text">{ticketInfo}</p>
      <p className="card-text">
      <small className="text-muted">{date}</small>
      </p>
    </div>
  </div>
);


export default Events;