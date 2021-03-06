	function mouseWheel(obj,upfun,downfun){
		//添加滚轮事件的兼容问题
		if(obj.attachEvent){
			obj.attachEvent("onmousewheel",scrollFn); //IE、 opera
		}else if(obj.addEventListener){
			obj.addEventListener("mousewheel",scrollFn,false);//chrome,safari -webkit
			obj.addEventListener("DOMMouseScroll",scrollFn,false);//firefox -moz-
		}
		function scrollFn(e){
			var ev=e || window.event;
			if(ev.detail==-3 || ev.wheelDelta==120){//往上
				if(upfun){//往上滑的事件存在
					upfun.call(obj);
				}
			}

			if(ev.detail==3 || ev.wheelDelta==-120){//往下
				if(downfun){//往下滑的事件存在
					downfun.call(obj);
				}
			}

			if (ev.preventDefault){
				ev.preventDefault(); //阻止默认浏览器动作(W3C)
			}	
			else{
				ev.returnValue = false;//IE中阻止函数器默认动作的方式
			}

		}
	}	