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

		var replaceDates = function() {
			$("div.date").each(function(){
				var isodate = $(this).text();
				var day = moment.utc(isodate);
				if (day.isValid()) {
					day.local();
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