function drag(obj){
	var parentWidth=obj.parentNode.offsetWidth;
	var parentHeight=obj.parentNode.offsetHeight;
	var objwidth=obj.offsetWidth;
	var objHeight=obj.offsetHeight;
	var startX,startY,endX,endY
	obj.onmousedown=function(e){
		var ev=getEvent(e);
		var sx,cy;
		startX=cx=ev.clientX;
		startY=cy=ev.clientY;
		var ox=getx(ev);
		var oy=gety(ev);
		var parentL=offset(obj).left;
		var parentT=offset(obj).top;
		document.onmousemove=function(e){
			var ev=getEvent(e);
			var nx,ny;
			startX=endX;// 刚开始的endX赋给 新的 startX  每次移动都重新开始记录
			startY=endY;
			endX=nx=ev.clientX;
			endY=ny=ev.clientY;

			var left=nx-ox-parentL;
			var top=ny-oy-parentT
			//边界判断
			if(left<0){
				left=0;
			}
			if(left>parentWidth-objwidth){
				left=parentWidth-objwidth;
			}
			if(top<0){
				top=0
			}
			if(top>parentHeight-objHeight){
				top=parentHeight-objHeight;
			}
			obj.style.left=left+"px";
			obj.style.top=top+"px";
			var div=document.createElement("div");
			div.style.cssText="width:5px;height:5px;background:blue;position:absolute;top:"+(ny-oy)+"px;left:"+(nx-ox)+"px"
			document.body.appendChild(div);
		}
		document.onmouseup=function(){
			var lenX=endX-startX;
			var lenY=endY-startY;
			var t=setInterval(bb,50)
			function bb(){
				lenX*=0.8;//乘以缓冲系数
				lenY*=0.8;
				if(Math.abs(lenX)<=1&&Math.abs(lenY)<=1){
					clearInterval(t)
				}
				obj.style.left=(obj.offsetLeft+lenX)+"px";
				obj.style.top=(obj.offsetTop+lenY)+"px";
			}
			document.onmousemove=null;
		}
	}
	function getEvent(e){//获取事件对象的兼容
		return e||window.event;
	}
	function getx(ev){//鼠标到事件源的距离
		return ev.layerX||ev.offsetX
	}
	function gety(ev){
		return ev.layerY||ev.offsetY;
	}
}
/*
	获取具有定位属性的父元素  相对于body的left top值
	offset(obj).left 相对于body left
	offset(obj).top 相对于body top
*/
/*function offset(obj){
	var parent=obj.parentNode;//获取父元素
	var arr=[];//数组，放父元素的数组
	var x=0;
	var y=0;
	while(parent.nodeName!=="BODY"){//判断父元素是不是BODY   只要不是BODY 就一直循环
		var attr=getStyle(parent,"position")//获取父元素的样式 调用getStyle函数
		if(attr=="absolute"||attr=="fixed"||attr=="relative"){
			arr.push(parent);//放入数组zhong
		}
		parent=parent.parentNode; //如果有父元素，接着往上找
	}
	//遍历数组    left  border  top  border
	for(var i=0;i<arr.length;i++){
		var top=arr[i].offsetTop;//获取自身的top
		var borderT=parseInt(getStyle(arr[i],"borderTopWidth"))//自身top的border
		y+=top+borderT;
		var left=arr[i].offsetLeft; 
		var borderL=parseInt(getStyle(arr[i],"borderLeftWidth"));
		x+=left+borderL;
	}
	return {left:x,top:y}//返回一个json  left top
}
function getStyle(obj,attr){//兼容样式函数
	if(obj.currentStyle){
		return obj.currentStyle[attr]
	}else{
		return getComputedStyle(obj,null)[attr]
	}
}*/