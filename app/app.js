define(['components/aura/lib/aura'], function(Aura) {
  Aura()
    .use('extensions/aura-awesome-extension')
    .start({ widgets: 'body' }).then(function() {
      console.warn('Aura started...');
    });
});