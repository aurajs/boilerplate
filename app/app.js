define(['components/aura/lib/aura'], function(Aura) {
  Aura({ }).start({ widgets: 'body' }).then(function() {
    console.warn('aura started...');
  });
});