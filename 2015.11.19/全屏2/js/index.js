/*
	滚动1屏  需要获取浏览器的高度clientH
	获取container  包含每瓶元素的容器
	margin-top
	index 标记 每屏 0 1 2 3 
*/
/*
	楼层floors
	clientH
	now当前下标
	next下一个下标
	lis 获取小按钮
	第一个楼层的位置 floors[0].style.top=0
	now=next
	var flen=floors.length;//楼层的长度
*/
window.onload=function(){
	var floors=document.getElementsByClassName("floor")
	var clientH=document.documentElement.clientHeight;
	var lis=document.getElementsByClassName("nav")[0].getElementsByTagName("li");
	var now=0;
	var next=0;
	var flen=floors.length;//楼层的长度
	var flag=true;
	floors[0].style.top=0;
	mouseWheel(window,function(){//滚轮向上
		if(!flag){
			return;
		}
		flag=false;
		next--;
		if(next<0){
			next=flen-1;
		}
		lis[now].className="";
		lis[next].className="hot"
		floors[now].style.zIndex=0;
		floors[next].style.cssText="top:-100%;z-index:10";//-100% 在now的下面
		animate(floors[next],{top:0},800,Tween.Linear,function(){
			floors[now].style.top="100%";
			now=next;
			flag=true;
		})
	},function(){//滚轮向下
		if(!flag){
			return;
		}
		flag=false;
		next++;
		if(next==flen){
			next=0
		}
		lis[now].className="";
		lis[next].className="hot"
		floors[now].style.zIndex=0;
		floors[next].style.zIndex=10;
		animate(floors[next],{top:0},800,Tween.Linear,function(){
			floors[now].style.top="100%";
			now=next;
			flag=true;
		})
	})

	//点击事件
	for(var i=0;i<lis.length;i++){
		lis[i].index=i;
		lis[i].onclick=function(){
			if(!flag||this.index==now){
				return;
			}
			flag=false;
			next=this.index;//当前下标赋给next
			if(this.index>now){//当前>now  层级变高
				floors[next].style.zIndex=10;
			}
			if(this.index<now){//当前<now
				floors[next].style.cssText="top:-100%;z-index:10";//-100%表示放在下面
			}
			//小按钮的变化
			lis[now].className="";
			lis[next].className="hot"
			floors[now].style.zIndex=0;
			animate(floors[next],{top:0},800,Tween.Linear,function(){
				floors[now].style.top="100%";
				now=next;
				flag=true;
			})
		}
	}
}