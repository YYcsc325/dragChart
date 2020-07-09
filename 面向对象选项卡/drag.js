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
	//动态生成div元素
	function Drag(obj,area){
       //存一下这里的this是指向drag，下面拖动的this都是需要这个this
       this.obj = obj;
       //改进不拖出边框
       this.left = area.left;
       this.top = area.top;
       this.right = area.right;
       this.bottom = area.bottom;
       //是否创建元素
       this.obj.isCreate?this.Create():this.unCreate();
       this.DragMouse();
    }
    Drag.prototype = {
       //创建元素
      "Create":function(){
         var data = document.createElement(this.obj.element.toLowerCase());
             data.id = this.obj.elementId;
             document.body.appendChild(data);
      },
       //不创建元素
      "unCreate":function(){
         alert('我没创建');
      },
       //拖拽移动
      'DragMouseMove':function(){
          //移动的时候
          document.onmousemove = (e=event)=>{
            //盒子左边距离clienx就是文本框左边的距离-l就是鼠标距离当前盒子左边距离 = 盒子左边距离文本框距离
              //不拖出边界算的应该是计算后的值,判断距离文档左边是不是小于0的边距
              this.needLeft = e.clientX - this.l;
              this.needTop = e.clientY - this.t; 
              //右边的算法，浏览器的最大宽度-自身的宽度
              this.maxLeft = innerWidth - this.obj.offsetWidth;
              //下边的算法
              this.maxBottom = innerHeight - this.obj.offsetHeight;
              !this.left && (this.needLeft = this.needLeft < 0?0:this.needLeft)
              !this.top && (this.needTop = this.needTop < 0?0:this.needTop)
              !this.right && (this.needLeft = this.needLeft > this.maxLeft?this.maxLeft:this.needLeft)
              !this.bottom && (this.needTop = this.needTop > this.maxBottom?this.maxBottom:this.needTop)
              this.needDrag.style.left = this.needLeft + "px";
              this.needDrag.style.top = this.needTop + "px";
          };
      },
       //拖拽结束
      'DragMouseUp':function(){
          document.onmouseup = ()=>{
                  document.onmousedown = null;
                  document.onmousemove = null;
          }
      },
       //拖拽总函数,开始
      'DragMouse':function(){
         if(this.obj.isCreate){
            //把拖拽钱把当前元素先存为私有
            this.needDrag = document.getElementById(this.obj.elementId);
            this.needDrag.onmousedown = (e=event) => {
              this.l = e.clientX - this.needDrag.offsetLeft; 
              this.t = e.clientY - this.needDrag.offsetTop; 
              this.DragMouseMove();
              this.DragMouseUp();
          }
         }
      }
    }
        // var all = document.getElementById("infos");
        // var dragItem = all.getElementsByTagName("img");
        // var dropLoc = document.getElementsByClassName("section_main")[0];
        // dragCharts({//对象方式传参
        //            needDrag:dragItem,
        //            targetDrag:dropLoc,
        //            imgClassName:"picture",
        //            chartClassName:"charts",
        //            mainTarget:all
        // });//最后一个参数是获取指定区域的img

})()