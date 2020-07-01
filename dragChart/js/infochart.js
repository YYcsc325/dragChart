(function(){






          // 路径配置
        require.config({
            paths: {
                echarts: 'http://echarts.baidu.com/build/dist'
            }
        });
        
        // 使用
        require(
            [
                'echarts',
                'echarts/chart/pie',// 使用柱状图就加载bar模块，按需加载
                'echarts/chart/bar',
                'echarts/chart/line',
            ],
            drawEcharts
        );

function drawEcharts(ec){//以后饼图，和柱状图可以分别写到一个函数中
　  drawBar(ec);
　　drawLine(ec);
// 　　drawLine1(ec);
}






function drawBar(ec) {    
        //这样引入好像不能添加echarts的各种风格


var myChart = ec.init(document.getElementById('bar-three')); 
var labelTop = {
    normal : {
        label : {
            show : true,
            position : 'center',
            formatter : '{b}',
            textStyle: {
                baseline : 'bottom'
            }
        },
        labelLine : {
            show : false
        }
    }
};
var labelFromatter = {
    normal : {
        label : {
            formatter : function (params){
                return 100 - params.value + '%'
            },
            textStyle: {
                baseline : 'top'
            }
        }
    },
}
var labelBottom = {
    normal : {
        color: '#ccc',
        label : {
            show : true,
            position : 'center'
        },
        labelLine : {
            show : false
        }
    },
    emphasis: {
        color: 'rgba(0,0,0,0)'
    }
};
var radius = [35, 50];
option ={
    legend: {
        x : 'center',
        y :150,
        data:[
            '医疗保险','人寿保险','车/车辆津贴','养老金','住房津贴',
            '其它', '俱乐部/健身房', '辛劳津贴', '子女教育', '私人开支/平衡'
        ]
    },
    title : {
        text: '酬薪政策',
        x: 'center'
    },
    toolbox: {
        show : true,
        feature : {
            dataView : {show: true, readOnly: false},
            magicType : {
                show: true, 
                type: ['pie'],
                option: {
                    funnel: {
                        width: '20%',
                        height: '30%',
                        itemStyle : {
                            normal : {
                                label : {
                                    formatter : function (params){
                                        return 'other\n' + params.value + '%\n'
                                    },
                                    textStyle: {
                                        baseline : 'middle'
                                    }
                                }
                            },
                        } 
                    }
                }
            },
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    series : [
        {
            type : 'pie',
            center : ['10%', '30%'],
            radius : radius,
            x: '0%', // for funnel
            itemStyle : labelFromatter,
            data : [
                {name:'other', value:22, itemStyle : labelBottom},
                {name:'医疗保险', value:78,itemStyle : labelTop}
            ]
        },
        {
            type : 'pie',
            center : ['30%', '30%'],
            radius : radius,
            x:'20%', // for funnel
            itemStyle : labelFromatter,
            data : [
                {name:'other', value:61, itemStyle : labelBottom},
                {name:'人寿保险', value:39,itemStyle : labelTop}
            ]
        },
        {
            type : 'pie',
            center : ['50%', '30%'],
            radius : radius,
            x:'40%', // for funnel
            itemStyle : labelFromatter,
            data : [
                {name:'other', value:69, itemStyle : labelBottom},
                {name:'车/车辆津贴', value:31,itemStyle : labelTop}
            ]
        },
        {
            type : 'pie',
            center : ['70%', '30%'],
            radius : radius,
            x:'60%', // for funnel
            itemStyle : labelFromatter,
            data : [
                {name:'other', value:69, itemStyle : labelBottom},
                {name:'养老金', value:31,itemStyle : labelTop}
            ]
        },
        {
            type : 'pie',
            center : ['90%', '30%'],
            radius : radius,
            x:'80%', // for funnel
            itemStyle : labelFromatter,
            data : [
                {name:'other', value:76, itemStyle : labelBottom},
                {name:'住房津贴', value:24,itemStyle : labelTop}
            ]
        },
        {
            type : 'pie',
            center : ['10%', '80%'],
            radius : radius,
            y: '55%',   // for funnel
            x: '0%',    // for funnel
            itemStyle : labelFromatter,
            data : [
                {name:'other', value:83, itemStyle : labelBottom},
                {name:'其它', value:17,itemStyle : labelTop}
            ]
        },
        {
            type : 'pie',
            center : ['30%', '80%'],
            radius : radius,
            y: '55%',   // for funnel
            x:'20%',    // for funnel
            itemStyle : labelFromatter,
            data : [
                {name:'other', value:84, itemStyle : labelBottom},
                {name:'俱乐部/健身房', value:16,itemStyle : labelTop}
            ]
        },
        {
            type : 'pie',
            center : ['50%', '80%'],
            radius : radius,
            y: '55%',   // for funnel
            x:'40%', // for funnel
            itemStyle : labelFromatter,
            data : [
                {name:'other', value:90, itemStyle : labelBottom},
                {name:'辛劳津贴', value:10,itemStyle : labelTop}
            ]
        },
        {
            type : 'pie',
            center : ['70%', '80%'],
            radius : radius,
            y: '55%',   // for funnel
            x:'60%', // for funnel
            itemStyle : labelFromatter,
            data : [
                {name:'other', value:93, itemStyle : labelBottom},
                {name:'子女教育', value:7,itemStyle : labelTop}
            ]
        },
        {
            type : 'pie',
            center : ['90%', '80%'],
            radius : radius,
            y: '55%',   // for funnel
            x:'80%', // for funnel
            itemStyle : labelFromatter,
            data : [
                {name:'other', value:88, itemStyle : labelBottom},
                {name:'私人开支/平衡', value:12,itemStyle : labelTop}
            ]
        }
    ]
};


myChart.setOption(option,true); 


}


// 能不能setOption直接加载需要异步请求的数据

function drawLine(ec){


var myChart7 = ec.init(document.getElementById('bar-one'),'macarons'); 
var myChart8 = ec.init(document.getElementById('bar-two'),'macarons'); 

    ajax({
        type:"get",
        url:"php/getmsg.php",
        data:{},
        dataType:"json"
    }).then(res=>{
        console.log(res);
        var n1=[],n2=[],n3=[],n4=[],n5=[],n6=[];
        var m1=[],m2=[],m3=[],m4=[],m5=[],m6=[];
        res.forEach((p,i)=>{
            var {uname,msgq,msgw,msge,msgr,msgt}=p;
            if(i<5){
                n1.push(uname);
                n2.push(msgq);
                n3.push(msgw);
                n4.push(msge);
                n5.push(msgr);
                n6.push(msgt);
    option7 = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['无', '至多3%','从3%-6%','从6%-10%','超过10%']
    },
    toolbox: {
        show : true,
        feature : {
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['bar','tiled','line']},
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
            data :n1
        }
    ],
    series : [
        {
            name:'无',
            type:'bar',
            stack: '总量',
            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
            data:n2
        },
        {
            name:'至多3%',
            type:'bar',
            stack: '总量',
            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
            data:n3
        },
        {
            name:'从3%-6%',
            type:'bar',
            stack: '总量',
            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
            data:n4
        },
        {
            name:'从6%-10%',
            type:'bar',
            stack: '总量',
            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
            data:n5
        },
        {
            name:'超过10%',
            type:'bar',
            stack: '总量',
            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
            data:n6
        },
    ]
};


myChart7.setOption(option7,true)  //这里的true会防止数据重载


}else{
    m1.push(uname);
    m2.push(msgq);
    m3.push(msgw);
    m4.push(msge);
    m5.push(msgr);
    m6.push(msgt);
    option8 = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['无', '至多3%','从3%-6%','从6%-10%','超过10%']
    },
    toolbox: {
        show : true,
        feature : {
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['bar','tiled']},
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
            data :m1
        }
    ],
    series : [
        {
            name:'无',
            type:'bar',
            stack: '总量',
            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
            data:m2
        },
        {
            name:'至多3%',
            type:'bar',
            stack: '总量',
            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
            data:m3
        },
        {
            name:'从3%-6%',
            type:'bar',
            stack: '总量',
            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
            data:m4
        },
        {
            name:'从6%-10%',
            type:'bar',
            stack: '总量',
            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
            data:m5
        },
        {
            name:'超过10%',
            type:'bar',
            stack: '总量',
            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
            data:m6
        },
    ]
};


myChart8.setOption(option8,true);


}

});//for each
      

});//ajax

}



})();