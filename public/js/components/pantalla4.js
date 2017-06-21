'use strict';

function Pantalla4 () {
	var section =  $('<section class="containerScreen"></section>');
	var containerImg =  $('<div class="containerImg2"></div>');
	var img = $('<img class="responsive-img" src="assets/img/icons/lockone.png" alt="">');
	var contentText =  $('<div class=""></div>');
	var titulo = $('<h2 class="title center">Crea tu usuario Yape</h2>');
	var text = $(`<p class="center">Ingresa un nombre, email y clave de usuario.</p>`);
	var form = $('<form action=""></form>');
	var name = $('<input class="bg-image" id="user-name" type="text" placeholder="Nombre">');
	var email = $('<input class="bg-image" id="user-email" type="email" placeholder="correo@ejemplo.com">');
	var password = $('<input class="bg-image" id="user-password" type="password" placeholder="Ingresa clave de 6 dígitos">');
	var messageForm = $('<span>Cuida esta clave como oro, es tu acceso a Yape</span>')
	var btn = $('<button type="submit" class="btn btn-small disabled" id="btn">Crear cuenta</button>');



	containerImg.append(img);
	contentText
		.append(titulo)
		.append(text);
	form
		.append(name)
		.append(email)
		.append(password)
		.append(messageForm)
		.append(btn);
	section
		.append(containerImg)
		.append(contentText)
		.append(form);

	return section;

}
