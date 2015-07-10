$(document).ready(function() {
  $("#interests").click(function() {
    $("#interests").next().toggle();
  });
  
  $("#education").click(function() {
    $("#education").next().toggle();
  });

  $("#work").click(function() {
    $("#work").next().toggle();
  });

  $("#goals").click(function() {
    $("#goals").next().toggle();
  });
})
