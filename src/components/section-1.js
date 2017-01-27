import React, {Component} from 'react';
import {Navbar, NavItem, Nav} from 'react-bootstrap';
import {Link} from 'react-router';



class Navbar1 extends Component {
    render() {
        return (
              <Navbar id="nav-bar" fixedTop inverse collapseOnSelect>
                  <Navbar.Header>
                      <Navbar.Brand className="nav-brand">
                          <a href="#"></a>
                          <span className="title"><Link to="/" activeClassName="active"></Link>
                              Kyle Plaugher
                          </span>
                      </Navbar.Brand>
                      <Navbar.Toggle/>
                  </Navbar.Header>
                  <Navbar.Collapse>

                      <Nav pullRight>
                        <NavItem eventKey={1}  className="nav-tab"><Link to="home" activeClassName="active">Home</Link>

                        </NavItem>
                        <NavItem eventKey={2}  className="nav-tab"><Link to="about" activeClassName="active">About</Link>

                        </NavItem>
                        <NavItem eventKey={3} className="nav-tab"><Link to="experience" activeClassName="active">Experience</Link>

                        </NavItem>
                          <NavItem eventKey={4} className="nav-tab"><Link to="portfolio" activeClassName="active">Portfolio</Link>

                          </NavItem>
                          <NavItem eventKey={5} className="nav-tab"><Link to="contact" activeClassName="active">Contact</Link>

                          </NavItem>
                      </Nav>
                  </Navbar.Collapse>
              </Navbar>

        )
    }
}

export default Navbar1
