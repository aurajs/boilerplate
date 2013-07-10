require(['bower_components/aura/lib/aura'], function(Aura) {
  Aura()
    .use('extensions/aura-awesome-extension')
    .start({ components: 'body' }).then(function() {
      console.warn('Aura started...');
    });
});
