import React, {Component} from 'react';
import Navbar1 from './section-1';



class Section33 extends Component {
    render() {
        return (
      <div className="wrapper">
        <Navbar1 />
        <div className="container-fluid">
          <div className='row'>
            <div className="col-xs-12 aboutMe33">
              <h1 className="about-me">About me</h1>
              <p className="para-me">My name is Kyle Plaugher, I am a Full-Stack Developer based in Atlanta, Ga.
                I enjoy all things tech, especially app design and video games! When I am not on the computer, you can usually find me at the gym or catching up on my favorite books. I’m excited for new job opportunities and the chance to further my career and skills. Feel free to contact me at anytime! It would be great to hear from you.</p>
              <img id="me33" src="kylepic.jpg" alt="" />
            </div>

          </div>
        </div>
      </div>
        )
    }
}

export default Section33
