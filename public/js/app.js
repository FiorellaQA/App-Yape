'use strict';

function render(root) {
	root.empty();

	if(state.screen == null) {
		root.append(Pantalla1(function () {
			render(root);
		}));
	}else if(state.screen == "pantalla2"){
		root.append(Pantalla2(function () {
			render(root);
		}));
	}else if(state.screen == "pantalla3"){
		root.append(Pantalla3(function () {
			render(root);
		}));
	}else if(state.screen == "pantalla4"){
		root.append(Pantalla4(function () {
			render(root);
		}));
	}else if(state.screen == "pantalla5"){
		root.append(Pantalla5(function () {
			render(root);
		}));
	}else if(state.screen == "pantalla6"){
		root.append(Pantalla6(function () {
			render(root);
		}));
	}else if(state.screen == "pantalla7"){
		root.append(Pantalla7(function () {
			render(root);
		}));
	}else if(state.screen == "pantalla8"){
		root.append(Pantalla8());
	}

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