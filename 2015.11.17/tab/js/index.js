window.onload=function(){
	var as=document.getElementsByClassName('links')[0].getElementsByTagName('a');
	var is=document.getElementsByClassName('list')[0].getElementsByTagName('img');
	var as1=document.getElementsByClassName('links')[1].getElementsByTagName('a');
	var is1=document.getElementsByClassName('list')[1].getElementsByTagName('img');
	var tabs=new tab({	
		hot:'hot',
		lists:is,
		links:as,
		events:'onclick'
	}).autoplay();

	new tab({	
		hot:'hot',
		lists:is1,
		links:as1,
		events:'onmouseover'
	});
	// tabs.click();
}