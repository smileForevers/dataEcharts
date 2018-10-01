$(function(){
	$('#chinaMap').width()
	var arr=[	{name: "四川", value: [265,0]},
				{name: "江苏", value: [293,1]},
				{name: "浙江", value: [366,2]},
				{name: "广东", value: [537,3]},
				{name: "河南", value: [1000,4]}
			];
	if(arr.length==0){
		return;
	}
	var max=arr[0].value;
	var chinaMap = echarts.init(document.getElementById('chinaMap'));

	option = {
		title: {
	        text: '省份排名TOP5',
	        textStyle: {
                color: '#fff',
                fontSize:18
            },
	        left: 45,
	        top:'40%'
	    },
	    tooltip: {
	        trigger: 'item'
	    },
	    visualMap: {
	        type: 'piecewise',
	        dimension: 1,
	        pieces: [
	            {value: 4, color: '#d6ffd6'},
	            {value: 3, color: '#0b4cc5'},
	            {value: 2, color: '#1b86ff'},
	            {value: 1, color: '#3264da'},
	            {value: 0, color: '#2edffe'}
	        ],
	        formatter: function (value) {
	            return arr[value].name + '： ' + arr[value].value[0];
	        },
	        left: 60,
	        bottom: 10,
	        textStyle: {
                color: '#fff',
            }
	    },
	    series: [{
			name: 'value',
			type: 'map',
			mapType: 'china',
			roam: false,
			itemStyle: {
				normal: {
					borderColor : '#04c9eb',
					borderWidth : 0.5,
					areaColor : '#2171b6',
					label: {
						show: false
					}
				},
				emphasis: {
					borderColor : '#fff',
					borderWidth : 1,
					areaColor : '#fdfe4e',
					label: {
						show: false
					}
				}
			},
			data: arr
		}]
	};
	chinaMap.setOption(option);
})

