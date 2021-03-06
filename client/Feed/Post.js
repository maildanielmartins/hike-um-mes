Template.Post.helpers({
	usernameDoAutor: function() {
		var idDoAutor = this.idDoAutor;
		var autor = Meteor.users.findOne({_id: idDoAutor});
		return autor.username;
	},
	numeroDeCurtidas: function() {
		return this.curtidas.length;
	},
	usuarioCurtiu: function () {
		var curtidas = this.curtidas;
		var posicao = curtidas.indexOf(Meteor.userId());

		if(posicao === -1) {
			return false;
		} else {
			return true;
		}
	},

	comentarios: function() {
		return Comentarios.find({post: this._id}).fetch();
	}
});

Template.Post.events({
	"click .botao-curtir": function(evento, template) {
		console.log("CURTINDO");

		Meteor.call("curtirPost", template.data._id);

	},
	"click .botao-descurtir":function(evento, template) {
		console.log("DESCURTINDO")
		Meteor.call("descurtirPost", template.data._id);
	}
});