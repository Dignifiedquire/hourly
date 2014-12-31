/** @flow */

// Dependencies
// ------------

var React = require('react');
var mui = require('material-ui');
var AppBar = mui.AppBar;
var AppCanvas = mui.AppCanvas;
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;


module.exports = React.createClass({

  render: function() {
    return (
      <AppCanvas predefinedLayout={1} className="app">
        <AppBar
          className="mui-dark-theme"
          title="Hourly"
          zDepth={0}>
        </AppBar>
        <RouteHandler/>
      </AppCanvas>
    );
  }
});
