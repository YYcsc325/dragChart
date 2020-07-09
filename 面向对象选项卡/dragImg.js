
(function(){

	function dragImg(needDrag,targetDrag){
	for(var i = 0;i < needDrag.length; i++){
	    (function(m){//闭包实现
	        needDrag[m].ondragstart = function(evt){
	            //在拖拽开始时当前这个对象有dataTransfer属性,用setData方法存入一个属性为key，值为当前拖拽对象的id
	            evt.dataTransfer.setData("key",evt.target.className);//获取到当前的className
	            evt.dataTransfer.setData("on",m);//这个是把当前对象下标也传过来
	        }
	  }(i));
	}
	targetDrag.ondragover = function(evt){//拖入指定区域时触发事件
	    evt.preventDefault();
	}
	//ondrop 事件在可拖动元素或选取的文本放置在目标区域时触发。
	targetDrag.ondrop = function(evt){
	    //拖拽放弃的时候，拿到当前存储的className值，和当前的下标值
	    var dropItem = evt.dataTransfer.getData("key");
	    var on = parseInt(evt.dataTransfer.getData("on"));
	    evt.preventDefault();
	    var myElement = document.getElementsByClassName(dropItem)[on];//以这个id为标准查找这个元素
	    var myNewElement = document.createElement("img");//创建一个img元素
	    myNewElement.src = myElement.src;//让指定id的src属性赋值给创建的img
	    targetDrag.appendChild(myNewElement); //在div下面插入这个新建的img
	 }
	}
	function doit(){
		var needtarget = document.getElementsByClassName("picture");
		var target = document.getElementsByClassName("section_left")[0];
		dragImg(needtarget,target);
	}
	doit();

})();