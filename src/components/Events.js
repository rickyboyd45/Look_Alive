import React from "react";

import { useParams } from 'react-router-dom'

// const API_URL2 = 'https://api.airtable.com/v0/app2HujIdBEExdRd1/Events?api_key=keymcQ6E3LYsrFEc7'

const Events = ({ concert }) => {
  const params = useParams()
  const liveShow = concert.find((concert) => concert.event === params.event)


return (
    <div>

      <div className='concert-img' alt="">
        <img src={liveShow?.imageURL}  alt=""/>
      </div>

    </div>
  );
}


export default Events;