$(document).ready(function() {

  //Slideout Menu
  var slideout = new Slideout({
    'panel': document.getElementById('panel'),
    'menu': document.getElementById('menu'),
    'padding': 256,
    'tolerance': 70
  });
    
  // Slideout Menu Toggle button
  document.querySelector('.slideout-toggle').addEventListener('click', function() {
    slideout.toggle();
  });

});