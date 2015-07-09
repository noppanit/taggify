describe('Taggify', function() {
	var fixture;
	beforeEach(function() {
		fixture = setFixtures('<ul id="tag"></ul>');
		jQuery('#tag').taggify();
	});
	
	it('should initialize text box', function() {
		var input = fixture.find('input');
		expect(input.length > 0).toBeTruthy();
	});

	it('should add a tag', function() {
		var input = fixture.find('input');
		input.val('tag');
		input.trigger(jQuery.Event('keyup', { keyCode: 13 }));

		var tags = fixture.find('.tag-label');
		var tag = jQuery(tags[0]);
		
		expect(tag.html()).toBe('tag');
		expect(tags.length > 0).toBeTruthy();
	});

	it('should not add a tag', function() {
		var input = fixture.find('input');
		input.trigger(jQuery.Event('keyup', { keyCode: 13 }));
		var tags = fixture.find('.tag-label');
		
		expect(tags.length > 0).toBeFalsy();
	});
});
