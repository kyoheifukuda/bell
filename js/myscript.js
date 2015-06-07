$(function(){
	//slider
	$('.autoplay').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed:1500,
	});
	//services
	$(".services_more").click(function (ev) {
		if($(window).width()>992){
			if($(this).hasClass("_ballet")){
				$(".ballet_text").slideToggle();
			}else if($(this).hasClass("_rentroom")){
				$(".rentroom_text").slideToggle();
			}
		}else if($(window).width()<992){
			$(this).next(".servises_text").slideToggle();
		}

	});
	//map
	var map;
	var center = new google.maps.LatLng(35.658517,139.701334);
	function initialize() {
	  var mapOptions = {
	  	scrollwheel: false,
	    zoom: 16,
	    center: center,
        styles: [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"on"},{"lightness":33}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2e5d4"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#c5dac6"}]},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":20}]},{"featureType":"road","elementType":"all","stylers":[{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#c5c6c6"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#e4d7c6"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#fbfaf7"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"color":"#acbcc9"}]}]
	  };
	  map = new google.maps.Map(document.getElementById('map-canvas'),
	      mapOptions);
	  markerCreate(map);
	}

	function markerCreate(map){
		new google.maps.Marker({
			position:center,
			map:map
		});
	}
	google.maps.event.addDomListener(window, 'load', initialize);
});