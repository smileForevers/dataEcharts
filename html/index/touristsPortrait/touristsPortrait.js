$(function(){
	var age = echarts.init(document.getElementById('rightMain'));
	option = {
		tooltip: {
			trigger: 'item',
			formatter: "{b}\n{d}%",
		},
		series: [{
			name: '游客年龄',
			type: 'pie',
			radius: '55%',
			center: ['50%', '50%'],
			color:['#2edffe', '#f8c85d', '#6b7bff', '#2dd59c', '#1b86ff'],
			data: [{
					value: 456,
					name: '19岁以下'
				},
				{
					value: 259,
					name: '19-25岁'
				},
				{
					value: 645,
					name: '25-45岁'
				},
				{
					value: 159,
					name: '45-60岁'
				},
				{
					value: 130,
					name: '60岁以上'
				}
			],
			itemStyle: {
				normal: {
					label: {
						show: true,
						formatter: "{b}\n{d}%",
					},
					labelLine: {
						show: true,
						length:14,
						length2:0
					}
				},
				emphasis: {
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				},
			}
		}]
	};
	age.setOption(option);
})