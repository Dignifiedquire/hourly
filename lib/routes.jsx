// Routes
// ======


// Dependencies
// ------------

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var App = require('./components/app');
var Users = require('./components/users');
var User = require('./components/user');
var UserCreate = require('./components/user-create');
var UserSettings = require('./components/user-settings');
var Dashboard = require('./components/dashboard');

module.exports = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute handler={Users}>
      <Route name="user" path=":user" handler={User}>
        <DefaultRoute handler={Dashboard}/>
        <Route name="settings" path="/settings" handler={UserSettings}/>
      </Route>
      <Route name="createUser" path="create" handler={UserCreate}/>
    </DefaultRoute>
  </Route>
);
