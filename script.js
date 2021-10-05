<script>
	jQuery(function($) {
		$(document).ready(function() {
			$('.listing-slider > .elementor-container').slick({
				dots: false,
				arrows: false,
				infinite: true,
				speed: 300,
				autoplay: true,
				autoplaySpeed: 2000,
				slidesToShow: 4,
				slidesToScroll: 1,
				responsive: [
					{
						breakpoint: 1024,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 650,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					}
				]
			});
		});
	});
</script>
