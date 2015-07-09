(function($) {
	$.fn.taggify = function(options) {
		create(this);
		return this;
	};

	function create($theElement) {
		var $input = $('<input class="tag-input"></input>')
			.attr('type', 'text')
			.attr('autocomplete', 'off')
			.wrap('<li></li>');

		$input.on('keyup', function(e) {
			if (e.keyCode === 13) {
				var tagText = $input.val();
				if(tagText !== '') {
					var $span = $('<span class="tag-label"></span>');

					$span.text(tagText).wrap('<li class="tag-choice"></li>');
					$theElement.prepend($span.parent());
					$input.val('');
				}
			}
		});

		$theElement.append($input.parent());
	}
})(jQuery);
