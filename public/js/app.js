'use strict';

function render(root) {
	root.empty();

	var wrapper = $('<div class="container"></div>');

	if(state.screen == null) {
		wrapper.append(Pantalla1(function () {
			render(root);
		}));
	}else if(state.screen == "pantalla2"){
		wrapper.append(Pantalla2(function () {
			render(root);
		}));
	}else if(state.screen == "pantalla3"){
		wrapper.append(Pantalla3(function () {
			render(root);
		}));
	}else if(state.screen == "pantalla4"){
		console.log("aquiiii");
		wrapper.append(Pantalla4());
	}
	
	root.append(wrapper);
}

var state = {
	screen: null,
	phone: null,
	code: null
};

$(function() {
	$.get('http://localhost:3000/api/',function(error, data){
		state.user = data;
		const root =$('#root');
		render(root);
		 console.log(data);
		$('.carousel.carousel-slider').carousel({fullWidth: true});

	});
});