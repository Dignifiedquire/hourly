// Logout
// ======


// Dependencies
// ------------

var React = require('react');


module.exports = React.createClass({
  statics: {
    willTransitionTo: function(transition) {
      transition.redirect('/login');
    }
  },

  componentDidMount: function() {
    console.log('Log out');
  },

  render: function() {}
});
