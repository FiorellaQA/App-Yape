'use strict';

function Pantalla2() {
	var section =  $('<section class="containerScreen2"></section>');
	var row1 =  $('<div class="row"></div>');
	var col1 =  $('<div class="col s12"></div>');
	var row2 =  $('<div class="row"></div>');
	var col2 =  $('<div class="col s12"></div>');
	var row3 =  $('<div class="row"></div>');
	var col3 =  $('<div class="col s12"></div>');
	var row4 =  $('<div class="row"></div>');
	var col4 =  $('<div class="col s12"></div>');
	var row5 =  $('<div class="row"></div>');
	var col5 =  $('<div class="col s12"></div>');
	var containerImg =  $('<div class="containerImg2"></div>');
	var img = $('<img class="responsive-img" src="assets/img/icons/phone.png" alt="">');
	var titulo = $('<h2 class="title center">Para comenzar validemos tu número</h2>');
	var text = $('<p class="center">Recibirás un SMS con un código de validación.</p>');
	var contentInput = $('<div class="contentInput"></div>');
	var iconPhone = $('<img class="responsive-img imgSmall" src="assets/img/icons/phoneandnumber.png" alt="">');
	var input = $('<input type="number">');
	var terminos = $('<input type="checkbox" id="test1" />');
	var labelTerminos = $('<label for="test1">Acepto los <a href="#">Términos y condiciones</a></label>');
	var btn = $('<button class="btn-large disabled" id="validarNumero">CONTINUAR</button>');

	input.on('keyup',function () {
		var valorInput = $(this).val();
		if(valorInput.length != 9){
			console.log("numero invalido");
		}else{
			//$(this)
			$('#validarNumero').removeClass('disabled');
		}

		console.log(valorInput.length);

	});

	containerImg.append(img);

	col1.append(containerImg);
	row1.append(col1);

	col2.append(titulo);
	row2.append(col2);

	col3.append(text);
	row3.append(col3);

	contentInput
		.append(iconPhone)
		.append(input);

	col4.append(contentInput);
	row4.append(col4);

	col5
		.append(terminos)
		.append(labelTerminos);

	row5.append(col5);


	section
		.append(row1)
		.append(row2)
		.append(row3)
		.append(row4)
		.append(row5)
		.append(btn);

	return section;

}