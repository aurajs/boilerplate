define(['text!./awesome.hbs'], function(template) {
  return {
    initialize: function() {
      this.html(template);
    }
  };
});
