$(function() {

  $(document).ready(function(){
    var count = 0;

    $('#add-block').on('click', function() {
			count = addTextBlock (count);
		});

		$('#remove-block').on('click', function() {
			count = removeTextBlock (count);
		});
  });

  function addTextBlock (cnt) {
    cnt = cnt + 1;
    var cta_cnt = 0;
		var textBlockEditor = '<div class="text-block-editor-' + cnt + '"><div class="col s4"><div id="toolbar-' + cnt + '"><a data-wysihtml5-command="bold">B</a><a data-wysihtml5-command="italic">I</a><a data-wysihtml5-command="underline">U</a><a data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="h1">H1</a><a data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="p">P</a><a data-wysihtml-command="foreColor" data-wysihtml-command-value="red">red</a><a data-wysihtml-command="foreColor" data-wysihtml-command-value="green">green</a><a data-wysihtml-command="foreColor" data-wysihtml-command-value="blue">blue</a></div><div class="add-cta-grp"><a id="add-cta" class="waves-effect waves-light btn-small">Add CTA</a><a id="remove-cta" class="waves-effect waves-light btn-small">Remove CTA</a></div></div><div class="col s4"><div class="promo-block-position"><h2>Text Block Position</h2><div class="form-group"><label for="top">Position From Top</label><input type="range" value="50" min="1" max="100" step="1" id="top-position"></div><div class="form-group"><label for="left">Position From Left</label><input type="range" value="50" min="1" max="100" step="1" id="left-position"></div></div></div><div class="col s4"><h2>Text Block Properties</h2><div class="form-group"><label for="bg-color">BG Color</label><input type="color" value="" id="bg-color" size="10"></div><div class="form-group"><label for="border-color">Border color</label><input type="color" value="" id="border-color"></div><div class="form-group"><label for="border-size">Border Size</label><input type="range" value="0" min="0" max="10" step="1" id="border-size"></div><div class="form-group"><label for="spacing">Spacing </label><input type="range" value="10" min="1" max="120" step="1" id="spacing"></div></div></div>';
		$('.promo-editor').append(textBlockEditor);
		
		var textId = 'editor-' + cnt;
		var toolbarId = 'toolbar-' + cnt;
		$("#canvas").after('<div id="' + textId + '" class="text" data-placeholder="Add Your Text Here"></div>');
		var editor = new wysihtml5.Editor(textId, {
			toolbar: toolbarId,
			parserRules:  wysihtml5ParserRules
    });
    
    $('.text-block-editor-' + cnt + ' #add-cta').on('click', function(){
      cta_cnt = cta_cnt + 1;
      $('#' + textId).append('<button class="cta-'+ cta_cnt +'">CTA BUTTON</button>');
    });
    $('.text-block-editor-' + cnt + ' #remove-cta').on('click', function(){
      $('#' + textId).find('.cta-'+ cta_cnt).remove();
      cta_cnt = cta_cnt - 1;
    });

		$('.text-block-editor-' + cnt + ' #top-position').on('change', function(){
      var top = parseInt($(this).val());
      if($('.box #'+ textId).length > 0) {
        $('.box #'+ textId).css('top', top + '%');
      }
    });

    $('.text-block-editor-' + cnt + ' #left-position').on('change', function(){
      var left = parseInt($(this).val());
      if($('.box #'+ textId).length > 0) {
        $('.box #'+ textId).css('left', left + '%');
      }
    });

    $('.text-block-editor-' + cnt + ' #border-size').on('change', function(){
      var width = parseInt($(this).val());
      if($('.box #'+ textId).length > 0) {
        $('.box #'+ textId).css('border-width', width + 'px');
      }
    });

    $('.text-block-editor-' + cnt + ' #spacing').on('change', function(){
      var padding = parseInt($(this).val());
      if($('.box #'+ textId).length > 0) {
        $('.box #'+ textId).css('padding', padding + 'px');
      }
    });

    $('.text-block-editor-' + cnt + ' #border-color').on('change', function(){
      var color = $(this).val();
      if($('.box #'+ textId).length > 0) {
        $('.box #'+ textId).css('border-color', color);
      }
    });

    $('.text-block-editor-' + cnt + ' #bg-color').on('change', function(){
      var bgcolor = $(this).val();
      if($('.box #'+ textId).length > 0) {
        $('.box #'+ textId).css('background-color', bgcolor );
      }
		});
		
		return cnt;
	}

	function removeTextBlock(cnt) {
		$('.promo-editor').find('.text-block-editor-' + cnt).remove();
		$(".box").find('#editor-'+cnt).remove();
		cnt = cnt - 1;
		return cnt;
	}
 
});
