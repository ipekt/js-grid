
$(document).ready(function() {
  var grid = 8;

  function bindColourChange(square) {
    square.mouseover(function() {
      $(this).removeClass("square").addClass("changeColor");
    });
  }

  function makeGrid(grid) {
    var rows, columns = 0;
    var row, square, width;
    for (rows = 0; rows < grid; rows++) {
      width = (480 - grid - 1) / grid;
      row = $('<div class="row"' + 'style=height:' + width + 'px;"></div>');
      for (columns = 0; columns < grid; columns++) {
        square = $('<div class="square"' + 'style=width:' + width + 'px;' + 'height:' + width + 'px;"></div>');
        bindColourChange(square);
        row.append(square);
      };
      $('.container').append(row);
    }
  }

  $("#changeGrid").on('click', function() {
    var gridNum = prompt("Please enter grid number you would like", "8");
    $('.container .row').remove();
    makeGrid(gridNum);
  });

  makeGrid(grid);
 });