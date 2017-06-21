'use strict';

function Pantalla3 (update) {
	var section =  $('<section class="containerScreen"></section>');
	var containerImg =  $('<div class="containerImg2"></div>');
	var img = $('<img class="responsive-img" src="assets/img/icons/message.png" alt="">');
	var contentText =  $('<div class=""></div>');
	var titulo = $('<h2 class="title center">Ahora ingresa tu código</h2>');
	var text = $('<p class="center">Enviamos un SMS con el código de validación al número <span class="bold">xxx</span></p>');
	var form = $('<div class="contentCode"></div>');
	var input = $('<input type="number" id="user-code" placeholder="  - - - - - - " required>');
	var span = $('<p>Reintentar en <span class="iconTime">20</span></p>');

	containerImg.append(img);

	contentText
		.append(titulo)
		.append(text);

	form
		.append(input)
		.append(span);

	section
		.append(containerImg)
		.append(contentText)
		.append(form);

	input.on('keyup',function (e) {
		e.preventDefault();

		if($(this).val().length == 6 && $(this).val() == datosUser[0]){
			state.screen = "pantalla4";
			update();
		}else{
			console.log("código no coincide");
		}
	});
	return	section;
}
