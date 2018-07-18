
Template.Feed.helpers({
	posts: function() {
		var PostsDaCollection = Posts.find().fetch();
		return PostsDaCollection
	}
});