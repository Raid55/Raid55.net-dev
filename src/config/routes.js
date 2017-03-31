import App from './App.js';
import Home from './components/home.jsx';
import Calc from './components/calculator.jsx';
import TwitchFeat from  './components/twitch/twitchFeatured.jsx';
import UserTwitch from './components/twitch/oldTwitchProfile.jsx'

module.exports= {
  path: '/',
  component: App,
  indexRoute: { component: Home },
  childRoutes: [
    { path: 'about', component: About },
    { path: 'inbox', component: Inbox },
  ]
}
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
</Router>

//THIS IS A TEST PAGE AND IS FOR TESTING PURPOSES ONLY AT THIS TIME
