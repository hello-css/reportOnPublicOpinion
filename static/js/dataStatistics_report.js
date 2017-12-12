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



// 图表屏幕自适应
setTimeout(function (){
 window.onresize = function () {
 myChart1.resize();
 /*myChart2.resize();
 myChart3.resize();
 myChart4.resize();
 myChart5.resize();
 myChart6.resize();
 myChart7.resize();*/
 }
 },200);