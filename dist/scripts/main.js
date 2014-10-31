// Tab Functionality
$('#about').click(function(){
  $('.tabs .open').removeClass('open');
  $(this).addClass('open');
  $('.about').addClass('open');
});

$('#employees').click(function(){
  $('.tabs .open').removeClass('open');
  $(this).addClass('open');
  $('.employees').addClass('open');
});

$('#clients').click(function(){
  $('.tabs .open').removeClass('open');
  $(this).addClass('open');
  $('.client').addClass('open');
});

$('#contact').click(function(){
  $('.tabs .open').removeClass('open');
  $(this).addClass('open');
  $('.contact').addClass('open');
});
//End Tabs
