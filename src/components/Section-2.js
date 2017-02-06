
import React, {Component} from 'react';
import Navbar1 from './section-1';
import Typist from 'react-typist';






class Section2 extends Component {
    render() {
        return (
        <div className="wrapper">
          <Navbar1 />
          <div className='container'>
              <div className='row'>
                  <div className='col-sm-12 greeting'>
                    <Typist className="MyTypist">
                      Kyle Plaugher<br />
                      <hr />
                      Full-stack Developer<br />
                      Atlanta, GA<br />
                    </Typist>
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
