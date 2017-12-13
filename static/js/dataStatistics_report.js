//近一周舆情上报数
var myChart1 = echarts.init(document.getElementById('echart-ds1'));
option1 = {
    color: ["#03b2fc"],
    title: {
        text: '审批年度排名前十(单位:指数)',
        textStyle: {
            fontSize:'14px'
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        left: '3%',
        right: '0px',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['2017/12/12', '2017/12/13', '2017/12/14', '2017/12/15', '2017/12/16', '2017/12/17', '2017/12/18'],
        axisLine: {
            show: true,
            lineStyle: {
                color: '#8e99a8',
                width: 1,
                type: 'solid'
            }
        }
    },
    yAxis: [{
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#8e99a8',
                width: 1,
                type: 'solid'
            }
        },
        axisLabel: {
            margin: 10,
        },

        splitLine: {
            show: false,
            lineStyle: {
                color: '#57617B'
            }
        },
        splitArea: {
            show: false
        },
    }],
    series: [{
        name: '舆情上报数',
        type: 'line',
        smooth: true,
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(3, 178, 252, 0.7)'
                }, {
                    offset: 1,
                    color: 'rgba(3, 178, 252, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        data: [120, 132, 101, 134, 90, 230, 210, 240, 300, 260, 300]
    }]
};
myChart1.setOption(option1);

var myChart2 = echarts.init(document.getElementById('echart-ds2'));
option2 = {
    color:['#fc6d6e','#ff9901','#ffcc01'],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    title: {
        text:'200',
        subtext:'主机（台）',
        left:'center',
        top:'35%',
        padding:[24,0],
        textStyle:{
            color:'#34495e',
            fontSize:32,
            align:'center'
        },
        subtextStyle:{
            color:'#8d989d',
            fontSize:14,
            align:'center'
        }
    },
   /* legend: {
        icon : 'circle',
        orient: 'vertical',
        x: 'right',
        y:'middle',
        data: ['红色', '橙色', '黄色'],
        itemHeight:10,
        itemWidth:10
    },*/
    series: [{
        symbol:'circle',
        name: '等级',
        type: 'pie',
        radius: ['56%', '76%'],
        avoidLabelOverlap: false,
        label: {
            normal: {
                show: false,
                position: 'center'
            },
            emphasis: {
                show: false,
                textStyle: {
                    fontSize: '16',
                    fontWeight: 'bold'
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        itemStyle:{
            normal:{
                borderWidth:5,
                borderColor:'#fff'
            }
        },
        data: [
            { value: 535, name: '红色' },
            { value: 310, name: '橙色' },
            { value: 234, name: '黄色' }
        ]
    }]
};
myChart2.setOption(option2);

var myChart3 = echarts.init(document.getElementById('echart-ds3'));
var scale = 1;
var echartData = [{
    value: 2154,
    name: '现场'
}, {
    value: 3854,
    name: '其他'
}, {
    value: 3515,
    name: '媒体'
}, {
    value: 4515,
    name: '网络'
}];
option3 = {
    series: [{
        name: '来源',
        type: 'pie',
        radius: ['52%', '70%'],
        hoverAnimation: false,
        color: [ '#02cca6', '#01d8e4', '#fcdc5c','#fd6e6f'],
        label: {
            normal: {
                formatter: function(params, ticket, callback) {
                    var total = 0; //来源总数量
                    var percent = 0; //来源占比
                    echartData.forEach(function(value, index, array) {
                        total += value.value;
                    });
                    percent = ((params.value / total) * 100).toFixed(1);
                    return '' + params.name + '\n\n\n' + percent + '%';
                }
            }
        },
        labelLine: {
            normal: {
                length: 15 * scale,
                length2: 60,
                lineStyle: {
                    color: '#ededed'
                }
            }
        },
        itemStyle:{
            normal:{
                borderWidth:5,
                borderColor:'#fff'
            }
        },
        data: echartData
    }]
};
myChart3.setOption(option3);


var myChart4 = echarts.init(document.getElementById('echart-ds4'));
option4 = {
    color: ['#02cca6','#01d8e4','#ffcc01'],
    grid: {
        y:'6%',
        y2:'0',
        x:'0',
        x2:'0',
        containLabel: true
    },
    tooltip : {
        trigger: 'axis'
    },
     legend: {
        icon:'circle',
         x: 'right',
         padding: [0, 12, 0, 50],
         itemWidth: 8,
         itemHeight:8,
         data:['点击数','评论数','预估值']
     },
    xAxis: [
        {
            axisLabel :{
                interval:0
            }  ,
            show:true,
            type: 'category',
            data:  ['2017/12/12', '2017/12/13', '2017/12/14', '2017/12/15', '2017/12/16', '2017/12/17', '2017/12/18'],
            fontSize: 6,
            scale: true,
            axisTick: {
                alignWithLabel: false
            },
            splitLine: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#8e99a8',
                    width: 1,
                    type: 'solid'
                }
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            axisLabel: {
                formatter: '{value}'
            },
            splitLine: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#8e99a8',
                    width: 1,
                    type: 'solid'
                }
            }
        }
    ],
    series : [
        {
            name:'点击数',
            type:'bar',
            barWidth:'12%',
            barGap: '50%',
            data:[24.0, 44.9, 27.0, 23.2, 25.6, 36.7, 76.7]


        },
        {
            name:'评论数',
            type:'bar',
            barWidth:'12%',
            barGap: '50%',
            data:[32.0, 34.9, 47.0, 53.2, 45.6, 76.7, 16.7]
        },
        {
            name:'预估值',
            type:'bar',
            barWidth:'12%',
            barGap: '50%',
            data:[32.0, 14.9, 67.0, 23.2, 25.6, 66.7, 36.7]
        }

    ]
};
myChart4.setOption(option4);



// 图表屏幕自适应
setTimeout(function (){
 window.onresize = function () {
 myChart1.resize();
 myChart2.resize();
 myChart3.resize();
 myChart4.resize();
 }
 },200);