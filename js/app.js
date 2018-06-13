$(function() {

  $(document).ready(function(){
    $('select').formSelect();

    $('#top-position').on('change', function(){
      var top = parseInt($(this).val());
      if($(".box .text").length > 0) {
        $(".box .text").css('top', top + '%');
      }
    });

    $('#left-position').on('change', function(){
      var left = parseInt($(this).val());
      if($(".box .text").length > 0) {
        $(".box .text").css('left', left + '%');
      }
    });

    $('#border-size').on('change', function(){
      var width = parseInt($(this).val());
      if($(".box .text").length > 0) {
        $(".box .text").css('border-width', width + 'px');
      }
    });

    $('#spacing').on('change', function(){
      var padding = parseInt($(this).val());
      if($(".box .text").length > 0) {
        $(".box .text").css('padding', padding + 'px');
      }
    });

    $('#border-color').on('change', function(){
      var color = $(this).val();
      if($(".box .text").length > 0) {
        $(".box .text").css('border-color', color);
      }
    });

    $('#bg-color').on('change', function(){
      var bgcolor = $(this).val();
      if($(".box .text").length > 0) {
        $(".box .text").css('background-color', bgcolor );
      }
    });
  });

  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  var img = new Image();
  img.crossOrigin = '';
  img.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/koala.jpg';

  img.onload = function() {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0, img.width, img.height);
  }

  var count = 0;
  $("#add-text-button").on("click", function(e){
    e.preventDefault();
    if($(".box .text").length > 0) {
      $(".box .text").remove();
      $(this).html("Add Text");
    } else {
      $("#canvas").after('<div id="editor" class="text" data-placeholder="Add Your Text Here"></div>');
      $(this).html("Remove Text");
    }
    
    var wysihtmlParserRules = {
      classes: {
        "wysiwyg-color-blue": 1,
        "wysiwyg-color-green": 1,
        "wysiwyg-color-red": 1
      },
      tags: {
        "span": 1
      }
    };
    
    var editor = new wysihtml5.Editor('editor', {
      toolbar: 'toolbar',
      parserRules:  wysihtml5ParserRules
    });
  });

  $("#remove-text").on("click", function(e){
    e.preventDefault();
    
    $(".box").find('.text').remove();
  });
 
});
