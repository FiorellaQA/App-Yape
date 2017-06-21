'use strict';

function Pantalla3 (update) {
	var section =  $('<section class="containerScreen"></section>');
	var containerImg =  $('<div class="containerImg2"></div>');
	var img = $('<img class="responsive-img" src="assets/img/icons/message.png" alt="">');
	var contentText =  $('<div class=""></div>');
	var titulo = $('<h2 class="title center">Ahora ingresa tu código</h2>');
	var form = $('<form action=""></form>');
	var text = $(`<p class="center">Enviamos un SMS con el código de validación al número <span class="bold">xxx</span></p>`);
	var contentInput = $('<div class="contentInput"></div>');
	var iconPhone = $('<img class="responsive-img imgSmall" src="assets/img/icons/lock.png" alt="">');
	var input = $('<input type="number" id="phone" class="input-form" required>');

	containerImg.append(img);

	contentText
		.append(titulo)
		.append(text);

	contentInput
		.append(iconPhone)
		.append(input);

	form.append(contentInput);

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
