$(function(){
	var yuce=echarts.init(document.getElementById('main'));
	var xData = ['12-20','12-21','12-22','12-23','12-24','12-25','12-26'];
	var yData = [900,589,689,1251,956,786,361];
	var option = {
		color: ['#2dc9c9'],
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
			top: '15%',
			bottom: '5%',
			containLabel: true
		},
		xAxis: {
			type: 'category',
			boundaryGap: false,
			axisLabel: {
				textStyle: {
					color: '#fff'
				}
			},
			axisLine: {
				show: true,
				lineStyle: {
					color: '#fff',
					opacity: 0.2
				}
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: ['#fff'],
					type: 'solid',
					opacity: 0.2
				}
			},
			data: xData
		},
		yAxis: {
			type: 'value',
			name:'客流人数/人',
			textStyle: {

			},
			axisLine: {
				lineStyle: {
					color: '#fff',
					opacity: 0.2
				}
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: '#fff',
					type: 'solid',
					opacity: 0.2
				}
			},
		},
		series: [{
			name: '客流人数',
			type: 'line',
			stack: '总量',
			data: yData
		}]
	};
	yuce.setOption(option);
})