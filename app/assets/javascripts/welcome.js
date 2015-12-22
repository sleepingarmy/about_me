$(document).ready(function(){
  $about = $('#about')

  $(document).on('click', '#volunteer_tab', function() {
    console.log('volunteer clicked');
    $('#main-div').html($('#volunteer').html());
  });

  $(document).on('click', '#about_tab', function() {
    console.log('about me clicked');
    $('#main-div').html($('#about').html());
  });

  $(document).on('click', '#work_tab', function() {
    console.log('work tab clicked');
    $('#main-div').html($('#work').html());
  });

  $(document).on('click', '#projects_tab', function() {
    console.log('projects tab clicked');
    $('#main-div').html($('#projects').html());
  });

  // ajax call to render about tab
  // ajax call to render work tab
  // ajax call to render volunteer tab
  // ajax call to render projects tab

  
  $('#more').on('click', function(e){
    e.preventDefault();
    $('#header').slideToggle();
    $('#yield').slideToggle();
    $('footer').slideToggle();
  })
});