// //STICKY MENU 

// // When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};
// // Get the navbar
// var navbar = document.querySelector(".navbar");

// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
// 	if (window.pageYOffset >= 20) {
// 		navbar.classList.add("sticky")
// 	} else {
// 		navbar.classList.remove("sticky");
// 	}
// }


// //SLICK SCROLL SLIDER 

// $(document).ready(function () {
// 	$('.my-slider').slick({
// 		dots: false,
// 		arrows: false,
// 		autoplay: false,
// 		slidesToShow: 1,
// 		slidesToScroll: 1
// 	  });
// });

// // MOBILE MENU LOGIC

// $(document).ready(function(){
// 	$(".burger-mobile").click(function () {
// 		$('.collapse').toggleClass('show');
// 		$('.el__nav-bar').toggleClass('show');
// 		$(".burger-mobile").toggleClass('open');
// 	});
// });

// //UNMUTE VIDEO + CHANGE LOGO

// var video = document.querySelector(".el__video") ;   

// function toggleMute() {
// 	video.muted = !video.muted;
// }

// $(document).ready(function(){
// 	$(".unmute").click(function () {
// 		$('.unmute').toggleClass('mute');
// 		$('.unmute img:last-child').toggleClass('active');
// 		$('.unmute img:first-child').toggleClass('hide');
// 	});
// });

// // MAP BOX

// mapboxgl.accessToken = 'pk.eyJ1IjoibGVhLXVwdG95b3UiLCJhIjoiY2wyajV0dzZqMHU2YjNjb2pkYTlqb20xNyJ9.guZkuAjSuEV665fzEMzc9Q';
// 	const map = new mapboxgl.Map({
// 	container: 'map', // container ID
// 	style: 'mapbox://styles/lea-mycustomtheme/cl3kcaghy009t14mfe117etiu', // style URL
// 	center: [7.188252, 46.6], // starting position [lng, lat]
// 	zoom: 7
// });

// // disable map zoom when using scroll
// map.scrollZoom.disable();

// const geojson = {
// 	type: 'FeatureCollection',
// 	features: [
// 		{
// 			type: 'Feature',
// 			geometry: {
// 				type: 'Point',
// 				coordinates: [7.188252, 46.849048]
// 			},
// 			properties: {
// 				"id": 001,
// 				title: 'Mapbox',
// 				description: 'Fribourg, Switzerland'
// 			}
// 		}
// 	]
// };


// // add markers to map
// for (const feature of geojson.features) {
// 	// create a HTML element for each feature
// 	const el = document.createElement('div');
// 	// add ID to marker class
// 	el.className = `marker marker-${feature.properties.id}`;
// 	new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).addTo(map);
//   }

// // Show active marker depending on canton clicked

// //TO-DO Clean this shit !!

// $(".map-link.1").click(function () {
// 	$('.marker').removeClass('marker-active');
// 	$(".marker-1").toggleClass('marker-active');
// });

// $(".map-link.2").click(function () {
// 	$('.marker').removeClass('marker-active');
// 	$(".marker-2").toggleClass('marker-active');
// });
