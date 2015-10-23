$(function() {
	
/***************Mobile Menu***************/

	$('#mobile-menu').on('click', function() {
		$('nav > ul').slideToggle(600)
		$('button').toggleClass('change-bg');
	});

/***************Gallery View***************/

	$extView = $('#ext-view');
	$intView = $('#int-view');

	$('.ext-View').on('click', function() {

		$id = $(this).attr('id');

	if ($extView.css('display') == ('block') && ($extView.html().contains($id))) {
			$extView.slideToggle(500);
		};
	});

	$('.ext-View').on('click', function () {

		$id = $(this).attr('id');

		if ($extView.css('display') == ('none')) {
			$extView.slideToggle(500);
			$extView.html('<div class=\"showcase-bf\"><h3>Before</h3><img src=img/' + $id + '-bf.jpg></div><div class=\"showcase-af\"><h3>After</h3><img src=img/' + $id + '-af.jpg></div>');
	
		}	else	{		
			$extView.html('<div class=\"showcase-bf\"><h3>Before</h3><img src=img/' + $id + '-bf.jpg></div><div class=\"showcase-af\"><h3>After</h3><img src=img/' + $id + '-af.jpg></div>');
		};
	});

	
});

