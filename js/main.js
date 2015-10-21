<script>
	$(function() {
		$(".br").on('click', function(){
				var view = $(this).attr('id');

				$(view).slideToggle(200);
		});
	});
	</script>