// Login
// =====


// Dependencies
// ------------

var React = require('react');
var Router = require('react-router');
var mui = require('material-ui');
var Paper = mui.Paper;
var Input = mui.Input;
var FlatButton = mui.FlatButton;


module.exports = React.createClass({
  mixins: [Router.Navigation],

  render: function() {
    return (
      <Paper zDepth={1} className="login-form">
        <Input ref="user" type="text" name="user" placeholder="Login" />
        <Input ref="password" type="password" name="password" placeholder="Password" />
        <FlatButton label="Registrieren" />
        <FlatButton label="Einloggen" primary={true} />
      </Paper>
    );
  }
});
