const gridColors = ['#BCF238', '#FFDF15', '#E6AC40', '#FC813A', '#F24238', '#934238'];

if ($(document).width() > 800) {
  $('ul#grid li').css('background-color', function(i) {
    return gridColors[i];
  })
}