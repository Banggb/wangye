function ani(claname, type) {
	if(($(claname).offset().top - $(window).scrollTop()) < $(window).height()) {
		$(claname).addClass(type);
	};
	$(window).scroll(function() {
		if(($(claname).offset().top - $(window).scrollTop()) < $(window).height()) {
			$(claname).addClass(type);
		};
	});

};
ani('.slideshow .left','bounceInLeft');
ani('.slideshow .right','bounceInRight');
ani('.cont-2 .dh1','bounceInUp');
ani('.cont-2 .dh2','bounceInUp');
ani('.cont-3 .dh1','fadeInLeft');
ani('.cont-3 .dh2','fadeInLeft');
ani('.cont-3 .dh3','fadeInLeft');
ani('.cont-3 .dh4','fadeInLeft');
ani('.cont-3 .dh5','fadeInLeft');
ani('.cont-3 .grid-r .img','fadeInUp');
ani('.cont-3 .grid-r .size','fadeInUp');
ani('.cont-4 .dhu','zoomInUp');
ani('.cont-4 .dhl','bounceInLeft');
ani('.cont-4 .dhr','bounceInRight');
ani('.cont-4 .dhl2','bounceInLeft');
ani('.cont-4 .dhr2','bounceInRight');
ani('.cont-5 .grid','fadeIn');