/*
	抽象出来的东西
	new drag(obj,{}) x y f animate
	function drag(obj,{}){
	
	}

	拖拽  元素
	start	mousedown
	move	mousemove
	stop	mouseup
	animation	缓冲动画

	getEvent
	getox
	getoy
*/

function drag(obj,options){
	this.obj=obj;
	this.options=(this.options==undefined)?{}:this.options;
	//x轴是否拖拽 默认true
	this.options.x=(this.options.x==undefined)?true:this.options.x;
	this.options.y=(this.options.y==undefined)?true:this.options.y;
	// 边界判断  默认false
	this.options.side=(this.options.side==undefined)?false:this.options.side;
	//是否有边界 默认false
	this.options.animate=(this.options.animate==undefined)?false:this.options.animate;
	this.parentX=offset(this.obj).left;//父元素的左边距
	this.parentY=offset(this.obj).top;
	this.clientX=0;
	this.clientY=0;
	this.ox=0;
	this.oy=0;
	this.start();

}
drag.prototype.start=function(){
	var that=this;
	this.obj.onmousedown=function(e){
		var ev=that._getEvent(e);
		that.ox=that._getX(ev);
		that.oy=that._getY(ev);//事件源
		that.move();
		that.stop();
	}
}
drag.prototype.move=function(){
	var that=this;
	document.onmousemove=function(e){
		var ev=that._getEvent(e);
		that.clientX=ev.clientX;//鼠标距离浏览器的位置
		that.clientY=ev.clientY;
		if(that.options.x){
			that.obj.style.left=(that.clientX-that.ox-that.parentX)+"px";
		}

		if(that.options.y){
			that.obj.style.top=(that.clientY-that.oy-that.parentY)+"px";
		}
		
	}
}
drag.prototype.stop=function(){
	var that=this;
	document.onmouseup=function(){
		document.onmousemove=null;
	}
}
drag.prototype._getEvent=function(e){
	return e|| window.event;
}
drag.prototype._getX=function(ev){
	return ev.offsetX||ev.layerX;
}
drag.prototype._getY=function(ev){
	return ev.offsetY||ev.layerY;
}  
