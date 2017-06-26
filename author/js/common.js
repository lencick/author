$(document).ready(function() {
	
	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$("nav").slideToggle();
	});

	$(".slider.owl-carousel").owlCarousel({
		items : 1,
		nav : true,
		navText : " ",
		loop : true,
		autoplay : true,
		autoplayHoverPause : true,
		fluidSpeed : 800,
		autoplaySpeed : 800,
		navSpeed : 800,
		dotsSpeed : 800,
		dragEndSpeed : 800
	});

	$("header nav").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;		
		$('body,html').animate({scrollTop: top+5}, 1500);
	});

	$(window).scroll(function() {
		var scroll = $(document).scrollTop(),
			team= $('#team').offset().top,
			contact = $('#contact').offset().top,
			a = $("header nav a");

		if (0 <= scroll && scroll < team){
			a.removeClass("active");
			$('a.home').addClass("active");
		}else if (team <= scroll && scroll < contact){
			a.removeClass("active");
			$('a.team').addClass("active")
		}else if (contact <= scroll){
			a.removeClass("active");
			$('a.contact').addClass("active");
		}
	});
	$("form.forms").submit(function() {
		var form_data = $(this).serialize();
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: form_data,
			success: function() {                  
				$('form.forms').html("Спасибо! <br/> Ваше сообщение принято!");
			}
		});
	});
});