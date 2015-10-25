$(function() {
	
/***************Mobile Menu***************/

	$('#mobile-menu').on('click', function() {
		$('nav ul').slideToggle(600)
		$('button').toggleClass('change-bg');
	});

/***************Gallery View***************/

	$extView = $('#ext-view');
	$intView = $('#int-view');
	$bf = $('.showcase-bf');
	$af = $('.showcase-af');

	$('.ext-View').on('click', function () {

		if ($(this).parent().hasClass('viewing')) {

		$extView.slideUp(500);

		};
	});

	$('.ext-View').on('click', function () {

		$id = $(this).attr('id');
		$parent = $(this).parent();

		if ($parent.siblings('.viewing')) {

			$parent.siblings().removeClass('viewing');
			$parent.addClass('viewing');

		}	else {

			$parent.addClass('viewing');
		};


		// $viewingSiblings.removeClass('viewing');
		// $(this).addClass('viewing');

		if ($extView.css('display') == ('none')) {
			$extView.slideToggle(500);

			$bf.html('<h3>Before</h3><img src=img/' + $id + '-bf.jpg>');
			$af.html('<h3>After</h3><img src=img/' + $id + '-af.jpg>');
	
		}	else	{		
			$bf.html('<h3>Before</h3><img src=img/' + $id + '-bf.jpg>');
			$af.html('<h3>After</h3><img src=img/' + $id + '-af.jpg>');
		};
	});




/***************Footer to Bottom***************/
	
	$docHeight = $(document).height();
	$winHeight = $(window).height();

	if ($docHeight > $winHeight) {
		$('.wrapper').css('min-height', $docHeight);
	}	else {
		$('.wrapper').css('min-height', $winHeight);
	};

/***************Homepage Fader***************/
	winWidth = window.innerWidth;

	if (winWidth > 768) {

	$('#slideshow img:gt(0)').hide();
			
	setInterval(function() {
		$('#slideshow :first-child').fadeOut()
						.next('img').fadeIn()
						.end().appendTo('#slideshow');},
			2750);
	};
});