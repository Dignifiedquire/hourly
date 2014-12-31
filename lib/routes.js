// Routes
// ======


// Dependencies
// ------------

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var App = require('./components/app');
var Login = require('./components/login');
var Logout = require('./components/logout');
var Dashboard = require('./components/dashboard');

module.exports = (
  <Route name="app" path="/" handler={App}>
     <Route name="login" handler={Login}/>
     <Route name="logout" handler={Logout}/>
     <DefaultRoute handler={Dashboard}/>
  </Route>
);
