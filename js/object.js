/*	function offset(obj){
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

/*
	获取具有定位属性的父元素  相对于body的left top值
	offset(obj).left 相对于body left
	offset(obj).top 相对于body top
*/
function offset(obj){
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
}