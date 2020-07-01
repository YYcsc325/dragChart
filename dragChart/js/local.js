
 //求滚动条的当前滚动距离坐标的函数
 function getScrollOffset(){
 	if(window.pageXOffset){
 		return {
 			x:window.pageXOffset,
 			y:window.pageYOffset
 		}
 	}else{
 		return {
 			x:document.body.scrollLeft+document.documentElement.scrollLeft,
 			y:document.body.scrollTop+document.documentElement.scrollTop
 		}
 	}
 }
 //选项卡
 function card({targetArrayOne,targetArrayTwo,clas}){
      for(var i = 0; i < targetArrayOne.length; i++){
     // 利用闭包实现选项卡
// 传入的参数给一个传入参数的执行期上下文
         (function(n){
	            targetArrayOne[n].onclick = function(){
	            for(var j = 0; j < targetArrayTwo.length; j++){
   	           targetArrayOne[j].className = "";
               targetArrayTwo[j].style.display = "none";
	            }
	               this.className = clas;
	               targetArrayTwo[n].style.display = "block";
            }

	     }(i))
      }
 }
 //获取浏览器窗口尺寸
 function getViewportOffset(){
 	if(window.innerWidth){
 		return {
 			w:window.innerWidth,
 			h:window.innerHeight
 		}
 	}else{
 		if(document.compatMode == "BackCompat"){
 			return {
 				w:document.body.clientWidth,
 				h:document.body.clientHeight
 			}
 		}else{
 			return {
 				w:document.documentElement.clientWidth,
 				h:document.documentElement.clientHeight
 			}
 		}
 	}
 }

 //数组的排重
Array.prototype.fn = function(){
	var temp = {};
	var arr1 = [];
	var n1 = this.length;
	for(var i = 0; i < n1; i++){
		if(!temp[this[i]]){//有没有这个属性
			temp[this[i]] = "abc";
			arr1.push(this[i]);
		}
	}
	return arr1;
}
//ajax异步请求
function ajax({type,url,data,dataType}){
return new Promise(function(open){
    //1.创建异步对象xhr
    var xhr=new XMLHttpRequest();
    //2.绑定监听事件
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4&&xhr.status==200){
            var result=xhr.responseText;
            if(dataType!==undefined
                    &&dataType.toUpperCase()==="JSON")
                result=JSON.parse(result);
            open(result);
        }
    }
    if(typeof data === "object"){
        var arr=[];
        for(var key in data){
            arr.push(key+"="+data[key]);
        }
        data=arr.join("&");
    }
    if(type==="get"&&data!==undefined){
        url+="?"+data;
    }
    //3.打开连接
    xhr.open(type,url,true);
    //增加消息头
    if(type==="post")
      xhr.setRequestHeader(
            "Content-Type","application/x-www-form-urlencoded"
        );
    //4.发送请求
    if(type==="post"&&data!==undefined)
        xhr.send(data);
    else
        xhr.send(null);
})
}
//判断具体类型
function type(target){
        var template = {
            "[object Array]":"array",
            "[object Object]":"object",
            "[object Number]":"number - object",
            "[object Boolean]":'boolean - object',
            "[object String]":'string - object'
        }
        if(target == null){
            return "null";
        }
        if(typeof(target) == "object"){
            var str = Object.prototype.toString().call(target);
            return template[str];
        }else{
            return typeof(target);
        }
}

// 深度克隆
function deepClone(origin,target){
    var target = target || {},
        toStr = Object.prototype.toString(),
        arrStr = "[object Array]";
    for(var prop in origin){
        if(origin.hasOwnProperty(prop)){
            if(origin[prop] != "null" && typeof(origin[prop]) == "object"){
                if(toStr.call(origin[prop]) == arrStr){
                    target[prop] = [];
                }else{
                    target[prop] = {};
                }
                deepClone(origin[prop],target[prop]);
            }else{
                target[prop] = origin[prop];
            }
        }
    }
    return target;
}
//圣杯模式
var inherit = (function(){
    var F = function(){};
    return function(Target,Origin){
        F.prototype = Origin.prototype;
        Target.prototype = new F();
        Target.prototype.constructor = Target;
        Target.prototype.uber = Origin.prototype;
    }
}());
//insertAfter函数
function insertAfter(newElement,targetElement){
    var parent=targetElement.parentNode;
    if(parent.lastChild==targetElement){
        parent.appendChild(newElement);
    }else{
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}
//addloadevent可以插入多个需要在尾部执行的函数
function addLoadEvent(func){
          var oldonload=window.onload;
          if(typeof window.onload!="function"){
            window.onload=func;
          }else{
            window.onload=function (){
                oldonload();
                func();
            }
          }         
}
//实现拖拽的函数drag
function drag(needDrag,targetDrag){
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
    console.log("11");
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
