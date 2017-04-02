/*window.onload=function(){
	var as=document.getElementsByClassName("links")[0].getElementsByTagName("a");
	var ls=document.getElementsByClassName("lists")[0].getElementsByTagName("img")

	var tabs=new tab({
		links:as,
		hot:"hot",
		lists:ls,
		events:onclick
	})
	// tabs.click();
}*/
$(function(){
	var linksa=$(".links")[0];
	var as=$("a",linksa);
	var listsa=$(".lists")[0];
	var ls=$("img",listsa);

	// var tabs=new tab({links:as,hot:"hot",lists:ls,events:onclick}).autoplay();
	// var tabs=new tab({links:as,hot:"hot",lists:ls,events:onclick}).autoplay();
	var tabs=new tab({
		links:as,
		hot:"hot",
		lists:ls,
		events:onclick
	}).autoplay();
})