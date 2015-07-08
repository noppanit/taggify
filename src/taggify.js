(function($) {
	$.fn.taggify = function(options) {
		create(this);
		return this;
	};

	function create($theElement) {
		var $input = $('<input></input>')
			.attr('type', 'text')
			.attr('autocomplete', 'off')
			.css('border', 'none')
			.css('outline', 'none')
			.wrap('<li></li>');

		$input.on('keyup', function(e) {
			if (e.keyCode === 13) {
				var tagText = $input.val();
				var $span = $('<span class="tag-label"></span>');

				$span.text(tagText).wrap('<li class="tag-choice"></li>');
				$theElement.prepend($span.parent());
				$input.val('');
			}
		});

		$theElement.append($input.parent());
	}
})(jQuery);
