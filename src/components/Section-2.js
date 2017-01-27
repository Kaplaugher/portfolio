
import React, {Component} from 'react';
import Navbar1 from './section-1';




class Section2 extends Component {
    render() {
        return (
        <div className="wrapper">
          <Navbar1 />
          <div className='container'>
              <div className='row'>
                  <div className='col-sm-12 greeting'>
                      Kyle Plaugher<br />
                      <hr />
                      Full-stack Developer<br />
                      Atlanta, GA<br />
                    <button type="button" className="menu-down">
                        <span className="glyphicon glyphicon-menu-down" aria-hidden="true"></span>
                    </button>
                  </div>
              </div>
          </div>
        </div>
        )
    }
}

export default Section2
