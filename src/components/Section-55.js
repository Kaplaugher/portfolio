import React, {Component} from 'react';
import Navbar1 from './section-1';



class Section55 extends Component {
    render() {
        return (
      <div className="wrapper">
        <Navbar1 />
        <div className="container-fluid">
          <div className='row'>
            <div className="col-xs-12 portfolio2">
              <h1 id="portfolio-title2">Recent Projects</h1>

            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-md-6 project1">
              <h1 className="project1-title">
                Geography Game
              </h1>
              <a href="http://kapcode.me/geographygame" target="_blank"><img src="geoScreenShot.png" id="project11" />
              </a>
              <p className="project-description">This is a geography game where you are asked a question and then you have to locate the answer (in the form of a marker) on the map. The catch is that the marker does not appear until you zoom into a specific level of the map. Once you locate the marker you can click on it. An info window will appear letting you know the name of the location you have found. You can then click the button within the info window to progress through the game. Built with React.js, NPM modules, Google Maps API and JavaScript.</p>

            </div>
            <div className="col-xs-12 col-md-6 project2">
              <h1 className="project2-title">
                Movie App
              </h1>
              <a href="http://kapcode.me/movieapp" target="_blank"><img src="movieScreenShot.png" id="project22" />
              </a>
              <p className="project-description">This is a Movie App that makes API calls to The Movie Database and returns data that I use to build the page. From the Nav Bar you are able to browse Now Playing, Upcoming, Popular, and Top Rated movies. Built with HTML, CSS, AJAX, JavaScript and jQuery.</p>

            </div>

          </div>
        </div>
      </div>
        )
    }
}

export default Section55
