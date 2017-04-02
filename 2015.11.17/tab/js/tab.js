function tab(options){
	this.links=options.links;   //[a,a,a]
	this.linkslen=this.links.length;
	this.lists=options.lists;
	this.events=options.events||'onclick';
	this.linkhot=options.hot; //hot是传进来的值
	this.click();
	this.now=0;
}
tab.prototype.click=function(){
	for(var i=0;i<this.linkslen;i++){
		this.links[i].index=i;
		var that=this;
		this.links[i][this.events]=function(){
			//this === this.links[i]
			for(var j=0;j<that.linkslen;j++){
				that.links[j].className='';
				that.lists[j].style.display='none';
			}
			this.className=that.linkhot;
			that.lists[this.index].style.display='block';
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
			that.links[i].className='';
			that.lists[i].style.display='none';
		}
		that.links[that.now].className='hot';
		that.lists[that.now].style.display='block'
	},2000)
}