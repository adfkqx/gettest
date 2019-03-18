// 不同设备 ，dom不同 ，window不同
(function(docu,wind){
	var docuEle = document.documentElement,
	// 设备重置 orientationchange:屏幕旋转  resize
	//DOMContentLoaded
	resizeEvent='orientationchange' in  window ? 'orientationchange' : 'resize' ,
	relative=function(){
		//获取屏幕宽度
		var clrenWidth = docuEle.clientWidth;
		if(!clrenWidth){
			return;
		}else{
			docuEle.style.fontSize = clrenWidth/7.5 + 'px';
		}
	}
	if(!addEventListener){
		return;
	}else{
		wind.addEventListener(resizeEvent,relative,false);
		docu.addEventListener('DOMContentLoaded',relative,false);
	}
	
})(document,window)

// 是html fontSize 100px 
var  w=window.screen.width;
var target=750;
var scale=w/750;
var meta =document.createElement('meta');
meta.name='viewport';
meta.content='initial-scale='+scale+',maximum-scale='+scale+',minimum-scale='+scale;
document.head.appendChild(meta);