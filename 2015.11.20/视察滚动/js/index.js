/*
	近 走的快   远 走的慢
	浏览器的宽 clientW
	banner的高 bannerH
	获取中心点 

	onmousemove   获取事件源
	mx=cx-x
	树  left.style.marginLeft=mx*0.2+"px"
*/
$(function(){
	var banner=$(".banner")[0];
	var moon=$(".moon")[0];
	var nebula=$(".nebula")[0];
	var bottom=$(".bottom")[0];
	var foreground=$(".foreground")[0];
	var left=$(".left")[0];
	var right=$(".right")[0];
	var clientW=document.documentElement.clientWidth;
	var bannerH=banner.offsetHeight;
	var x=clientW/2;
	var y=bannerH/2;
	banner.onmousemove=function(e){
		var ev=e||window.event;
		var cx=ev.clientX;
		var cy=ev.clientY;
		var mx=cx-x;
		var my=cy-y;

		left.style.marginLeft=mx*0.06+"px";
		left.style.marginBottom=my*0.06+"px";

		right.style.marginRight=mx*0.06+"px";
		right.style.marginBottom=my*0.06+"px";

		foreground.style.marginLeft=mx*0.05+"px";
		foreground.style.marginBottom=my*0.05+"px";

		bottom.style.marginLeft=mx*0.03+"px";
		bottom.style.marginBottom=my*0.03+"px";

		moon.style.marginLeft=mx*0.02+"px";
		moon.style.marginBottom=my*0.02+"px";

		nebula.style.marginLeft=mx*0.015+"px";
		nebula.style.marginBottom=my*0.015+"px";
	}
})