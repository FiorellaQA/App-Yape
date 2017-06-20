'use strict';

function render(root) {
	root.empty();
	var wrapper = $('<div>',{
		class: 'container'
	});

	var update = function () {
		render(root);
	};

	wrapper.append(Pantalla1(function () {
		render(root);
	}));

	if(state.screen != null){
		wrapper.append(Pantalla2());
		root.append(wrapper);
	}

	/*wrapper
		.append(Pantalla2())
		.append(Pantalla3())
		.append(Pantalla4())
		.append(Pantalla5())
		.append(Pantalla6())
		.append(Pantalla7());*/

	root.append(wrapper);
}

var state = {
	screen: null
};

$(function() {
	var root = $('#root');
	render(root);

	$('.carousel.carousel-slider').carousel({fullWidth: true});
});