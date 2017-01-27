import React, {Component} from 'react';
import './App.css';
import Navbar1 from './components/section-1';
import Section2 from './components/Section-2';
import Section3 from './components/Section-3';
import Section4 from './components/Section-4';
import Section5 from './components/Section-5';






class App extends Component {
    render() {
        return (
          <div>
            <Navbar1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
          </div>
                )
              }
            }

            export default App
