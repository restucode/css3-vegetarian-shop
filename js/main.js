var heroSwiper = new Swiper('.swiper-container-1', {
	spaceBetween: 30,
	autoplay: {
		delay: 3500,
	},
	pagination: {
		el: '.swiper-pagination-1',
		clickable:true
	},
});

var newMenuSwiper = new Swiper('.swiper-container-new', {
	slidesPerView: 'auto',
	spaceBetween: 30,
	pagination: {
		el: '.swiper-pagination-2',
		clickable:true
	},
});

var popularMenuSwiper = new Swiper('.swiper-container-popular', {
	slidesPerView: 'auto',
	spaceBetween: 30,
	pagination: {
		el: '.swiper-pagination-3',
		clickable:true
	},
});




