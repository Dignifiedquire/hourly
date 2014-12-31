/** @flow */

// Dependencies
// ------------

var PouchDB = require('pouchdb');
var React = require('react');
var mui = require('material-ui');
var AppBar = mui.AppBar;
var AppCanvas = mui.AppCanvas;

var injectTapEventPlugin = require('react-tap-event-plugin');

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();


React.render(
    <AppCanvas predefinedLayout={1}>
      <AppBar
        className="mui-dark-theme"
        title="Hourly"
        zDepth={0}>
      </AppBar>

      <div className="footer full-width-section mui-dark-theme">
        <p>
          Hand crafted with love by the engineers at <a href="http://call-em-all.com">Call-Em-All</a> and our
          awesome <a href="https://github.com/callemall/material-ui/graphs/contributors">contributors</a>.
        </p>
      </div>
    </AppCanvas>
, document.getElementById('content'));




// DB Test
var db = new PouchDB('hourly');
