import * as echarts from '../../public/components/ec-canvas/echarts';

let
    option = {
        color: [
            "rgba(122,203,145,0.5)"
        ],
        title: {
            show: false
        },
        tooltip : {
            show: true,
            trigger: 'axis',
            triggerOn: "click",
            axisPointer: {
                type: 'cross',
                label: {
                    show: true,
                    precision: 0,
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            show: false
        },
        toolbox: {
            show: false,
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                show: false,
                splitLine: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    handle: true
                },
                boundaryGap : false,
                data : ['1号','2号','3号','4号','5号','6号','7号']
            }
        ],
        yAxis : [
            {
                type : 'value',
                show: false,
                splitLine: {
                    show: false
                },
                axisLabel: {
                    show: false
                }
            }
        ],
        series : [
            {
                // name:'邮件营销',
                type:'line',
                stack: '步数',
                areaStyle: {normal: {}},
                data:[5000, 1000, 4000, 6000, 10000, 4441, 2101],
                label: {
                    normal: {
                        show: false,
                        position: 'bottom'
                    }
                },
                markPoint: {
                    data: [ {
                        value: 2101,
                        coord: [6, 2101]
                    } ]
                }
            }
        ]
    },
    chart
;

function initChart(canvas, width, height) {

    chart = echarts.init(canvas, null, {
        width: width,
        height: height
    });

    canvas.setChart(chart);

    chart.setOption(option);

    // return chart;
}

Page( {
    data: {
        isMonth: false,

        // 单日最高步数
        maxSteps: 6186,

        // 总打卡天数
        totalSign: 12,

        // 今日步数
        todaySteps: 3491,

        // 信息
        msg: "还不错",

        // 公里
        distance: 2.5,

        //
        calories: 101,

        // 顶部上限
        topLimit: 6500,

        ec: {
            onInit: initChart
        }
    },

    onLoad: function () {
    },
    switchDate: function () {
        let isMonth = this.data.isMonth;
        this.setData( {
            isMonth: !isMonth
        } );
    }
} );