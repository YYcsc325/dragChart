  
(()=>{
  var timerStart = new Date().getTime();
  function chart(i){

        if(i == 0){
            return  option = {
                        title : {
                            text: '某楼盘销售情况',
                            subtext: '纯属虚构'
                        },
                        tooltip : {
                            trigger: 'axis'
                        },
                        legend: {
                            data:['意向','预购','成交']
                        },
                        toolbox: {
                            show : true,
                            feature : {
                                mark : {show: true},
                                dataView : {show: true, readOnly: false},
                                magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                                restore : {show: true},
                                saveAsImage : {show: true}
                            }
                        },
                        calculable : true,
                        xAxis : [
                            {
                                type : 'category',
                                boundaryGap : false,
                                data : ['周一','周二','周三','周四','周五','周六','周日']
                            }
                        ],
                        yAxis : [
                            {
                                type : 'value'
                            }
                        ],
                        series : [
                            {
                                name:'成交',
                                type:'line',
                                smooth:true,
                                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                                data:[10, 12, 21, 54, 260, 830, 710]
                            },
                            {
                                name:'预购',
                                type:'line',
                                smooth:true,
                                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                                data:[30, 182, 434, 791, 390, 30, 10]
                            },
                            {
                                name:'意向',
                                type:'line',
                                smooth:true,
                                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                                data:[1320, 1132, 601, 234, 120, 90, 20]
                            }
                        ]
                     };
                    
        }else if(i == 1){
              return option = {
                        title : {
                            text: '某地区蒸发量和降水量',
                            subtext: '纯属虚构'
                        },
                        tooltip : {
                            trigger: 'axis'
                        },
                        legend: {
                            data:['蒸发量','降水量']
                        },
                        toolbox: {
                            show : true,
                            feature : {
                                mark : {show: true},
                                dataView : {show: true, readOnly: false},
                                magicType : {show: true, type: ['line', 'bar']},
                                restore : {show: true},
                                saveAsImage : {show: true}
                            }
                        },
                        calculable : true,
                        xAxis : [
                            {
                                type : 'category',
                                data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
                            }
                        ],
                        yAxis : [
                            {
                                type : 'value'
                            }
                        ],
                        series : [
                            {
                                name:'蒸发量',
                                type:'bar',
                                data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
                                markPoint : {
                                    data : [
                                        {type : 'max', name: '最大值'},
                                        {type : 'min', name: '最小值'}
                                    ]
                                },
                                markLine : {
                                    data : [
                                        {type : 'average', name: '平均值'}
                                    ]
                                }
                            },
                            {
                                name:'降水量',
                                type:'bar',
                                data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                                markPoint : {
                                    data : [
                                        {name : '年最高', value : 182.2, xAxis: 7, yAxis: 183, symbolSize:18},
                                        {name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
                                    ]
                                },
                                markLine : {
                                    data : [
                                        {type : 'average', name : '平均值'}
                                    ]
                                }
                            }
                        ]
                    };
                    
        }else if(i == 2){
              return option = {
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    legend: {
                        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎','百度','谷歌','必应','其他']
                    },
                    toolbox: {
                        show : true,
                        orient: 'vertical',
                        x: 'right',
                        y: 'center',
                        feature : {
                            mark : {show: true},
                            dataView : {show: true, readOnly: false},
                            magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                            restore : {show: true},
                            saveAsImage : {show: true}
                        }
                    },
                    calculable : true,
                    xAxis : [
                        {
                            type : 'category',
                            data : ['周一','周二','周三','周四','周五','周六','周日']
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value'
                        }
                    ],
                    series : [
                        {
                            name:'直接访问',
                            type:'bar',
                            data:[320, 332, 301, 334, 390, 330, 320]
                        },
                        {
                            name:'邮件营销',
                            type:'bar',
                            stack: '广告',
                            data:[120, 132, 101, 134, 90, 230, 210]
                        },
                        {
                            name:'联盟广告',
                            type:'bar',
                            stack: '广告',
                            data:[220, 182, 191, 234, 290, 330, 310]
                        },
                        {
                            name:'视频广告',
                            type:'bar',
                            stack: '广告',
                            data:[150, 232, 201, 154, 190, 330, 410]
                        },
                        {
                            name:'搜索引擎',
                            type:'bar',
                            data:[862, 1018, 964, 1026, 1679, 1600, 1570],
                            markLine : {
                                itemStyle:{
                                    normal:{
                                        lineStyle:{
                                            type: 'dashed'
                                        }
                                    }
                                },
                                data : [
                                    [{type : 'min'}, {type : 'max'}]
                                ]
                            }
                        },
                        {
                            name:'百度',
                            type:'bar',
                            barWidth : 5,
                            stack: '搜索引擎',
                            data:[620, 732, 701, 734, 1090, 1130, 1120]
                        },
                        {
                            name:'谷歌',
                            type:'bar',
                            stack: '搜索引擎',
                            data:[120, 132, 101, 134, 290, 230, 220]
                        },
                        {
                            name:'必应',
                            type:'bar',
                            stack: '搜索引擎',
                            data:[60, 72, 71, 74, 190, 130, 110]
                        },
                        {
                            name:'其他',
                            type:'bar',
                            stack: '搜索引擎',
                            data:[62, 82, 91, 84, 109, 110, 120]
                        }
                    ]
                };
                    
        }else if( i == 3){
         return  option = {
                        title : {
                            text: '南丁格尔玫瑰图',
                            subtext: '纯属虚构',
                            x:'center'
                        },
                        tooltip : {
                            trigger: 'item',
                            formatter: "{a} <br/>{b} : {c} ({d}%)"
                        },
                        legend: {
                            x : 'center',
                            y : 'bottom',
                            data:['rose1','rose2','rose3','rose4','rose5','rose6','rose7','rose8']
                        },
                        toolbox: {
                            show : true,
                            feature : {
                                mark : {show: true},
                                dataView : {show: true, readOnly: false},
                                magicType : {
                                    show: true, 
                                    type: ['pie', 'funnel']
                                },
                                restore : {show: true},
                                saveAsImage : {show: true}
                            }
                        },
                        calculable : true,
                        series : [
                            {
                                name:'半径模式',
                                type:'pie',
                                radius : [20, 110],
                                center : ['25%', 200],
                                roseType : 'radius',
                                width: '40%',       // for funnel
                                max: 40,            // for funnel
                                itemStyle : {
                                    normal : {
                                        label : {
                                            show : false
                                        },
                                        labelLine : {
                                            show : false
                                        }
                                    },
                                    emphasis : {
                                        label : {
                                            show : true
                                        },
                                        labelLine : {
                                            show : true
                                        }
                                    }
                                },
                                data:[
                                    {value:10, name:'rose1'},
                                    {value:5, name:'rose2'},
                                    {value:15, name:'rose3'},
                                    {value:25, name:'rose4'},
                                    {value:20, name:'rose5'},
                                    {value:35, name:'rose6'},
                                    {value:30, name:'rose7'},
                                    {value:40, name:'rose8'}
                                ]
                            },
                            {
                                name:'面积模式',
                                type:'pie',
                                radius : [30, 110],
                                center : ['75%', 200],
                                roseType : 'area',
                                x: '50%',               // for funnel
                                max: 40,                // for funnel
                                sort : 'ascending',     // for funnel
                                data:[
                                    {value:10, name:'rose1'},
                                    {value:5, name:'rose2'},
                                    {value:15, name:'rose3'},
                                    {value:25, name:'rose4'},
                                    {value:20, name:'rose5'},
                                    {value:35, name:'rose6'},
                                    {value:30, name:'rose7'},
                                    {value:40, name:'rose8'}
                                ]
                            }
                        ]
                    };
                    
        }
  }

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
            console.log('正在拖动中........');
	    }
	      //ondrop 事件在可拖动元素或选取的文本放置在目标区域时触发,进行落下的时候判断当前元素的class类型来区分是显示图片还是图表
	      targetDrag.ondrop = function(evt){
	        //拖拽放弃的时候，拿到当前存储的className值，和当前的下标值
	        var on = parseInt(evt.dataTransfer.getData("on"));
	        evt.preventDefault();
          //查找所有对应的图片并且把下标也传过来
	        var myElement = mainTarget.getElementsByTagName("img")[on];
	            if(myElement.className == chartClassName){
                  var myNewElement = new Drag({
                        element:'DIV',
                        elementId:('odiv'+on),
                        isCreate:true,
                        targetItem:targetDrag,
                        needOut:false,
                        left:false,
                        top:false,
                        bottom:false,
                        right:false
                  })
                var m = on;//截取当前元素需要给div的id值
                var option = chart(m);
                var myChart = echarts.init(document.getElementById(myNewElement.obj.elementId));
                    myChart.setOption(option);                     
	             }else if(myElement.className == imgClassName){

	                var myNewElement = document.createElement("img");//创建一个img元素
	                    myNewElement.src = myElement.src;//让指定id的src属性赋值给创建的img
	                    targetDrag.appendChild(myNewElement); //在div下面插入这个新建的img
	             }

	          }
	}
	//动态生成div元素
	function Drag(obj){
       //存一下这里的this是指向drag，下面拖动的this都是需要这个this
       this.obj = obj;
       //改进不拖出边框
       this.left = obj.left;
       this.top = obj.top;
       this.right = obj.right;
       this.bottom = obj.bottom;
       //是否创建元素
       this.obj.isCreate?this.Create():this.unCreate();
       this.DragMouse();
  }
  Drag.prototype = {
       //创建元素
      "Create":function(){
         var data = document.createElement(this.obj.element.toLowerCase());
             data.id = this.obj.elementId;
             this.obj.targetItem.appendChild(data);
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
              this.needDrag.classList.add('downClass');
              this.needLeft = e.clientX - this.l;
              this.needTop = e.clientY - this.t; 
              //右边的算法，浏览器的最大宽度-自身的宽度
              if(this.obj.needOut){//判断是否限制在父元素内，限制那么父元素必须加上relative
                  this.parentNode = document.getElementById(this.obj.elementId).parentNode;
                  this.parentNode.style.position = 'relative'
                  this.maxLeft = this.parentNode.offsetWidth - this.needDrag.offsetWidth;
                  //下边的算法
                  this.maxBottom = innerHeight - this.needDrag.offsetHeight;
              }else{
                   this.maxLeft = innerWidth - this.needDrag.offsetWidth;
                   this.maxBottom = innerHeight - this.needDrag.offsetHeight;
              }
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
                  this.needDrag.classList.remove('downClass');
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

    var mainTarget = document.getElementsByTagName('ul')[0];
    var needDrag = mainTarget.getElementsByTagName('img');
    var targetDrag = document.getElementById('main');
    dragCharts({
      needDrag:needDrag,
      targetDrag:targetDrag,
      mainTarget:mainTarget,
      chartClassName:'asd',
    })
    var timerEnd = new Date().getTime();
    console.log(timerStart - timerEnd);

})();
