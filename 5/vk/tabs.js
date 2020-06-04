(function($) {
$(function() {

	$('ul.vkladka__caption').on('click', 'li:not(.active)', function() {
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('div.vkladka').find('div.vkladka__con').removeClass('active').eq($(this).index()).addClass('active');
	});

});
})(jQuery);