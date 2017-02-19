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
              <p className="project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam laoreet arcu in nisi faucibus, eget pulvinar ex rutrum. Nullam facilisis dui at sodales bibendum. Vestibulum posuere pharetra nisi.  Pellentesque sit amet imperdiet augue, sed luctus lectus.</p>

            </div>
            <div className="col-xs-12 col-md-6 project2">
              <h1 className="project2-title">
                Movie App
              </h1>
              <a href="http://kapcode.me/movieapp" target="_blank"><img src="movieScreenShot.png" id="project22" />
              </a>
              <p className="project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam laoreet arcu in nisi faucibus, eget pulvinar ex rutrum. Nullam facilisis dui at sodales bibendum. Vestibulum posuere pharetra nisi.  Pellentesque sit amet imperdiet augue, sed luctus lectus.</p>

            </div>

          </div>
        </div>
      </div>
        )
    }
}

export default Section55
