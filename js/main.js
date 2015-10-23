$(function() {
	
	$('#mobile-menu').on('click', function() {
		$('nav ul').toggleClass('open')
		$('button').toggleClass('change-bg');
	});

	$('.ext-View').on('click', function () {
		$extView = $('#ext-view');
		$intView = $('#int-view');

		if ($extView.css('display') == ('none')) {
			$extView.slideToggle(500);
			$extView.html('<div class=\"showcase-bf\"><h3>Before</h3><img src=img/' + $(this).attr('id') + '-bf.jpg></div><div class=\"showcase-af\"><h3>After</h3><img src=img/' + $(this).attr('id') + '-af.jpg></div>');
	
		}	else	{		
			$extView.html('<div class=\"showcase-bf\"><h3>Before</h3><img src=img/' + $(this).attr('id') + '-bf.jpg></div><div class=\"showcase-af\"><h3>After</h3><img src=img/' + $(this).attr('id') + '-af.jpg></div>');
		};
	});
});

