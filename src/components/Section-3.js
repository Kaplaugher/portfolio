
import React, {Component} from 'react';


class Section3 extends Component {
    render() {
        return (
        <div className="container-fluid">
          <div className='row'>
            <div className="col-xs-12 col-sm-6 aboutMe">
              <h1>About me</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam laoreet arcu in nisi faucibus, eget pulvinar ex rutrum. Nullam facilisis dui at sodales bibendum. Vestibulum posuere pharetra nisi. Proin in venenatis est, in lobortis tellus. Vestibulum nunc est, condimentum in purus et, volutpat malesuada turpis. Phasellus est augue, accumsan id ipsum vel, ullamcorper facilisis magna. Sed in magna vitae erat congue pretium ac non nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec a iaculis libero. Pellentesque quis eros nec nisl suscipit tincidunt. Pellentesque sit amet imperdiet augue, sed luctus lectus.</p>
            </div>
            <div className='col-xs-12 col-sm-6 pictureOfMe'>
              <img id="me" src="http://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2016/03/09/103455746-GettyImages-512791400.600x400.jpg?v=1457542554" alt="" />
            </div>
          </div>
        </div>
        )
    }
}

export default Section3
