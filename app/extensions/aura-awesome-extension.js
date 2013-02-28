define({
  initialize: function() {
    console.log("My Awesome extension");
  },
  afterAppStart: function() {
    console.log("The App with my awesome extension started fine");
  }
});