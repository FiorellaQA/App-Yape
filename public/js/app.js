'use strict';

function render(root) {
	root.empty();
	var wrapper = $('<div>',{
		class: 'wrapper'
	});
	wrapper
		.append(Pantalla1())
		.append(Pantalla2())
		.append(Pantalla3())
		.append(Pantalla4())
		.append(Pantalla5())
		.append(Pantalla6())
		.append(Pantalla7());

	root.append(wrapper);
}

var state = {
	screen: null
};

$(function() {
	var root = $('#root');
	render(root);
});