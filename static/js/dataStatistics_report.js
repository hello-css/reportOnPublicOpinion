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

// 图表屏幕自适应
setTimeout(function (){
 window.onresize = function () {
 myChart1.resize();
 myChart2.resize();
 myChart3.resize();
     /*myChart4.resize();
 myChart5.resize();
 myChart6.resize();
 myChart7.resize();*/
 }
 },200);