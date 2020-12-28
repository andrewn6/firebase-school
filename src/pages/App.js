import React from 'react';
import Navbar, {Form, Nav} from 'react-bootstrap';
import AuthProvider from "../contexts/AuthContext";
import Router from 'react-dom';
import {Login} from '../components/Login'
import { Signup } from '../components/Signup'

function App() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href='/'>Firebase App</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/login" component={Login}>Login</Nav.Link>
          <Nav.Link href="/signup" component={Signup}>Signup</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
        </Form>
      </Navbar>
    </>

  )

}

export default App;