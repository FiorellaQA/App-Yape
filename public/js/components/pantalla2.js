'use strict';

function Pantalla2() {
	var section =  $('<section class="containerScreen"></section>');
	var containerImg =  $('<div class="containerImg2"></div>');
	var img = $('<img class="responsive-img" src="assets/img/icons/phone.png" alt="">');
	var contentText =  $('<div class=""></div>');
	var titulo = $('<h2 class="title center">Para comenzar validemos tu número</h2>');
	var text = $('<p class="center">Recibirás un SMS con un código de validación.</p>');
	var form = $('<form action=""></form>');
	var contentInput = $('<div class="contentInput"></div>');
	var iconPhone = $('<img class="responsive-img imgSmall" src="assets/img/icons/phoneandnumber.png" alt="">');
	var input = $('<input type="number" id="phone" class="input-form" pattern="[9]{1}[0-9]{8}" required>');
	var terminos = $('<input type="checkbox" id="terminos" />');
	var labelTerminos = $('<label for="terminos">Acepto los <a href="#">Términos y condiciones</a></label>');
	var btn = $('<button type="submit" class="btn-large disabled" id="validarNumero">CONTINUAR</button>');

	containerImg.append(img);

	contentText
		.append(titulo)
		.append(text);


	contentInput
		.append(iconPhone)
		.append(input);

	form
		.append(contentInput)
		.append(terminos)
		.append(labelTerminos)
		.append(btn);

	section
		.append(containerImg)
		.append(contentText)
		.append(form);

	terminos.on('change',function (e) {
		e.preventDefault();
		if(input.val().length == 9 && $("#terminos").is(':checked')) {
			btn.removeClass('disabled');
		}else{
			btn.addClass('disabled');

		}
	});

	btn.on('click',function (e) {
		e.preventDefault();
		state.screen = "pantalla3";

		$.post('http://localhost:3000/api/registerNumber',{
			"phone" : input.val(),
			"terms" : checkbox[0].checked
		}, function (data) {
			console.log(data);
		});

		update();
	});

	return section;

}