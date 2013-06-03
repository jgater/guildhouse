(function(window, document, undefined) {

	window.app = (function() {

		var setupIndex = function() {
			//console.log("Setup Index");
			$("ul.tagindex li.tag > a").click(function(event) {
				event.preventDefault();
				$(this).next("ul").toggle();
				$('html, body').animate({scrollTop: $(this).offset().top}, 1000, "swing");
			})
		};

		var replaceDates = function() {
			$("span#date").each(function(){
				var date = $(this).text();
				var day = moment(date);
				if (day.isValid()) {
					$(this).text( day.format("ddd Do MMMM YYYY, hA") );
				}	
			});
		};


		return {
			setupIndex: setupIndex,
			replaceDates: replaceDates
		}
	})();


})(window, document);