$(function(){
	getMain()
})
$('.clickBtnList').click(function(){
  $(this).addClass('active').siblings().removeClass('active');
  var index=$(this).index();
  if(index==0){
  	$('.main').eq(0).addClass('active').siblings().removeClass('active');
    getMain();
  }else if(index==1){
  	$('.main').eq(1).addClass('active').siblings().removeClass('active');
  }
})
function getMain(){
	var keliu=echarts.init(document.getElementById('main'));
    var shiXdata=["09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00"];
    var shiYdata=[152,140,265,345,254,198,375,465];
    var option = {
      tooltip: {
        trigger: 'axis'
      },
      toolbox: {
        show: false,
        feature: {
          magicType: {show: true, type: ['line', 'bar']},
        }
      },
      grid: {
        left: '3%',
        right: '7%',
        top: '16%',
        bottom: '5%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLabel: {
          interval: 0,
          textStyle: {
            color: '#fff',
            align: 'center',
            fontWeight: '100'
          }
        },
        axisLine: {
          lineStyle: {
            color: "#fff"
          }
        },
        splitLine: {
          show: false,
          lineStyle: {
            color: ['#fff'],
            type: 'solid',
            opacity: 0.1
          }
        },
        axisTick: {
          show: false
        },
        data: shiXdata
      },
      yAxis: {
        type: 'value',
        name:'客流人数/人',
        axisLabel: {
          textStyle: {
            color: '#fff'
          }
        },
        axisLine: {
          lineStyle: {
            color: "#fff"
          }
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: ['#fff'],
            type: 'solid',
            opacity: 0.1
          }
        }
      },
      series: [{
        name: '客流人数',
        type: 'line',
        sampling: 'average',
        itemStyle: {
          normal: {
            color: '#20c6c6'
          }
        },
        areaStyle: {
          normal: {
            "color": new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              "offset": 0,
              "color": "rgba(9,124,140,0.2)" // 0% 处的颜色
            }, {
              "offset": 1,
              "color": "rgba(9,124,140,1)" // 100% 处的颜色
            }], false)
          }
        },
        data: shiYdata
      }]
    };
    keliu.setOption(option);
}
