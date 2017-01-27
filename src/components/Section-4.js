import React, {Component} from 'react';
import Navbar1 from './section-1';


class Section4 extends Component {
    render() {
        return (
      <div className="wrapper">
        <Navbar1 />
        <div className="container-fluid">
          <div className='row'>
            <div className="col-xs-12 col-sm-6 whatIKnow">
              <div className="skill-title">
                What I Know
              </div>
              <div className="skill-grid skills">
                <div className="icon-grid">
                  <i className="devicon-javascript-plain"></i>
                </div>
                <div className="icon-grid">
                  <i className="devicon-bootstrap-plain-wordmark"></i>
                </div>
                <div className="icon-grid">
                  <i className="devicon-css3-plain-wordmark"></i>
                </div>
                <div className="icon-grid">
                  <i className="devicon-jquery-plain-wordmark"></i>
                </div>
                <div className="icon-grid">
                  <i className="devicon-nodejs-plain-wordmark"></i>
                </div>
                <div className="icon-grid">
                  <i className="devicon-react-original-wordmark"></i>
                </div>
                <div className="icon-grid">
                  <i className="devicon-amazonwebservices-plain-wordmark"></i>
                </div>
                <div className="icon-grid">
                  <i className="devicon-linux-plain"></i>
                </div>
                <div className="icon-grid">
                  <i className="devicon-trello-plain-wordmark"></i>
                </div>


              </div>
            </div>
            <div className='col-xs-12 col-sm-6 whatIAmLearning'>
              <div className="skill-title">
                What I am Learning
              </div>
              <div className="skill-grid skills">
                <div className="icon-grid">
                  <i className="devicon-postgresql-plain-wordmark"></i>
                </div>
                <div className="icon-grid">
                  <i className="devicon-sass-original"></i>
                </div>
                <div className="icon-grid">
                  <i className="devicon-python-plain-wordmark"></i>
                </div>
                <div className="icon-grid">
                  <i className="devicon-wordpress-plain-wordmark"></i>
                </div>
                <div className="icon-grid">
                  <i className="devicon-mysql-plain-wordmark"></i>
                </div>
                <div className="icon-grid">
                  <i className="devicon-java-plain-wordmark"></i>
                </div>
                <div className="icon-grid">
                  <i className="devicon-apache-line-wordmark"></i>
                </div>
                <div className="icon-grid">
                  <i className="devicon-coffeescript-original-wordmark"></i>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
        )
    }
}

export default Section4
