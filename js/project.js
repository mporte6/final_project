$(document).ready(function() {

$("#about").animate({
	backgroundColor: "#2980b9"}, 3000);

$("header").animate({
	backgroundColor: "#2980b9"}, 3000);

$("#about").animate({
	borderColor: "black"}, 3000);

$("footer").animate({
	backgroundColor: "#2980b9"}, 3000);

$("#menu").click(function(){
	$("nav a").toggleClass("open");
	
 });

});