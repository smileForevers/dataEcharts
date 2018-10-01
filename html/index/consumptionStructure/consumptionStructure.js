$(function(){
	var jiegou = echarts.init(document.getElementById('consumptionMain'));
	option = {
		tooltip: {},
		radar: {
			indicator: [{
				text: '吃 15%',
				max: 5000
	
			}, {
				text: '住 25%',
				max: 5000
			}, {
				text: '行 15%',
				max: 5000
			}, {
				text: '游 12%',
				max: 5000
			}, {
				text: '购 8%',
				max: 5000
			}, {
				text: '娱 15%',
				max: 5000
			}],
			center:['50%','50%'], // 图的位置
			radius : '65%',
			name: {
				textStyle: {
					color: '#fff'
				}
			},
			splitArea: {
				areaStyle: {
					color: ['none', 'none', 'none', 'none', 'none']
				}
			},
			axisLine: {
				lineStyle: {
					color: '#5494FE'
				}
			},
			splitLine: {
				lineStyle: {
					color: '#5494FE'
				}
			}
		},
		series: [{
			name: '消费结构',
			type: 'radar',
			symbol: 'none',
			itemStyle: {
				normal: {
					areaStyle: {
						type: 'default'
					},
					color: '#48D1CC',
					borderColor: '#5ac3bd',
					shadowColor: 'rgba(0,0,0,0.5)'
				}
			},
			data: [{
				value: [1268, 2541, 1435, 1568, 2214,1758],
				name: '消费结构'
			}],

		}]
	};
	jiegou.setOption(option);
})