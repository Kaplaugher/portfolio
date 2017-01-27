import React, {Component} from 'react';
import {Navbar, NavItem, Nav} from 'react-bootstrap';


class Navbar1 extends Component {
    render() {
        return (
              <Navbar id="nav-bar" fixedTop inverse collapseOnSelect>
                  <Navbar.Header>
                      <Navbar.Brand className="nav-brand">
                          <a href="#"></a>
                          <span className="title">
                              Kyle Plaugher
                          </span>
                      </Navbar.Brand>
                      <Navbar.Toggle/>
                  </Navbar.Header>
                  <Navbar.Collapse>

                      <Nav pullRight>
                        <NavItem eventKey={1} className="nav-tab">
                            About
                        </NavItem>
                        <NavItem eventKey={2} className="nav-tab">
                            Experience
                        </NavItem>
                          <NavItem eventKey={3} className="nav-tab">
                            Portfolio
                          </NavItem>
                          <NavItem eventKey={4} className="nav-tab">
                            Contact
                          </NavItem>
                      </Nav>
                  </Navbar.Collapse>
              </Navbar>

        )
    }
}

export default Navbar1
