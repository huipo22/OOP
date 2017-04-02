/*
	滚动1屏  需要获取浏览器的高度clientH
	获取container  包含每瓶元素的容器
	margin-top
	index 标记 每屏 0 1 2 3 
*/
window.onload=function(){
	var container=document.getElementsByClassName("container")[0];
	var clientH=document.documentElement.clientHeight;
	var lis=document.getElementsByClassName("nav")[0].getElementsByTagName("li");
	var index=0;
	var flag=true;//开关
	var lislen=lis.length;
	mouseWheel(window,function(){//滚轮对象是window
		if(!flag){
			return
		}
		flag=false;
		index--;
		if(index<0){//刚开始index就等于0,所以判断是要小于0
			index=3;
		}
		for(var i=0;i<lislen;i++){//小按钮的背景变化
			lis[i].className="";
		}
		lis[index].className="hot";
		animate(container,{marginTop:-index*clientH},800,Tween.Linear,function(){//给container加动画
			flag=true;
		})
	},function(){
		if(!flag){
			return
		}
		flag=false;
		index++;
		if(index==4){//等于4  重新从0开始
			index=0;
		}
		for(var i=0;i<lislen;i++){
			lis[i].className="";
		}
		lis[index].className="hot";
		animate(container,{marginTop:-index*clientH},800,Tween.Linear,function(){
			flag=true;
		})
	})

	//点击事件
	for(var i=0;i<lis.length;i++){
		lis[i].index=i;
		// console.log(lis[i].index)s
		lis[i].onclick=function(){
			for(var j=0;j<lislen;j++){
				lis[j].className="";
				// console.log(j);
			}
			lis[this.index].className="hot";
			// console.log(this.index);
			animate(container,{marginTop:-this.index*clientH},800,Tween.Linear,function(){
				flag=true;
			})
		}
	}
}