define(['text!./aurahub.hbs'], function(template) {
  return {
    initialize: function() {
      this.html(template);
    }
  }
});
