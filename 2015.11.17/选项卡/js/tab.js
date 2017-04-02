/*function tab(options){
	this.links=options.links  //[a  a  a]
	this.linkslen=this.links.length;//上面this.links的长度
	this.lists=options.lists;
	this.events=options.events||"onclick";
	this.linkhot=options.hot  //hot是传进来的值
	this.click();
	this.now=0;//当前下标
}
tab.prototype.click=function(){
	for(var i=0;i<this.linkslen;i++){
		this.links[i].index=i
		var that=this;//控制a标签-->this
					 //控制img-->that
		this.links[i][this.events]=function(){
			for(var j=0;j<that.linkslen;j++){
				that.links[j].className="";
				that.lists[j].style.display="none";
			}
			this.className=that.linkhot;
			that.lists[this.index].style.display="block";
		}
	}
	
}
tab.prototype.autoplay=function(){
	var that=this;//当前this赋给that
	setInterval(function(){
		that.now++;
		if(that.now==that.linkslen){
			that.now=0;
		}
		for(var i=0;i<that.linkslen;i++){
			that.links[i].className="";
			that.lists[i].style.display="none"
		}
		that.className=that.linkhot;
		that.lists[that.now].style.display="block"//查看当前下标的样式
	},2000)
}*/
/*function tab(options){
	this.links=options.links;
	this.linkslen=this.links.length;
	this.lists=options.lists;
	this.linkhot=options.hot;
	this.events=options.events||"onclick"
	this.click();
	this.now=0;
	console.log(this);//表示tab
}
// console.log(this);//表示window
tab.prototype.click=function(){
	for(var i=0;i<this.linkslen;i++){
		this.links[i].index=i;
		var that=this;
		this.links[i][this.events]=function(){
			for(var j=0;j<that.linkslen;j++){
				that.links[j].className="";
				that.lists[j].style.display="none";
			}
			this.className=that.linkhot;
			that.lists[this.index].style.display="block";
		}
	}
}
tab.prototype.autoplay=function(){
	var that=this;
	setInterval(function(){
		that.now++;//当前下标
		if(that.now==that.linkslen){
			that.now=0;
		}
		for(var i=0;i<that.linkslen;i++){
			that.links[i].className="";
			that.lists[i].style.display="none"
		}
		that.className=that.linkhot;
		that.lists[that.now].style.display="block"
	},2000)
}*/
function tab(options){
	this.links=options.links;
	this.linkslen=this.links.length;
	this.lists=options.lists;
	this.events=options.events||"onclick";
	this.linkhot=options.hot;
	this.click();
	this.now=0;
}
tab.prototype.click=function(){
	for(var i=0;i<this.linkslen;i++){
		this.links[i].index=i;
		var that=this;
		this.links[i][this.events]=function(){
			for(var j=0;j<that.linkslen;j++){
				that.links[j].className="";
				that.lists[j].style.display="none";
			}
			this.className=that.linkhot;
			that.lists[this.index].style.display="block";
		}
	}
}
tab.prototype.autoplay=function(){
	var that=this;
	setInterval(function(){
		that.now++;
		if(that.now==that.linkslen){
			that.now=0;
		}
		for(var i=0;i<that.linkslen;i++){
			that.links[i].className="";
			that.lists[i].style.display="none";
		}
		this.className=that.linkhot;
		that.lists[that.now].style.display="block";
	},2000)
}