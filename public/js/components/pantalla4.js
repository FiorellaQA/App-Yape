'use strict';

function Pantalla4 () {
	var contentText =  $('<div class=""></div>');
	var titulo = $('<h2 class="title center">Para comenzar validemos tu número</h2>');
	var text = $('<p class="center">Recibirás un SMS con un código de validación.</p>');

	contentText
		.append(titulo)
		.append(text);
	return contentText;

}
