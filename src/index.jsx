import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import App from './components/App';
import Voting from './components/Voting';
import Results from './components/Results';

const pair = ['Trainspotting', '28 Days Later'];

const routes = <Route components={App}>
  <Route path="/results" components={Results}/>
  <Route path="/" component={Voting}/>
</Route>

ReactDOM.render(
  <Router history={hashHistory}>{routes}</Router>,
  document.getElementById('app')
);
