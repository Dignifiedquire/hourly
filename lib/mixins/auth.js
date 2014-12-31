// Auth Mixin
// ==========


module.exports = {
  statics: {
    willTransitionTo: function(transition) {
      if (true) {
        transition.redirect('/login');
      }
    }
  }
};
