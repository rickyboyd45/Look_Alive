import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Dropbox = () => {

  return (
    <div>
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
    </div>
  )
} 

export default Dropbox;