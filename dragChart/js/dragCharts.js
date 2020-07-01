(function(){



function chart(i){

            // 指定图表的配置项和数据
if(i == 1){
    return  option = {
        title: {
            text: '阶梯瀑布图',
            subtext: 'From ExcelHome',
            sublink: 'http://e.weibo.com/1341556070/Aj1J2x5a5'
        },
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter: function (params) {
                var tar;
                if (params[1].value != '-') {
                    tar = params[1];
                }
                else {
                    tar = params[0];
                }
                return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
            }
        },
        legend: {
            data:['支出','收入']
        },
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        xAxis : [
            {
                type : 'category',
                splitLine: {show:false},
                data :  function (){
                    var list = [];
                    for (var i = 1; i <= 11; i++) {
                        list.push('11月' + i + '日');
                    }
                    return list;
                }()
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        dataZoom:{show:true},
        series : [
            {
                name:'辅助',
                type:'bar',
                stack: '总量',
                itemStyle:{
                    normal:{
                        barBorderColor:'rgba(0,0,0,0)',
                        color:'rgba(0,0,0,0)'
                    },
                    emphasis:{
                        barBorderColor:'rgba(0,0,0,0)',
                        color:'rgba(0,0,0,0)'
                    }
                },
                data:[0, 900, 1245, 1530, 1376, 1376, 1511, 1689, 1856, 1495, 1292]
            },
            {
                name:'收入',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: true, position: 'top'}}},
                data:[900, 345, 393, '-', '-', 135, 178, 286, '-', '-', '-']
            },
            {
                name:'支出',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: true, position: 'bottom'}}},
                data:['-', '-', '-', 108, 154, '-', '-', '-', 119, 361, 203]
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
        data:['直接访问', '邮件营销','联盟广告']
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
            type : 'value'
        }
    ],
    yAxis : [
        {
            type : 'category',
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    series : [
        {
            name:'直接访问',
            type:'bar',
            stack: '总量',
            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
            data:[320, 302, 301, 334, 390, 330, 320]
        },
        {
            name:'邮件营销',
            type:'bar',
            stack: '总量',
            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'联盟广告',
            type:'bar',
            stack: '总量',
            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
            data:[220, 182, 191, 234, 290, 330, 310]
        },


    ]
};
}else if(i == 3){
return option = {
    title: {
        text: '阶梯瀑布图',
        subtext: 'From ExcelHome',
        sublink: 'http://e.weibo.com/1341556070/Aj1J2x5a5'
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function (params) {
            var tar;
            if (params[1].value != '-') {
                tar = params[1];
            }
            else {
                tar = params[0];
            }
            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
        }
    },
    legend: {
        data:['支出','收入']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    xAxis : [
        {
            type : 'category',
            splitLine: {show:false},
            data :  function (){
                var list = [];
                for (var i = 1; i <= 11; i++) {
                    list.push('11月' + i + '日');
                }
                return list;
            }()
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'辅助',
            type:'bar',
            stack: '总量',
            itemStyle:{
                normal:{
                    barBorderColor:'rgba(0,0,0,0)',
                    color:'rgba(0,0,0,0)'
                },
                emphasis:{
                    barBorderColor:'rgba(0,0,0,0)',
                    color:'rgba(0,0,0,0)'
                }
            },
            data:[0, 900, 1245, 1530, 1376, 1376, 1511, 1689, 1856, 1495, 1292]
        },
        {
            name:'收入',
            type:'bar',
            stack: '总量',
            itemStyle : { normal: {label : {show: true, position: 'top'}}},
            data:[900, 345, 393, '-', '-', 135, 178, 286, '-', '-', '-']
        },
        {
            name:'支出',
            type:'bar',
            stack: '总量',
            itemStyle : { normal: {label : {show: true, position: 'bottom'}}},
            data:['-', '-', '-', 108, 154, '-', '-', '-', 119, 361, 203]
        }
    ]
 };
}else if( i == 4){
 return option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['利润', '支出', '收入']
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
            type : 'value'
        }
    ],
    yAxis : [
        {
            type : 'category',
            axisTick : {show: false},
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    series : [
        {
            name:'利润',
            type:'bar',
            itemStyle : { normal: {label : {show: true, position: 'inside'}}},
            data:[200, 170, 240, 244, 200, 220, 210]
        },
        {
            name:'收入',
            type:'bar',
            stack: '总量',
            barWidth : 5,
            itemStyle: {normal: {
                label : {show: true}
            }},
            data:[320, 302, 341, 374, 390, 450, 420]
        },
        {
            name:'支出',
            type:'bar',
            stack: '总量',
            itemStyle: {normal: {
                label : {show: true, position: 'left'}
            }},
            data:[-120, -132, -101, -134, -190, -230, -210]
        }
    ]
};

}
}


//进行图表的拖拽
function dragCharts(needDrag,targetDrag,imgClassName,chartClassName){
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
        var myElement = document.getElementsByTagName("img")[on];//查找所有对应的图片并且把下标也传过来
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

        var dragItem = document.getElementsByTagName("img");
        var dropLoc = document.getElementById("dropLocation");
        dragCharts(dragItem,dropLoc,"imgo","asd");


})();


//图片拖拽函数,下面一个函数会覆盖上面一个，因为targetDrag是落在全局的
// (function(){


// function dragImg(needDrag,targetDrag){
// var length = needDrag.length;
// for(var i = 0;i < length; i++){
//     (function(m){//闭包实现
//         needDrag[m].ondragstart = function(evt){
//             //在拖拽开始时当前这个对象有dataTransfer属性,用setData方法存入一个属性为key，值为当前拖拽对象的id
//             evt.dataTransfer.setData("key",evt.target.className);//获取到当前的className
//             evt.dataTransfer.setData("on",m);//这个是把当前对象下标也传过来
//         }
//   }(i));
// }
// targetDrag.ondragover = function(evt){//拖入指定区域时触发事件
//     evt.preventDefault();
// }
// //ondrop 事件在可拖动元素或选取的文本放置在目标区域时触发。
// targetDrag.ondrop = function(evt){
//     //拖拽放弃的时候，拿到当前存储的className值，和当前的下标值
//     var dropItem = evt.dataTransfer.getData("key");
//     var on = parseInt(evt.dataTransfer.getData("on"));
//     evt.preventDefault();
//     var myElement = document.getElementsByClassName(dropItem)[on];//以这个id为标准查找这个元素
//     var myNewElement = document.createElement("img");//创建一个img元素
//     myNewElement.src = myElement.src;//让指定id的src属性赋值给创建的img
//     targetDrag.appendChild(myNewElement); //在div下面插入这个新建的img
//  }
// }
// function doit(){
//     var needtarget = document.getElementsByClassName("imgo");
//     var target = document.getElementById("dropLocation");
//     dragImg(needtarget,target);
// }
// doit();


// })();