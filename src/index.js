import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import Home from './components/home.jsx';
import Calc from './components/calculator.jsx';
import TwitchFeat from  './components/twitch/twitchFeatured.jsx';
import UserTwitch from './components/twitch/twitchUserRes.jsx'

import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import './css/index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="calculator" component={Calc}/>
      {/* <Route path="weather" component={WeatherSearch}>
        <Route path=":city" component={WeatherDisplay}/>
      </Route> */}
      <Route path="twitch" component={TwitchFeat}>
        <Route path=":username" component={UserTwitch}/>
      </Route>
      {/* <Route path="github" component={GitSearch}>
        <Route path=":username" component={UserpageGit}>
          <Route path="repos" component={Repos}/>
          <Route path="following" component={Following}/>
        </Route>
      </Route> */}
    </Route>
  </Router>,
  document.getElementById('root')
);
