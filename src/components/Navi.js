
import "bootstrap/dist/css/bootstrap.css"
import { Nav, Navbar } from 'react-bootstrap';

import './navi.css';


const Navi = () => {

  return (
    <div>

<Navbar bg="navColor" varient="dark"
      sticky="top" expand="sm">
        
        <Navbar.Toggle />

        <Navbar.Collapse>
          <Nav >

          <Nav.Link href="/">HOME</Nav.Link>
          <Nav.Link href="about">ABOUT US</Nav.Link>
          <Nav.Link href="newpost">CREATE NEW POST</Nav.Link>
          <Nav.Link href="events">EVENTS</Nav.Link>

          </Nav>
        </Navbar.Collapse>

        <Navbar.Brand href="/">
          LOOK ALIVE
        </Navbar.Brand>

      </Navbar>

      

    </div>
  )
} 

export default Navi;