import React, { Component } from 'react';

import Events from './Events';

class Feed extends Component {

  constructor(props) {
    super(props);
    this.state = {
    events: [],
    };
  }

  componentDidMount() {
    fetch('https://api.airtable.com/v0/app2HujIdBEExdRd1/Events?api_key=keymcQ6E3LYsrFEc7')
    .then((resp) => resp.json())
      .then(data => {
      console.log(data);
      this.setState({ events: data.records });
    }).catch(err => {
      Error
    });
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <div className="card-deck">
              {this.state.events.map(event => <Events {...event.fields} /> )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Feed;