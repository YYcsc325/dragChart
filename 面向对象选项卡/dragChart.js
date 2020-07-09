(function(){
	//进行图表的拖拽
	function dragCharts({needDrag,targetDrag,imgClassName,chartClassName,mainTarget}){
	    var length = needDrag.length;
	    for(var i = 0;i < length; i++){
	        (function(m){//闭包实现
	            needDrag[m].ondragstart = function(evt){
	                //在拖拽开始时当前这个对象有dataTransfer属性,用setData方法存入一个属性为key，值为当前拖拽对象的id
	                evt.dataTransfer.setData("on",m);//这个是把当前对象下标也传过来
	            }
	      }(i));
	    }
	    targetDrag.ondragover = function(evt){//拖入指定区域时触发事件
	        evt.preventDefault();
	    }
	    //ondrop 事件在可拖动元素或选取的文本放置在目标区域时触发,进行落下的时候判断当前元素的class类型来区分是显示图片还是图表
	      targetDrag.ondrop = function(evt){
	        //拖拽放弃的时候，拿到当前存储的className值，和当前的下标值
	        var on = parseInt(evt.dataTransfer.getData("on"));
	        evt.preventDefault();
	        var myElement = mainTarget.getElementsByTagName("img")[on];//查找所有对应的图片并且把下标也传过来
	            if(myElement.className == chartClassName){
	                var myNewElement = document.createElement("div");//创建一个img元素
	                var idz = myElement.getAttribute("data")+"";
	                myNewElement.setAttribute("id",idz);
	                targetDrag.appendChild(myNewElement); //在div下面插入这个新建的img
	                var m = idz[4];//截取当前元素需要给div的id值
	                var option = chart(m);
	                var myChart = echarts.init(document.getElementById(idz));
	                    myChart.setOption(option);
	                    
	             }else if(myElement.className == imgClassName){

	                var myNewElement = document.createElement("img");//创建一个img元素
	                    myNewElement.src = myElement.src;//让指定id的src属性赋值给创建的img
	                    targetDrag.appendChild(myNewElement); //在div下面插入这个新建的img
	             }

	          }
	}
        var all = document.getElementById("infos");
        var dragItem = all.getElementsByTagName("img");
        var dropLoc = document.getElementsByClassName("section_main")[0];
        dragCharts({//对象方式传参
                   needDrag:dragItem,
                   targetDrag:dropLoc,
                   imgClassName:"picture",
                   chartClassName:"charts",
                   mainTarget:all
        });//最后一个参数是获取指定区域的img

})()