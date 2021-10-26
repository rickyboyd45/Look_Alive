import Events from "./components/Events"

import { Route } from 'react-router-dom';

const Feed = () => {

  return (
    <div>

<Route path="/">
      {/* <form onSubmit={this.handleSubmit}> */}
        <label>
          Choose City:
            <select>
              <option value="Atlanta">Atlanta</option>
              <option value="Memphis">Memphis</option>
              <option value="Miami">Miami</option>
              <option value="Los Angeles">Los Angeles</option>
            </select>
        </label>
        <input type="submit" value="Submit" />
      {/* </form> */}
      </Route>

      <Route path="/events">
      <Events />
      </Route>

    </div>
  )
} 

export default Feed;