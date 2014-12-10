Speakers = new Meteor.Collection('speakers', {});

Speakers.attachSchema(new SimpleSchema({
	name: {
		type: String,
		label: "Name",
		max: 255
	},
	lastlogin: {
		type: Date,
		label: "Last Login",
	}
}));