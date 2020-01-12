import React from 'react';

import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="transparent" variant="dark">
      <Navbar.Brand href="#home">
        <img
          src="/logo.png"
          className="d-inline-block align-top w-50"
          alt="Star Wars"
        />
      </Navbar.Brand>
      <Nav className="mr-auto">
      <Nav.Link href="#people">People</Nav.Link>
        <Nav.Link href="#planets">Planets</Nav.Link>
        <Nav.Link href="#starships">Starships</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
