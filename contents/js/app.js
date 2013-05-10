(function(window, document, undefined) {

	window.app = (function() {

		var setupIndex = function() {
			//console.log("Setup Index");
			$("ul.tagindex li.tag > span.pikto a").click(function(event) {
				event.preventDefault();
				$(this).parent().next("ul").toggle();
				$('html, body').animate({scrollTop: $(this).offset().top}, 1000, "swing");
			})
		};

		return {
			setupIndex: setupIndex
		}
	})();
})(window, document);