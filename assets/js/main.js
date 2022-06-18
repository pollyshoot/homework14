$(document).ready(function(){
	$('.header-menu__hamburger').click(function(){
		$(this).toggleClass('active');
		$('.header-menu__navbar').fadeToggle(500);
	});
});