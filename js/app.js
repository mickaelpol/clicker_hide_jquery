$(function(){ // attente du lancement de la fonction jquery 


	$('button').click(function(){ // listenner sur tous les boutons de la pages

		// creation des inputs avec label + leur id
		$('#input').html('<label for="nom">Nom</label><input id="nom" type="text">\
			'+'<label for="prenom">Prenom</label><input id="prenom" type="text">\
			'+'<input id="submit" type="submit">');

		$('#submit').click(function(){ // listenner sur le bouton valider généré au dessus
			var nom = $('#nom').val();
			var prenom = $('#prenom').val();
			console.log(nom + " " + prenom);
		});
	});



});