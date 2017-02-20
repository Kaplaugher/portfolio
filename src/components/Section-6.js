import React, {Component} from 'react';
import Navbar1 from './section-1';
import {Button} from 'react-bootstrap';


class Section6 extends Component {
    render() {
        return (
            <div className="wrapper">
                <Navbar1/>
                  <div className="container-fluid">

                      <div className="row">
                          <div className="col-lg-8 col-lg-offset-2 text-center">
                              <h2 id="contact-info">Contact Info</h2>
                              <hr className="small"/>
                              <p>
                                  <a id="email" href="mailto:kaplaugher94@gmail.com">kaplaugher94@gmail.com</a>
                              </p>
                              <ul className="list-inline contact-buttons">
                                  <li>
                                      <a target="_blank" href="https://github.com/Kaplaugher" className="btn btn-default btn-lg" id="github">
                                          <i className="fa fa-github fa-fw"></i>
                                          <span className="network-name">Github</span>
                                      </a>
                                  </li>
                                  <li>
                                      <a target="_blank" href="https://www.linkedin.com/in/kyle-plaugher-248987120/" className="btn btn-default btn-lg" id="linkedin">
                                          <i className="fa fa-linkedin-square fa-fw"></i>
                                          <span className="network-name">LinkedIn</span>
                                      </a>
                                  </li>

                              </ul>
                          </div>
                      </div>
                  </div>
            </div>
        )
    }
}

export default Section6
