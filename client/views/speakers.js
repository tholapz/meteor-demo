Router.route('speakers', {
	path: '/speakers',
	template: 'speakers',
	data: function() {
		return {
			speakers: Speakers.find()
		}
	}
});