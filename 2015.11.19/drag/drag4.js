
function drags(obj,opt){
	return new drag(obj,opt);
}
function drag(obj,opt){
	this.obj=obj;
	this.option=opt==undefined?{}:opt;//只在第一次使用 opt  之后用的是this.option
	//如果没传 就是空对象
	this.option.x=(this.option.x==undefined)?true:this.option.x;
	this.option.y=(this.option.y==undefined)?true:this.option.y;
	this.option.side=(this.option.side==undefined)?false:this.option.side;
	this.option.animate=(this.option.animate==undefined)?false:this.option.animate;
	this.parentX=this.obj.parentNode.offsetWidth;//父容器的宽
	this.parentY=this.obj.parentNode.offsetHeight;//父容器的高
	this.downX=0;
	this.downY=0;
	this.offsetX=0;
	this.offsetY=0;
	this.moveX=0;
	this.moveY=0;
	this.startX=0;
	this.startY=0;
	this.endX=0;
	this.endY=0;
	this.scale=0.8;//缓冲系数
	this.start();
}
drag.prototype={
	constructor:drag,
	//修改构造函数指向drag    如果不指，它指的是object对象
	
	start:function(e){
		var that=this;
		this.obj.onmousedown=function(){
			var ev=that._getEv(e);
			that.downX=ev.clientX;//浏览器的位置
			that.downY=ev.clientY;
			that.offsetX=that.obj.offsetLeft;//父元素的左边距
			that.offsetY=that.obj.offsetTop;
			that.move();
			that.stop();
			if (ev.preventDefault )
				ev.preventDefault(); //阻止默认浏览器动作(W3C)
			else
				ev.returnValue = false;//IE中阻止函数器默认动作的方式
		}
	},
	move:function(){
		var that=this;
		document.onmousemove=function(e){
			var ev=that._getEv(e);
			that.startX=that.endX;//结束的endX又重新赋给startX
			that.startY=that.endY;

			that.endX=that.moveX=ev.clientX;//重新获取结束的endX
			that.endY=that.moveY=ev.clientY;//重新获取结束的endY
			var left=that.moveX-that.downX+that.offsetX;
			var top=that.moveY-that.downY+that.offsetY;
			if(that.option.side){
				if(left<0){
					left=0;
				}
				if(left>that.parentX-that.obj.offsetWidth){//父容器的宽-自身的宽
					left=that.parentX-that.obj.offsetWidth;
				}
				if(top<0){
					top=0
				}
				if(top>that.parentY-that.obj.offsetHeight){
					top=that.parentY-that.obj.offsetHeight
				}
			}
			
			if(that.option.x){
				that.obj.style.left=left+"px";
			}
			if(that.option.y){
				that.obj.style.top=top+"px";
			}
			
		}

	},
	stop:function(){ 
		var that=this; 
		document.onmouseup=function(){
			if(that.option.animate){
				var lenX=that.endX-that.startX;//结束-开始  获取差值
				var lenY=that.endY-that.startY;

				var t=setInterval(function(){
					lenX*=that.scale;// 与缓冲系数相乘
					lenY*=that.scale;
					if(that.option.side){//边界
						
						if(that.obj.offsetLeft<0){
							that.obj.style.left=0;//当前对象的左边距
							that.scale*=-1;
						}
						if(that.obj.offsetLeft>that.parentX-that.obj.offsetWidth){
							that.obj.style.left=(that.parentX-that.obj.offsetWidth)+"px";
							that.scale*=-1;
						}
						if(that.obj.offsetTop<0){
							that.obj.style.top=0;
							that.scale*=-1;
						}
						if(that.obj.offsetTop>that.parentY-that.obj.offsetHeight){
							that.obj.style.top=(that.parentY-that.obj.offsetHeight)+"px";
							that.scale*=-1;
						}
					}
					if(Math.abs(lenX)>Math.abs(lenY)){//在x轴上判断 x>y
						if(Math.abs(lenX)<=1){//无限接近0，但不等于0
							clearInterval(t);
						}
					}
					if(Math.abs(lenX)<Math.abs(lenY)){
						if(Math.abs(lenY)<=1){
							clearInterval(t);
						}
					}
					

					that.obj.style.left=that.obj.offsetLeft+lenX+"px";//自身的左边距+缓冲动画
					that.obj.style.top=that.obj.offsetTop+lenY+"px";
				},50)
			}
			document.onmousemove=null;
			document.onmouseup=null;
		} 

	},
	_getEv:function(e){
		return e||window.event;
	},
	_getX:function(ev){
		return ev.offsetX||ev.layerX;
	},
	_getY:function(ev){
		return ev.offsetY||ev.offsetY;
	}
}