jQuery(function($) {
	
	// Navigiation hover
	$('nav a').hover(
		// handlerIn 
		function(event) {
			// change appearance
			$(this).css('color', 'red');
			$(this).css('font-weight', 'bolder');
		},
		// handlerOut 
		function(event) {
			// change back to normal
			$(this).css('color', 'black');
			$(this).css('font-weight', 'normal');
		}
	);
	
	// link button hover
	$('.linkbutton').hover(
		// handlerIn 
		function(event) {
			// change appearance
			$(this).css('background-color', '#880000');
			$(this).css('color', 'white');
			$(this).css('border-color', 'white');
		},
		// handlerOut 
		function(event) {
			// change back to normal
			$(this).css('background-color', 'white');
			$(this).css('color', 'black');
			$(this).css('border-color', 'black');
		}
	);
});