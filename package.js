Package.describe({
  summary: "jQuery validation plugin by J�rn Zaefferer, repackaged for Meteor."
});

Package.on_use(function(api){
  
  api.use('jquery', 'client');

  api.add_files([
    'lib/jquery-validation/jquery.validate.js',
  ], 'client');
  
});