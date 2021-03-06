import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Router, Route, hashHistory } from 'react-router'
import Section33 from './components/Section-33';
import Section44 from './components/Section-44';
import Section55 from './components/Section-55';
import Section66 from './components/Section-66';






ReactDOM.render(
  <Router history={hashHistory}>
		<Route path="/" component={App} />
		<Route path="about" component={Section33} />
    <Route path="experience" component={Section44} />
    <Route path="portfolio" component={Section55} />
    <Route path="contact" component={Section66} />

	</Router>,
  document.getElementById('root')
);
