/*
	out
	inner
	scrollbar
	btn
	outH
	innerH
	比例 scale=innerH/outH;
	scrollbarH
	btn.style.height
	btn.onmousedown
	clientY
	offsetT
	btn.style.top
	边界判断
	按下去  
	onmouseup 清除浏览器默认动作
	mouseWheel(out,fun(){},fun(){})
	onkeyup  38  40
*/
$(function(){
	var out=$(".out")[0];
	var inner=$(".inner")[0];
	var scrollbar=$(".scrollbar")[0];
	var btn=$(".btn")[0];
	var val=10;
	var tops=0;
	var outH=out.offsetHeight;
	// console.log(outH)
	var innerH=inner.offsetHeight;
	// console.log(innerH)
	var scale=innerH/outH;//比例   内容/盒子
	if(scale>1){
		scrollbar.style.display="block"
	}
	var scrollbarH=scrollbar.offsetHeight;
	var btnH=scrollbarH/scale;	//btnH/scrollbarH=scale
	btn.style.height=btnH+"px";
	//鼠标按下事件
	btn.onmousedown=function(e){
		var ev=e||window.event;
		var clientY=ev.clientY;
		// console.log(clientY)
		var offsetT=this.offsetTop;//btn距离上边的距离
		// console.log(offsetT)
		document.onmousemove=function(e){
			var ev=e||window.event;
			var moveY=ev.clientY;
			// console.log(moveY)
			var tops=moveY-clientY+offsetT;// 85-79+0=6
										   // 90-85+6=11
			// console.log(tops)
			if(tops<=0){
				tops=0;
			}
			if(tops>scrollbarH-btnH){
				tops=scrollbarH-btnH;
			}
			btn.style.top=tops+"px";
			inner.style.marginTop=-tops*scale+"px";
		}

		if (ev.preventDefault){
			ev.preventDefault(); //阻止默认浏览器动作(W3C)
		}	
		else{
			ev.returnValue = false;//IE中阻止函数器默认动作的方式
		}

		document.onmouseup=function(){
			document.onmousemove=null;
		}
	}
	//滚轮事件
	mouseWheel(out,up,down);
	function up(){//up
		tops-=val;//  -=10 往下
		if(tops<=0){
			tops=0;
		}
		btn.style.top=tops+"px";
		inner.style.marginTop=-tops*scale+"px";// tops的范围 	0--scrollbarH-btnH
											   //在下面 所以是-tops*scale+"px"   刚开始marginTop=0;
	}
	function down(){//down
		tops+=val;//+=10  往上
		if(tops>scrollbarH-btnH){
			tops=scrollbarH-btnH;
		}
		btn.style.top=tops+"px";
		inner.style.marginTop=-tops*scale+"px";//marginTop=
	}
	//键盘事件
	out.onmouseover=function(){
		document.onkeydown=function(e){
			var ev=e||window.event;
			var code=ev.keyCode;
			// alert(code)
			if(code!=38&&code!=40){//上 38  下40
				return;
			}
			if(code==38){
				up();
			}else if(code==40){
				down();
			}

			if (ev.preventDefault){
				ev.preventDefault(); //阻止默认浏览器动作(W3C)
			}	
			else{
				ev.returnValue = false;//IE中阻止函数器默认动作的方式
			}
		}
	}
	out.onmouseout=function(){
		document.onkeydown=null;
	}
})
