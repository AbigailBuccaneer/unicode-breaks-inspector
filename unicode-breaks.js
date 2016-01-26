var grapheme_breaker = require('grapheme-breaker')
var $ = require('jquery')
require('js-codepoints')

$(function(ready) {

$('#input').on('input', function(event) {
  var breaks = grapheme_breaker.break(event.target.value);
  $('#output').html("");
  var num_codepoints = 0;
  for (i = 0; i < breaks.length; ++i) {
    var span = $("<span class='grapheme-cluster'></span>").appendTo('#output');
    var codepoints = breaks[i].toArrayOfUChars();
    num_codepoints = codepoints.length;
    for (j = 0; j < codepoints.length; ++j) {
      var ruby = $("<ruby class='codepoint'></ruby>").appendTo(span);
      ruby.append(codepoints[j]);
      codepoint = "U+" + ("0000" + codepoints[j].codePointAt(0).toString(16)).substr(-4).toUpperCase();
      $("<rt></rt>").text(codepoint).appendTo(ruby);
    }
  }

});

$('#input').trigger('input');

});
