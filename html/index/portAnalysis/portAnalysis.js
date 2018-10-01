$(function(){
  $('.tab').on('click','li',function () {
    var divObj = $(this).parents('ul').siblings('div'),
      index = $(this).index();
    $(this).addClass('active').siblings('li').removeClass('active');
    divObj.eq(index).fadeIn(1000).siblings('div').fadeOut(1000);
  })
	/* 车辆来源地 */
  carSources()
  function carSources() {
    var map = echarts.init(document.getElementById('carSources'));
    var dataAll = [389, 259, 209, 262, 324, 632];
    var colorList = ['#1ac8ff'];
    var yAxisData = ['北京', '上海', '广州', '深圳', '西安', '成都'];
    var option = {
      title: [{
        text: "",
        x: '40%',
        y: '0',
        textStyle: {
          color: "#fff",
          fontSize: "18"
        }
      }],
      grid: [{
        x: '20%',
        y: '5%',
        width: '80%',
        height: '80%'
      }],
      tooltip: {
        formatter: '{b} ({c})'
      },
      xAxis: [{
        gridIndex: 0,
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false,
          textStyle: {
            color: '#fff'
          }
        },
        splitLine: {
          show: false
        },
        axisLine: {
          show: false
        }
      }, ],
      yAxis: [{
        gridIndex: 0,
        interval: 0,
        data: yAxisData.reverse(),
        axisTick: {
          show: false
        },
        axisLabel: {
          show: true
        },
        splitLine: {
          show: false
        },
        axisLine: {
          show: false,
          lineStyle: {
            color: "#6173a3"
          }
        },
        axisLabel: {
          textStyle: {
            color: '#fff'
          }
        }
      }],
      series: [{
        name: '投诉原因TOP10',
        type: 'bar',
        xAxisIndex: 0,
        yAxisIndex: 0,
        barWidth: '40%',
        itemStyle: {
          normal: {
            barBorderRadius: [0, 5, 5, 0],
            color: function(params) {
              var num = colorList.length;
              return colorList[params.dataIndex % num]
            }
          }
        },
        label: {
          normal: {
            show: true,
            position: "right",
            textStyle: {
              color: "#9EA7C4"
            }
          }
        },
        data: dataAll,
      }]
    }
    map.setOption(option);
  }
})