$(document).ready(function(){
	$( ".section1" ).click(function() {
	  	$( ".section1" ).toggleClass("transform1", 1000, "easeInOutQuad" );
		for (var i = 1; i<=4; i++){
				if (i != 1) {
					$(".section" + i).removeClass("transform" + i);
				}
		}
		setTimeout(function(){
			$("#content1").toggleClass("hidden", 1000);
				for (var i = 1; i<=4; i++){
					if (i != 1) {
						$("#content"  + i).addClass("hidden");
					}
				}
		}, 1000);
	});
	$( ".section2" ).click(function() {
		$( ".section2" ).toggleClass("transform2", 1000, "easeInOutQuad" );
		for (var i = 1; i<=4; i++){
				if (i != 2) {
					$(".section" + i).removeClass("transform" + i);
				}
		}
		setTimeout(function(){
			$("#content2").toggleClass("hidden", 1000);
				for (var i = 1; i<=4; i++){
					if (i != 2) {
						$("#content"  + i).addClass("hidden");
					}
				}
		}, 1000);
	});
	$( ".section3" ).click(function() {
		$( ".section3" ).toggleClass("transform3", 1000, "easeInOutQuad" );
		for (var i = 1; i<=4; i++){
				if (i != 3) {
					$(".section" + i).removeClass("transform" + i);
			}
		}
		$("#content3").toggleClass("hidden", 1000);
		setTimeout(function(){
			$("#content3").toggleClass("hidden", 1000);
				for (var i = 1; i<=4; i++){
					if (i != 3) {
						$("#content"  + i).addClass("hidden");
					}
				}
		}, 1000);
	});
	$( ".section4" ).click(function() {
		$( ".section4" ).toggleClass("transform4", 1000, "easeInOutQuad" );
		for (var i = 1; i<=4; i++){
				if (i != 4) {
					$(".section" + i).removeClass("transform" + i);
			}
		}
		setTimeout(function(){
			$("#content4").toggleClass("hidden", 1000);
				for (var i = 1; i<=4; i++){
					if (i != 4) {
						$("#content"  + i).addClass("hidden");
					}
				}
		}, 1000);
	});






	$( "#fleche1" ).click(function() {
		$('html, body').animate({
			scrollTop: $("#main-anchor").offset().top
		}, 1000);
	});
	$( "#fleche2" ).click(function() {
		$('html, body').animate({
			scrollTop: $("#main-anchor").offset().top
		}, 1000);
	});
});
