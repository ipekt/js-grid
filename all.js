// make 16 x 16 grid
$(document).ready(function() {
  var j = 64;
  for(var i = 0; i < j - 1; i++) {
    $(".container").append('<div class="square"></div>');
  };
  $(".square").mouseover(function() {
    $(this).removeClass("square").addClass("changeColor");
  });
 });