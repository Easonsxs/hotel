$(function(){
	$('.slider ul').bxSlider({
		controls:false,
		mode:'fade',
		auto:true,
		pager:false,
	});
	$('.banner_b .desktop').slick();
	$('.menu a').click(function(){
		$('.navigator').animate({right:0},800);
		return false;
	});
	$('.navigator p a').click(function(){
		$('.navigator').animate({right:'-350px'},800);
		return false;
	})
});