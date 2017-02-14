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
              <h1 id="portfolio-title2">Portfolioooooo</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam laoreet arcu in nisi faucibus, eget pulvinar ex rutrum. Nullam facilisis dui at sodales bibendum. Vestibulum posuere pharetra nisi. Proin in venenatis est, in lobortis tellus. Vestibulum nunc est, condimentum in purus et, volutpat malesuada turpis. Phasellus est augue, accumsan id ipsum vel, ullamcorper facilisis magna. Sed in magna vitae erat congue pretium ac non nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec a iaculis libero. Pellentesque quis eros nec nisl suscipit tincidunt. Pellentesque sit amet imperdiet augue, sed luctus lectus.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-md-6 project1">
              <h1 className="project1-title">
                Geography Game
              </h1>
              <img src="geoScreenShot.png" alt="" id="project11" />
              <p className="project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam laoreet arcu in nisi faucibus, eget pulvinar ex rutrum. Nullam facilisis dui at sodales bibendum. Vestibulum posuere pharetra nisi.  Pellentesque sit amet imperdiet augue, sed luctus lectus.</p>

            </div>
            <div className="col-xs-12 col-md-6 project2">
              <h1 className="project2-title">
                Movie App
              </h1>
              <img src="movieScreenShot.png" alt="" id="project22" />
              <p className="project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam laoreet arcu in nisi faucibus, eget pulvinar ex rutrum. Nullam facilisis dui at sodales bibendum. Vestibulum posuere pharetra nisi.  Pellentesque sit amet imperdiet augue, sed luctus lectus.</p>

            </div>

          </div>
        </div>
      </div>
        )
    }
}

export default Section55
