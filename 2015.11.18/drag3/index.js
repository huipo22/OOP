function drag(obj,option){
	this.obj=obj;
	this.option=(this.option==undefined)?{}:this.option;
	this.option.x=(this.option.x==undefined)?true:this.option.x;
	this.option.y=(this.option.y==undefined)?true:this.option.y;
	this.option.side=(this.option.side==undefined)?false:this.option.side;
	this.option.animate=(this.option.animate==undefined)?false:this.option.animate;
	this.parentx=offset(this.obj).left;//父元素的左边距
	this.parenty=offset(this.obj).top;
	this.clientX=0;
	this.clientY=0;
	this.ox=0;
	this.oy=0;
	this.start();
}
drag.prototype.start=function(){
	var that=this;
	this.obj.onmousedown=function(e){
		var ev=that._getEvent(e)
		that.ox=that._getx(ev);//事件源
		that.oy=that._gety(ev);
		that.move();
		that.stop();
	}
}
drag.prototype.move=function(){
	var that=this;
	document.onmousemove=function(e){
		var ev=that._getEvent(e);
		that.clientX=ev.clientX;//鼠标位置距离浏览器的位置
		that.clientY=ev.clientY;
		if(that.option.x){
			that.obj.style.left=(that.clientX-that.ox-that.parentx)+"px";
		}
		if(that.option.y){
			that.obj.style.top=(that.clientY-that.oy-that.parenty)+"px";
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
	return e||window.event;
}
drag.prototype._getx=function(ev){
	return ev.offsetX||ev.layerX
}
drag.prototype._gety=function(ev){
	return ev.offsetY||ev.layerY;
}

/*function offset(obj){
	var parent=obj.parentNode;
	var arr=[];
	var x=0;
	var y=0;
	while(parent.nodeName!=="BODY"){
		var attr=getStyle(parent,"position");
		if(attr=="absolute"||attr=="relative"||attr=="fixed"){
			arr.push(parent);
		}
		parent=parent.parentNode;
	}
	for(var i=0;i<arr.length;i++){
		var top=arr[i].offsetTop;
		var borderT=parseInt(getStyle(arr[i],"borderTopWidth"));
		y+=top+borderT;
		var left=arr[i].offsetLeft;
		var borderL=parseInt(getStyle(arr[i],"borderLeftWidth"));
		x+=left+borderL;
	}
	return{left:x,top:y};
}


  function getStyle(obj,attr){//兼容样式函数
  	if(obj.currentStyle){
  		return obj.currentStyle[attr]
  	}else{
  		return getComputedStyle(obj,null)[attr]
  	}
  }*/