$(function(){
	var allResource = echarts.init(document.getElementById('main'));
	option = {
		color: ['#1ac8ff'],
		tooltip: {
			trigger: 'axis',
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
			top: '15%',
			containLabel: true
		},
		xAxis: [{
			type: 'category',
			data: ['大巴', '动车', '自驾', '飞机', '其他'],
			axisLine: {
				show: true,
				lineStyle: {
					color: '#5AD1FF',
					type: 'solid',
					opacity: 0.08
				}
			},
			axisLabel: {
				inside: false,
				interval: 0,
				textStyle: {
					color: '#fff'
				}
			},
			axisTick: {
				show: false
			},
			z: 10
		}],
		yAxis: [{
			type: 'value',
			splitNumber:3,
			axisLine: {
				show: true,
				lineStyle: {
					color: '#5AD1FF',
					type: 'solid',
					opacity: 0.08
				}
			},
			axisTick: {
				show: false
			},
			axisLabel: {
				formatter: '{value}%',
				textStyle: {
					color: '#fff'
				}
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: '#5AD1FF',
					type: 'solid',
					opacity: 0.08
				}
			},
		}],
		series: [{
			name: '',
			type: 'bar',
			barWidth: '40%',
			data: [12, 24, 34, 10, 20]
		}]
	};
	allResource.setOption(option);
})