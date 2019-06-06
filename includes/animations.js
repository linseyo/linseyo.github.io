anime ({
	targets: ['.loader-beg', '.loader-end'],
	width: '0px',
	delay: function(el) {
		if (el.classList.contains('loader-beg')) {
			return 0;
		} else {
			return 2000;
		}
	},
	opacity: 0,
	duration: 2000,
	loop: false,
	easing: 'easeInOutQuad'
});


anime({
	targets: '.nav',
	easing: 'linear',
	delay: 3400,
	opacity: 1
});

anime({
	targets: '.intro',
	easing: 'linear',
	delay: 3900,
	opacity: 1
});

anime({
	targets: '.projects',
	delay: 4500,
	easing: 'linear',
	opacity: 1
});

anime({
	targets: '.footer',
	delay: 10000,
	easing: 'linear',
	opacity: 1
});

width = $(window).width();



