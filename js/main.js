

$(document).ready(function(){ 
  var header = $('.top-content');
  var infoblocktwo = $('.infoblock-two');
  $('.black-top').css('height', header.height().toString()).css('width', '100%').css('position', 'absolute').css('background-color', 'rgba(0,0,0,0.7)');
  $('.inner-infoblock-two').css('height', infoblocktwo.height().toString()).css('width', '100%').css('position', 'absolute').css('background-color', 'rgba(0,0,0,0.7)');
  $("#owl-example").owlCarousel({items:4});
  $('#menu').slicknav({
  	
  });
})


