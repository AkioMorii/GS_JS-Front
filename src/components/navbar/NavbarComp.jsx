import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../home/Home";
import Contato from "../contato/Contato";
import Produto from "../produto/Produto";
import Login from '../login/Login';
import Protect from './ProtectedRoutes';
import Cadastro from '../cadastro/Cadastro';
import './Navbar.css';

export default class NavbarComp extends Component {
  render() {
    const logout = () => {
    //limpa a sessáo
    sessionStorage.clear();
    window.location.href = '/Login';
  }

  return (
    <Router>
      <div>
        <Protect>
          <Navbar collapseOnSelect expand="lg">
            <Navbar.Brand className="Logo">HealSphere</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="LinksConteiner">
                <Nav.Link className="NavLinks" as={Link} to="/home">Home</Nav.Link>
                <Nav.Link className="NavLinks" as={Link} to="/contato">Contato</Nav.Link>
                <Nav.Link className="NavLinks" as={Link} to="/produto">Produto</Nav.Link>
                <Nav.Link className="NavLinks" onClick={logout}>Sair</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Protect>
      </div>
      <div>
        <Switch>
          <Route exact path="/Produto">
            <Protect>
              <Produto />
            </Protect>
          </Route>            
          <Route exact path="/Contato">
            <Protect>
              <Contato />
            </Protect>
          </Route>
          <Route exact path="/Login">
            <Login />
          </Route>
          <Route exact path="/cadastro">
            <Cadastro />
          </Route>
          <Route exact path="/Home">
            <Protect><Home /></Protect>
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
 }
}
