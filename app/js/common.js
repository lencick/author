$(document).ready(function() {
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