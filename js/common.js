$(document).ready(function() {


// вверхнее красиво-вращающееся меню
// 1 и 2 строка это анимация крестика
//3 строка - слайдер вниз меню
$(".toggle-mnu").click(function() {
$(this).toggleClass("on");
$(".top-menu").slideToggle();
return false;
});
  
//rfhectkm
	$(".owl-carousel").owlCarousel({
		loop:true,
		items: 1,
		merge:true,
		stagePadding:30
	});


	$(".top-menu ul li a").mPageScroll2id({
		 layout:"auto",
		 offset:".top-line",
		scrollEasing: "linear",
		highlightByNextTarget: true,
		keepHighlightUntilNext: true,
		 autoScrollSpeed: true,
		scrollSpeed : 1000
	});



//Кнопка наверх с права от контента
$("body").append('<div class="top"><i class="fa fa-angle-double-up" aria-hidden="true"></i></div>');
// Заставляет кнопку работать как ссылку на самый вверх
$("body").on("click", ".top", function() {
	$("html, body").animate({scrollTop: 0}, "slow");
});
// Заставляет прятаться кнопку, если посетитель на хедере
$(window).scroll(function() {
if ($(this).scrollTop() > $(this).height()) {
	$(".top").addClass("active");
} else 
{  	$(".top").removeClass("active");
}
});
	
// галерея всплывающая
$(".portfolio-item").each(function(e){
var th = $(this);
th.attr("href", "#portfolio-image-" + e)
.find(".portfolio-popup")
.attr("id", "portfolio-image-" + e);

});
$(".portfolio-item").magnificPopup({
mainClass: 'my-mfp-zoom-in',
removalDelay:300,
type:'inline',

});

	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(".forms-calldecor .success").addClass("active");
			setTimeout(function() {
				// Done Functions
				$(".forms-calldecor .success").removeClass("active");
				th.trigger("reset");
				$.magnificPopup.close();
			}, 100);
		});
		return false;
	});

});