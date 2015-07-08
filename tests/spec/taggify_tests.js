describe('Taggify', function() {
	it('should add tag', function() {
		setFixtures('<input id="tag" />');
		$('#tag').taggify();
		
	});
});
