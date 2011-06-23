(function HoverBootstrapper(){

	/**
	 * Styles for list-driven navigation menus.
	 */
	function on_hover()
	{
		$(this).toggleClass('hover');
	}

	function on_click(e)
	{
		if (e.currentTarget.tagName == 'A') return;

		e.stopPropagation();
		document.location.href = $(this).find('a').get(0).href;
	}

	$('ul, li', $('nav')).hover(on_hover, on_hover)
	                     .filter('li')
	                     .click(on_click);

	/**
	 * Styles for header click.
	 *     TODO: This shouldn't require Javascript.
	 */
	$('#site-title').click(function(){
		document.location.href = '/';
	});

}());

