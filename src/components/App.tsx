import React from 'react';
import { Container } from "react-bootstrap"
import { Navbar, Nav, Form, Button, FormControl} from 'react-bootstrap';
import AuthProvider from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Router from 'react-dom';
import { Login }  from './Login'
import { Signup } from './Signup'
import { Dashboard } from './Dashboard'
import ForgetPassword from "./ForgetPassword"

function App() {
  return (
    <>
      <AuthProvider>
      <Navbar bg="light" variant="light">
          <Navbar.Brand href='/'>Firebase App</Navbar.Brand>
          <Nav className="mr-auto">
          <Nav.Link href="/login" component={Login}>Login</Nav.Link>
          <Nav.Link href="/signup" component={Signup}>Signup</Nav.Link>
          <Nav.Link href="/dashboard" component={Dashboard}>Dashboard></Nav.Link>
          <Nav.Link href='/forgot-password' component={ForgotPassword}></Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
        </Form>
      </Navbar>
      </AuthProvider>
    </>

  )

}

export default App;