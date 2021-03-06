import React from  'react';
import {Link} from 'react-router-dom'
import { Navbar, Nav,  NavDropdown } from 'react-bootstrap'
import navbarCSS from './navbar.module.css'
import {AiOutlineCloud} from 'react-icons/ai'

const NavbarPage = () => {
  return (
    <>
      <Navbar bg="light" expand="lg" fixed="top" className={navbarCSS.mainNav}>
        <Link to="/"><img className={navbarCSS.icon} src="https://images-na.ssl-images-amazon.com/images/I/81%2BeUvsHXoL.png" alt="No Logo Available"/></Link>
          <Navbar.Brand className={navbarCSS.weatherApp} href="/">WeatherDude<AiOutlineCloud style={{color:'#6495ED'}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto" className={navbarCSS.navMain}>
              <Nav.Link href="/">Home</Nav.Link>
                <NavDropdown title="More Weather Options" id="basic-nav-dropdown" className={navbarCSS.nav}>
                <NavDropdown.Item href="/weekly">7 Day Forecast</NavDropdown.Item>
                <NavDropdown.Item href="/hourly">Hourly Forecast</NavDropdown.Item>
                <NavDropdown.Item href="https://www.wunderground.com/history">Historical data for 5 previous days</NavDropdown.Item>
                <NavDropdown.Divider/>
                <NavDropdown.Item href="/about">About</NavDropdown.Item>
              </NavDropdown>
            </Nav>
        </Navbar.Collapse>
    </Navbar> 
  </>
  )  
}

export default NavbarPage;