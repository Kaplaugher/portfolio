
import React, {Component} from 'react';
import Navbar1 from './section-1';



class Section3 extends Component {
    render() {
        return (
      <div className="wrapper">
        <Navbar1 />
        <div className="container-fluid">
          <div className='row'>
            <div className="col-xs-12 col-sm-6 aboutMe">
              <h1>About me</h1>
              <p id="about-me"> My name is Kyle Plaugher, I am a Full-Stack Developer based in Atlanta, Ga.
                I enjoy all things tech, especially app design and video games! When I am not on the computer, you can usually find me at the gym or catching up on my favorite books. I’m excited for new job opportunities and the chance to further my career and skills. Feel free to contact me at anytime! It would be great to hear from you.</p>
            </div>
            <div className='col-xs-12 col-sm-6 pictureOfMe'>
              <img id="me" src="kylepic.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
        )
    }
}

export default Section3
