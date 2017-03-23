import React, {Component} from 'react';
import Navbar1 from './section-1';



class Section5 extends Component {
    render() {
        return (
      <div className="wrapper">
        <Navbar1 />
        <div className="container-fluid">
          <div className='row'>
            <div className="col-xs-12 portfolio" id="portfolio-title">
              <h1 id="portfolio-title">Recent Projects</h1>

            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-md-6 project1">
              <h1 className="project1-title">
                Geography Game
              </h1>
              <a href="http://kapcode.me/geographygame" target="_blank"><img src="geoScreenShot.png" id="project1" />
              </a>
              <p className="project-description">This is a geography game where you are asked a question and then you have to locate the answer (in the form of a marker) on the map. The catch is that the marker does not appear until you zoom into a specific level of the map. Once you locate the marker you can click on it. An info window will appear letting you know the name of the location you have found. You can then click the button within the info window to progress through the game. Built with React.js, NPM modules, Google Maps API and JavaScript.</p>

            </div>
            <div className="col-xs-12 col-md-6 project2">
              <h1 className="project2-title">
                AtlantaVibes
              </h1>
              <a href="http://kapcode.me/AtlantaVibes/#/" target="_blank"><img src="atlantavibes.png" id="project2" />
              </a>
              <p className="project-description">AtlantaVibes is a Full-Stack application that aggregates data from the top ten music festivals into one easy to use website. AtlantaVibes lets users view, rate, comment and purchase tickets for their favorite festivals in Atlanta. Built with HTML, CSS, Javascript, React.js, Redux, Node.js, Express, SASS, NPM, MySQL, and AWS</p>

            </div>

          </div>
        </div>
      </div>
        )
    }
}

export default Section5
