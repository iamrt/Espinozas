$(function() {
	
/***************Mobile Menu***************/

	$('#mobile-menu').on('click', function() {
		$('nav ul').slideToggle(600)
		$('button').toggleClass('change-bg');
	});

/***************Gallery View***************/

	$extView = $('#ext-view');
	$intView = $('#int-view');
	$miscView = $('#misc-view');
	$finView = $('#fin-view');
	$ext_bf = $('#ext-showcase-bf');
	$ext_af = $('#ext-showcase-af');
	$int_bf = $('#int-showcase-bf');
	$int_af = $('#int-showcase-af');
	$misc_bf= $('#misc-showcase-bf');
	$misc_af= $('#misc-showcase-af');
	$fin = $('#fin-showcase');

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

			$ext_bf.html('<h3>Before</h3><img src=img/' + $id + '-bf.jpg>');
			$ext_af.html('<h3>After</h3><img src=img/' + $id + '-af.jpg>');
	
		}	else	{		
			$ext_bf.html('<h3>Before</h3><img src=img/' + $id + '-bf.jpg>');
			$ext_af.html('<h3>After</h3><img src=img/' + $id + '-af.jpg>');
		};
	});


	$('.int-View').on('click', function () {

			if ($(this).parent().hasClass('viewing')) {

			$intView.slideUp(500);

			};
		});

	$('.int-View').on('click', function () {

		$id = $(this).attr('id');
		$parent = $(this).parent();

		if ($parent.siblings('.viewing')) {

			$parent.siblings().removeClass('viewing');
			$parent.addClass('viewing');

		}	else {

			$parent.addClass('viewing');
		};

		if ($intView.css('display') == ('none')) {
			$intView.slideToggle(500);

			$int_bf.html('<h3>Before</h3><img src=img/' + $id + '-bf.jpg>');
			$int_af.html('<h3>After</h3><img src=img/' + $id + '-af.jpg>');
	
		}	else	{		
			$int_bf.html('<h3>Before</h3><img src=img/' + $id + '-bf.jpg>');
			$int_af.html('<h3>After</h3><img src=img/' + $id + '-af.jpg>');
		};
	});

	$('.misc-View').on('click', function () {

			if ($(this).parent().hasClass('viewing')) {

			$miscView.slideUp(500);

			};
		});

	$('.misc-View').on('click', function () {

		$id = $(this).attr('id');
		$parent = $(this).parent();

		if ($parent.siblings('.viewing')) {

			$parent.siblings().removeClass('viewing');
			$parent.addClass('viewing');

		}	else {

			$parent.addClass('viewing');
		};

		if ($miscView.css('display') == ('none')) {
			$miscView.slideToggle(500);

			$misc_bf.html('<h3>Before</h3><img src=img/' + $id + '-bf.jpg>');
			$misc_af.html('<h3>After</h3><img src=img/' + $id + '-af.jpg>');
	
		}	else	{		
			$misc_bf.html('<h3>Before</h3><img src=img/' + $id + '-bf.jpg>');
			$misc_af.html('<h3>After</h3><img src=img/' + $id + '-af.jpg>');
		};
	});

	$('.fin-View').on('click', function () {

			if ($(this).parent().hasClass('viewing')) {

			$finView.slideUp(500);

			};
		});

	$('.fin-View').on('click', function () {

		$id = $(this).attr('id');
		$parent = $(this).parent();

		if ($parent.siblings('.viewing')) {

			$parent.siblings().removeClass('viewing');
			$parent.addClass('viewing');

		}	else {

			$parent.addClass('viewing');
		};

		if ($finView.css('display') == ('none')) {
			$finView.slideToggle(500);

			$fin.html('<img src=img/' + $id + '.jpg>');
		}	else	{		
			$fin.html('<img src=img/' + $id + '.jpg>');
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