// Dashboard
// =========


// Dependencies
// ------------

var React = require('react');
var Router = require('react-router');
var mui = require('material-ui');
var Auth = require('../mixins/auth');


module.exports = React.createClass({
  mixins: [ Auth ],

  render: function() {
    return (
      <p>Dashboard</p>
    );
  }
});
