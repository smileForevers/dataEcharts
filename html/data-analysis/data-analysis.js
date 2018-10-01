var allColor = ['#f8c85d', '#26b9bc', '#e2914d', '#2edffe', '#80ca58', '#1b86ff', '#2dd59c', '#6b7bff', '#0F57FB', '#21BF5E'];
$(function() {
	var token = sessionStorage.getItem('token');
  	// if(!token) {
    	// location.href = '../login.html?code=2'
  	// }
	layui.use('laydate', function() {
		var laydate = layui.laydate;
		laydate.render({
			elem: '#timeContr1', //指定元素
			value:'2018-05-01 ',
			done: function(value) {

			}
		});
		laydate.render({
			elem: '#timeContr2', //指定元素
			value:'2018-05-01 至 2018-05-10',
			range: '至',
			done: function(value, startDate, endDate) {

			}
		});
		laydate.render({
			elem: '#timeContr3', //指定元素
			value:'2018-05-01 ',
			done: function(value) {

			}
		});
		laydate.render({
			elem: '#timeContr4', //指定元素
			value:'2018-05-01 至 2018-05-10',
			range: '至',
			done: function(value, startDate, endDate) {

			}
		});
		laydate.render({
			elem: '#timeContr5', //指定元素
			value:'2018-05-01 至 2018-05-10',
			range: '至',
			done: function(value, startDate, endDate) {

			}
		});
		laydate.render({
			elem: '#test1', //指定元素
			value:'2018-05-01 至 2018-05-10',
			range: '至',
			done: function(value, startDate, endDate) {

			}
		});
		laydate.render({
			elem: '#test3', //指定元素
			value:'2018-05-01 至 2018-05-10',
			range: '至',
			done: function(value, startDate, endDate) {

			}
		});
		laydate.render({
			elem: '#test4', //指定元素
			value:'2018-05-01 至 2018-05-10',
			range: '至',
			done: function(value, startDate, endDate) {

			}
		});
		laydate.render({
			elem: '#test5', //指定元素
			value:'2018-05-01 至 2018-05-11',
			range: '至',
			done: function(value, startDate, endDate) {

			}
		});
		laydate.render({
			elem: '#test6', //指定元素
			value:'2018-05-01 至 2018-05-11',
			range: '至',
			done: function(value, startDate, endDate) {

			}
		});
	    laydate.render({
	      elem: '#test', //指定元素
	      value:'2018-05-01 至 2018-05-11',
	      range: '至',
	      done: function(value, startDate, endDate) {
	
	      }
	    });
		laydate.render({
			elem: '#test7', //指定元素
			value:'2018-05-01 至 2018-05-11',
			range: '至',
			done: function(value, startDate, endDate) {

			}
		});
	});
	$('.payname').click(function() {
		$('.selectPaywayB').slideDown();
	})
	$('.selectPaywayB p').each(function() {
		$(this).click(function() {
			$('.payname').html($(this).html());
			$('.selectPaywayB').slideUp();
		})
	})
	initDeviceInfo()
	$('._mainTopBtn').click(function() {
		var index = $(this).index();
		$(this).addClass('active').siblings().removeClass('active');
		$('.analyse').eq(index).addClass('active').siblings().removeClass('active');
		evaluateChart();
	})
	/* wifi热力图 */
  wifiContainer();

  /*  游客来源排名 */
  sourceRank();
  function sourceRank() {
		var list = $('#sourceRank .paywayList');
		var main = $('#sourceRank .hotSearchMain');
		list.on('click', function () {
			console.log($(this).index())
			$(this).addClass('active').siblings('.paywayList').removeClass('active');
      main.eq($(this).index()).show().siblings('.hotSearchMain').hide();
    })
  }
})
function initDeviceInfo() {
	$('#wifi').on('click', function() {
		$('#deviceWifi').show();
		$('#devicePark,#deviceWel ').hide();
		$(this).addClass('active').siblings().removeClass('active');
		deviceWifi();
	})
	$('#park').on('click', function() {
		$('#devicePark').show();
		$('#deviceWel,#deviceWifi').hide();
    	$(this).addClass('active').siblings().removeClass('active');
		devicePark();
	})
}


/* 景区设备信息 */
function deviceWifi() {
	/* wifi热力图 */
  wifiContainer();
	/* 新老客户 */
	client();
	/* wifi连接时长 */
	time();
	/* wifi分布与利用率 */
	rate();
	/* 来访频次 */
	number();
	/* 出现时间段 */
	timeRang();
}

function devicePark() {
	parkSourseListMain1();
	parkSourseListMain2();
	park1();
	park2();
	park3();
}
/* WiFi热力图 */
function wifiContainer() {
  var wifimap = new AMap.Map('wifiContainer', {
    resizeEnable: true,
    zoom: 13,
    center: [121.665921, 29.769355]
  });
//wifimap.setMapStyle("amap://styles/c36ff2cfd036dd274b0d5e3d77ca45c8");
  var markers = [];
  var marker = new AMap.Marker({
    position: [121.673245, 29.799011],
    map: wifimap,
    icon: '../../img/icon/post.png',
    title: '雅戈尔动物园'
  });
  markers.push(marker);
  var marker2 = new AMap.Marker({
    position: [121.643547, 29.776217],
    map: wifimap,
    icon: '../../img/icon/mechine.png',
    title: '陶公岛'
  });
  markers.push(marker2);
  var marker3 = new AMap.Marker({
    position: [121.658137, 29.769088],
    map: wifimap,
    icon: '../../img/icon/camera.png',
    title: '小普陀景区'
  });
  markers.push(marker3);
  var marker4 = new AMap.Marker({
    position: [121.682427, 29.755304],
    map: wifimap,
    icon: '../../img/icon/wifi.png',
    title: '南宋石刻公园'
  });
  markers.push(marker3);
}
/* 客流量分析 */
function clientFn() {
	/* 游客热力图 */
	heatMap()
	/* 未来客流预测 */
	clientFlowF()
	/* 湖区游客实时统计 */
	clientFlow({color: '#34d5e0', isToday: true})
	/* 景区客流同比 */
	clientFlowC()

}
/* 客源地分析 */
function clientSourceFn() {
	/* 游客来源组成 */
	chinaMap();
	sourcePart2()
}
/* 游客画像分析 */
function clientPicFn() {
	/* 游客年龄 */
	clientAge();
	/* 游客职业 */
	clientJob()
	/* 游客手机应用类型 */
	phoneType()
	/* 游客消费水平 */
	paymentLevel();
	$('.basePartBtnList').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	})
	
}
/* 媒体信息监测 */
function mediaFn(){
	PublicOpinionCount();
	sentimentAnalysis();
	sentimentTrend();
	themePart();
	PublicOpinionExponentTrend();
	$('#yuqingBtn').on('click', function() {
		$(this).addClass('active').siblings().removeClass('active');
		$('#yuqingMain').addClass('active');
		$('#pinglunMain').removeClass('active');
		PublicOpinionCount();
		sentimentAnalysis();
		sentimentTrend();
		themePart();
		PublicOpinionExponentTrend();
	})
	$('#pinglunBtn').on('click', function() {
		$(this).addClass('active').siblings().removeClass('active');
		$('#pinglunMain').addClass('active');
		$('#yuqingMain').removeClass('active');
		evaluateChart();
	})
}
/* 游客消费分析 */
function clientPayFn() {
	/* 支付方式统计 */
	payWay1();
	/* 热销商品 */
	hotBuy();
	/*线下售票统计*/
	paycount1();
	/*OTA票券数据统计*/
	OTACount();
	/*游客消费水平*/
	buyLevel();
}
/* 游客关注度分析 */
function attentionFn(){
	/* 最热词 */
	mostHotWords();
	$('#hotWordBtn').on('click', function() {
		$(this).addClass('active').siblings().removeClass('active');
		$('#hotWordMain').addClass('active');
		$('#hotSearchMain').removeClass('active');
		mostHotWords();
	})
	$('#hotSearchBtn').on('click', function() {
		$(this).addClass('active').siblings().removeClass('active');
		$('#hotSearchMain').addClass('active');
		$('#hotWordMain').removeClass('active');
	})
}

function mostHotWords(){
	var entries = [ 
		{ label: 'Back to top', url: '#', target: '_top' },
		{ label: 'Bootstrap', url: '#', target: '_top' },
		{ label: 'Carousel', url: '#', target: '_top' },
		{ label: 'Countdown', url: '#', target: '_top' },
		{ label: 'Dropdown Menu', url: '#', target: '_top' },
		{ label: 'CodePen', url: 'http://sc.chinaz.com/', target: '_top' },
		{ label: 'three.js', url: 'http://sc.chinaz.com/', target: '_top' },
		{ label: 'Form Validation', url: '#', target: '_top' },
		{ label: 'JS Compress', url: 'http://sc.chinaz.com/', target: '_top' },
		{ label: 'TinyPNG', url: 'http://sc.chinaz.com/', target: '_top' },
		{ label: 'Can I Use', url: 'http://sc.chinaz.com/', target: '_top' },
		{ label: 'URL shortener', url: 'http://sc.chinaz.com/', target: '_top' },
		{ label: 'Grid Layout', url: '#', target: '_top' },
		{ label: 'Twitter', url: 'http://sc.chinaz.com/', target: '_top' },
		{ label: 'deviantART', url: 'http://sc.chinaz.com/', target: '_top' },
		{ label: 'Gulp', url: 'http://sc.chinaz.com/', target: '_top' },
		{ label: 'Browsersync', url: 'http://sc.chinaz.com/', target: '_top' },
		{ label: 'GitHub', url: 'https://github.com/', target: '_top' },
		{ label: 'Shadertoy', url: 'http://sc.chinaz.com/', target: '_top' },
		{ label: 'Tree View', url: '#', target: '_top' },
		{ label: 'jsPerf', url: 'http://sc.chinaz.com/', target: '_top' },
		{ label: 'Foundation', url: 'http://sc.chinaz.com/', target: '_top' },
		{ label: 'CreateJS', url: 'http://sc.chinaz.com/', target: '_top' },
		{ label: 'Velocity.js', url: 'http://sc.chinaz.com/', target: '_top' },
		{ label: 'TweenLite', url: 'http://sc.chinaz.com/', target: '_top' },
		{ label: 'jQuery', url: 'http://sc.chinaz.com/', target: '_top' },
		{ label: 'Notification', url: '#', target: '_top' },
		{ label: 'Parallax', url: '#', target: '_top' }
	];

	var settings = {
		entries: entries,
		width: 640,
		height: 480,
		radius: '85%',
		radiusMin: 75,
		bgDraw: false,
		bgColor: '#494A5F',
		opacityOver: 1.00,
		opacityOut: 0.05,
		opacitySpeed: 6,
		fov: 800,
		speed: 0.08,
		fontFamily: 'Oswald, Arial, sans-serif',
		fontSize: '32',
		fontColor: '#2edafe',
		fontWeight: 'normal',//bold
		fontStyle: 'normal',//italic 
		fontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
		fontToUpperCase: true

	};

	//var svg3DTagCloud = new SVG3DTagCloud( document.getElementById( 'holder'  ), settings );
	$( '#tag-cloud' ).svg3DTagCloud( settings );
}

function parkSourseListMain1() {
	var parkSourseListMain1 = echarts.init(document.getElementById('parkSourseListMain1'));
	var appusage_data = [{
		name: "成都",
		value: 34
	}, {
		name: "深圳",
		value: 46
	}, {
		name: "广州",
		value: 53
	}, {
		name: "天津",
		value: 68
	}, {
		name: "上海",
		value: 79
	}, {
		name: "北京",
		value: 81
	}];
	option = {
		"tooltip": {
			"trigger": "axis",
			"axisPointer": { // 坐标轴指示器，坐标轴触发有效
				"type": "shadow" // 默认为直线，可选为："line" | "shadow"
			}
		},
		"grid": {
			"left": "4%",
			"right": "4%",
			"top": "3%",
			"bottom": "3%",
			"containLabel": true
		},
		"yAxis": [{
			"type": "category",
			"data": ["北京", "上海", "天津", "广州", "深圳", "成都"],
			"axisLine": {
				"show": false
			},
			"axisTick": {
				"show": false,
				"alignWithLabel": true
			},
			"axisLabel": {
				"textStyle": {
					"color": "#fff"
				}
			}
		}],
		"xAxis": [{
			"type": "value",
			"axisLine": {
				"show": false
			},
			"axisTick": {
				"show": false
			},
			"axisLabel": {
				"show": false
			},
			"splitLine": {
				"show": false
			}
		}],

		"series": [{
			"name": "路线人数",
			"type": "bar",
			"data": appusage_data,
			"barCategoryGap": "35%",
			"label": {
				"normal": {
					"show": true,
					"position": "right",
					"formatter": function(params) {
						return params.data.value;
					},
					"textStyle": {
						"color": "#fff" //color of value
					}
				}
			},
			"itemStyle": {
				"normal": {
					"color": new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						"offset": 0,
						"color": "#2cfffe" // 0% 处的颜色
					}, {
						"offset": 1,
						"color": "#157bfc" // 100% 处的颜色
					}], false)
				}
			}
		}]
	};
	parkSourseListMain1.setOption(option);
}

function parkSourseListMain2() {
	var parkSourseListMain2 = echarts.init(document.getElementById('parkSourseListMain2'));
	var appusage_data = [{
		name: "四川",
		value: 34
	}, {
		name: "广东",
		value: 46
	}, {
		name: "天津",
		value: 53
	}, {
		name: "重庆",
		value: 68
	}, {
		name: "上海",
		value: 79
	}, {
		name: "北京",
		value: 81
	}];
	option = {
		"tooltip": {
			"trigger": "axis",
			"axisPointer": { // 坐标轴指示器，坐标轴触发有效
				"type": "shadow" // 默认为直线，可选为："line" | "shadow"
			}
		},
		"grid": {
			"left": "4%",
			"right": "4%",
			"top": "3%",
			"bottom": "3%",
			"containLabel": true
		},
		"yAxis": [{
			"type": "category",
			"data": ["北京", "上海", "重庆", "天津", "广东", "四川"],
			"axisLine": {
				"show": false
			},
			"axisTick": {
				"show": false,
				"alignWithLabel": true
			},
			"axisLabel": {
				"textStyle": {
					"color": "#fff"
				}
			}
		}],
		"xAxis": [{
			"type": "value",
			"axisLine": {
				"show": false
			},
			"axisTick": {
				"show": false
			},
			"axisLabel": {
				"show": false
			},
			"splitLine": {
				"show": false
			}
		}],

		"series": [{
			"name": "路线人数",
			"type": "bar",
			"data": appusage_data,
			"barCategoryGap": "35%",
			"label": {
				"normal": {
					"show": true,
					"position": "right",
					"formatter": function(params) {
						return params.data.value;
					},
					"textStyle": {
						"color": "#fff" //color of value
					}
				}
			},
			"itemStyle": {
				"normal": {
					"color": new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						"offset": 0,
						"color": "#2cfffe" // 0% 处的颜色
					}, {
						"offset": 1,
						"color": "#157bfc" // 100% 处的颜色
					}], false)
				}
			}
		}]
	};
	parkSourseListMain2.setOption(option);
}

function park1() {
	var park1 = echarts.init(document.getElementById('park1'));
	option = {
		title: {
			text: '总共停车位2000',
			textStyle: {
				color: '#fff',
				fontSize: 16
			},
			top: 20,
			right: 10,
		},
		tooltip: {
			trigger: 'item',
			formatter: "{b}\n{d}%",
		},
		legend: {
			orient: 'vertical',
			right: 10,
			top: 'center',
			textStyle: {
				color: '#fff',
				fontSize: 12
			},
			data: ['游客停车数', '其余车辆等', '已用车位', '剩余车位']
		},
		series: [{
			name: '车位',
			type: 'pie',
			radius: '55%',
			center: ['36%', '50%'],
			color: allColor,
			labelLine: {
				show: true,
				length: 5,
				length2: 5
			},
			data: [{
					value: 456,
					name: '游客停车数'
				},
				{
					value: 259,
					name: '其余车辆等'
				},
				{
					value: 645,
					name: '已用车位'
				},
				{
					value: 145,
					name: '剩余车位'
				}
			],
			itemStyle: {
				normal: {
					label: {
						show: true,
						formatter: "{b}\n{d}%",
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
	park1.setOption(option);
}

function park2() {
	var park2 = echarts.init(document.getElementById('park2'));
	option = {
		tooltip: {
			trigger: 'axis'
		},
		legend: {
			bottom: 0,
			left: 'center',
			textStyle: {
				color: '#fff',
				fontSize: 12
			},
			data: ['大巴停车场', '大巴停车场2', '大巴停车场3']
		},
		grid: {
			left: '5%',
			right: '5%',
			top:'10%',
			bottom: '15%',
			containLabel: true
		},
		color: allColor,
		xAxis: {
			type: 'category',
			boundaryGap: false,
			axisLabel: {
				textStyle: {
					color: '#5AD1FF',
					fontSize: 12,
					align: 'center'
				}
			},
			axisLine: {
				lineStyle: {
					color: "#5AD1FF",
					opacity: 0.5
				}
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: ['#5AD1FF'],
					type: 'solid',
					opacity: 0.5
				}
			},
			data: ['4h', '8h', '12h', '16h', '20h', '24h']
		},
		yAxis: {
			type: 'value',
			axisLabel: {
				formatter: '{value}',
				textStyle: {
					color: '#5AD1FF',
					fontSize: 12
				}
			},
			axisLine: {
				lineStyle: {
					color: "#5AD1FF"
				}
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: ['#5AD1FF'],
					type: 'solid',
					opacity: 0.5
				}
			}
		},
		series: [{
				name: '大巴停车场',
				type: 'line',
				stack: '总量',
				data: [120, 132, 101, 134, 90, 230]
			},
			{
				name: '大巴停车场2',
				type: 'line',
				stack: '总量',
				data: [220, 182, 191, 234, 290, 330]
			},
			{
				name: '大巴停车场3',
				type: 'line',
				stack: '总量',
				data: [150, 232, 201, 154, 190, 330]
			}
		]
	};

	park2.setOption(option);
}

function park3() {
	var park3 = echarts.init(document.getElementById('park3'));
	option = {
		tooltip: {
			trigger: 'item',
			formatter: "{b}\n{d}%",
		},
		color: allColor,
		legend: {
			x: 'center',
			bottom: 5,
			textStyle: {
				color: '#fff',
				fontSize: 12
			},
			data: ['小于30min', '大于30min', '1~2h', '2~4h', '4h以上'],
		},
		series: [{
			name: '停车时长',
			type: 'pie',
			radius: '55%',
			center: ['50%', '45%'],
			data: [{
					value: 335,
					name: '小于30min'
				},
				{
					value: 310,
					name: '大于30min'
				},
				{
					value: 234,
					name: '1~2h'
				},
				{
					value: 135,
					name: '2~4h'
				},
				{
					value: 115,
					name: '4h以上'
				}
			],
			itemStyle: {
				normal: {
					label: {
						show: true,
						formatter: "{b}\n{d}%",
					}
				},
				emphasis: {
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				},
				labelLine: {
					show: true
				}
			}
		}]
	};
	park3.setOption(option);
}

/* 新老客户 */
function client() {
	var client = echarts.init(document.getElementById('client'));
	var value1=6842,max=8000,value2=(max-value1);
	var formatter1=Math.round((value1/max)*100)+'%';
	var formatter2=Math.round((value2/max)*100)+'%';
  // 指定图表的配置项和数据
  var option = {
    series : [{
      	name: '效能异动',
        type: 'gauge',
        center: ['25%', '55%'],
        min: 0,
        max: 8000,
        splitNumber:8,
        axisTick: {
            splitNumber: 8
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisLine: {
            width: 10,
            show: true,
            lineStyle: {
                width: 20,
                shadowBlur: 0,
                color: [
                    [0.2, '#fe822c'],
                    [0.8, '#f8b958'],
                    [1, '#48ee8c']
                ]
            }
        },
        title: {
            color: '#fff',
            fontSize: 14,
            offsetCenter: [0, '90%']
        },
        detail: {
            formatter: formatter1,
            offsetCenter: [0, "50%"],
            textStyle: {
                fontSize: 14,
            }
        },
        data: [{
            value: value1,
            name: '新用户'
        }]
    },
    {
        name: '老客户',
        type: 'gauge',
        center: ['75%', '55%'],    // 默认全局居中
        min: 0,
        max: 8000,
        splitNumber:8,
        axisTick: {
            splitNumber: 8
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisLine: {
            width: 10,
            show: true,
            lineStyle: {
                width: 20,
                shadowBlur: 0,
                color: [
                    [0.2, '#fe822c'],
                    [0.8, '#f8b958'],
                    [1, '#48ee8c']
                ]
            }
        },
        title: {
            color: '#fff',
            fontSize: 14,
            offsetCenter: [0, '90%']
        },
        detail: {
            formatter: formatter2,
            offsetCenter: [0, "50%"],
            textStyle: {
                fontSize: 14,
            }
        },
        data: [{
            value: value2,
            name: '老用户'
        }]
    }]
};

  setInterval(function (){
    option.series[0].data[0].value = (Math.random()*100).toFixed(2) - 0;
    option.series[1].data[0].value = (Math.random()*7).toFixed(2) - 0;

  },2000);

  // 使用刚指定的配置项和数据显示图表。
  client.setOption(option);

}

/* wifi连接时长 */
function time() {
	var time = echarts.init(document.getElementById('time'));
	option = {
		tooltip: {
			trigger: 'item',
			formatter: "{b}:{d}%",
		},
		legend: {
			x: 'center',
			bottom: 5,
			textStyle: {
				color: '#fff',
				fontSize: 12
			},
			data: ['小于30min', '大于30min', '1~2h', '2~4h', '4h以上'],
		},
		color: ['#96b452', '#d67a7f', '#b6a2df', '#2ec6c9', '#ffb880'],
		series: [{
			name: 'wifi连接时长',
			type: 'pie',
			radius: '55%',
			center: ['50%', '40%'],
			data: [{
					value: 335,
					name: '小于30min'
				},
				{
					value: 310,
					name: '大于30min'
				},
				{
					value: 234,
					name: '1~2h'
				},
				{
					value: 135,
					name: '2~4h'
				},
				{
					value: 115,
					name: '4h以上'
				}
			],
			itemStyle: {
				emphasis: {
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				}
			},
			itemStyle: {
				normal: {
					label: {
						show: true,
						formatter: "{b}:{d}%",
					}
				},
				labelLine: {
					show: true
				}
			}
		}]
	};
	time.setOption(option);
}

/* 出现时间段 */
function timeRang() {
	var timeRang = echarts.init(document.getElementById('timeRang'));
	option = {
		color: [
      '#2edffe',
      '#21BF5E',
			'#f8c85d',
			'#e2914d',
			],
		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c}%"
		},
		legend: {
			orient: 'vertical',
			right: '3%',
			top: '30%',
			itemGap: 20,
			itemWidth: 10,
			itemHeight: 10,
			textStyle: {
				color: '#999999',
				fontSize: 14,
			},
			formatter: function(name) {
				var oa = option.series[0].data;
				for(var i = 0; i < option.series[0].data.length; i++) {
					if(name === oa[i].name) {
						return '   ' + name ;
					}
				}
			},
			data: [{
					name: '20:00-22:00',
					icon: 'circle'
				},
				{
					name: '13:00-15:00',
					icon: 'circle'
				},
				{
					name: '9:00-11:00',
					icon: 'circle'
				},
        {
          name: '其他',
          icon: 'circle'
        }
			]
		},
		calculable: true,
		series: [{
			name: '漏斗图',
			type: 'funnel',
			left: '6%',
			top: 60,
			bottom: 30,
			width: '60%',
			height: '60%',
			min: 0,
			max: 100,
			minSize: '0%',
			maxSize: '100%',
			sort: 'descending',
			label: {
				normal: {
					show: false,
					position: 'inside'
				},
				emphasis: {
					textStyle: {
						fontSize: 20
					}
				}
			},
			labelLine: {
				normal: {
					length: 10,
					lineStyle: {
						width: 1,
						type: 'solid'
					}
				}
			},
			itemStyle: {
				normal: {
					borderColor: '#fff',
					borderWidth: 1
				}
			},
			data: [{
					value: 100,
					name: '20:00-22:00'
				},
				{
					value: 75,
					name: '13:00-15:00'
				},
				{
					value: 50,
					name: '9:00-11:00'
				},
        {
          value: 25,
          name: '其他'
        }
			]
		}]
	};
	timeRang.setOption(option);
}

/* wifi分布与利用率 */
function rate() {
	var rate = echarts.init(document.getElementById('rate'));
	option = {
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'cross',
				crossStyle: {
					color: '#999'
				}
			}
		},
		grid: [{
			left: '15%',
			right: '15%',
			top:'20%',
			bottom:'16%'
		}],
		visualMap: {
			show: false,
			min: 0,
			max: 7,
			dimension: 0,
			inRange: {
				//			 			    	            color: ['red', '#308e92', '#b1cfa5', '#f5d69f', '#ef5055']
				color: [
					"#2EDFFE",
				]
			}
		},
		xAxis: [{
			type: 'category',
			data: ['景区一', '景区二', '景区三', '景区四', '景区五', '景区六', '景区七'],
			axisLine: {
				lineStyle: {
					color: "#278ecf"
				}
			}
		}],
		yAxis: [{
				type: 'value',
				name: '分布数量',
				min: 0,
				max: 163,
				interval: 150,
				axisLine: {
					lineStyle: {
						color: "#278ecf"
					}
				},
				splitLine: {
					show: true,
					lineStyle: {
						color: ['#fff'],
						type: 'solid',
						opacity: 0.08
					}
				}
			},
			{
				type: 'value',
				name: '利用率',
				min: 0,
				max: 12.5,
				interval: 5,
				axisLabel: {
					formatter: '{value} %'
				},
				axisLine: {
					lineStyle: {
						color: "#278ecf"
					}
				},
				splitLine: {
					show: true,
					lineStyle: {
						color: ['#fff'],
						type: 'solid',
						opacity: 0.08
					}
				}
			}
		],
		series: [{
				name: '分布数量',
				type: 'bar',
				data: ['89', '100', '79', '103', '85', '78', '79'],
				label: {
					normal: {
						show: false,
						position: 'top'
					}
				},
				itemStyle: {
					normal: {
						color: '#1050FA'
					}
				}
			},
			{
				name: '利用率',
				type: 'line',
				lineStyle: {
					normal: {
						color: '#F8C85D'
					}
				},
				itemStyle: {
					normal: {
						color: '#F8C85D'
					}
				},
				yAxisIndex: 1,
				data: ['7', '7.5', '4', '4.3', '3.2', '6.5', '6']
			}
		]
	};
	rate.setOption(option);
}

/* 来访频次 */
function number() {
	var number = echarts.init(document.getElementById('number'));
	option = {
		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b}: {c} ({d}%)"
		},
		legend: {
			right: 10,
			top: 5,
			textStyle: {
				color: '#fff',
				fontSize: 12
			},
			data: ['1~2次', '3~4次', '5~6次', '6次以上']
		},
		series: [{
			type: 'pie',
			name: '来访频次',
			center:['50%', '60%'],
			radius: ['45%', '70%'],
			avoidLabelOverlap: false,
			color: allColor,
			labelLine: {
				normal: {
					length: 5,
					length2: 5,
					lineStyle: {
						color: '#fff'
					}
				}
			},
			label: {
				normal: {
					formatter: '{b}{d}%',
					borderWidth: 20,
					borderRadius: 4,
					rich: {
						a: {
							color: '#333',
							fontSize: 12,
							lineHeight: 20
						},
						b: {
							fontSize: 12,
							lineHeight: 20,
							color: '#333'
						}
					}
				}
			},
			data: [{
					value: 54,
					name: '1~2次'
				},
				{
					value: 49,
					name: '3~4次'
				},
				{
					value: 48,
					name: '5~6次'
				},
				{
					value: 25,
					name: '6次以上'
				}
			]
		}]
	};
	number.setOption(option);
}

/* 游客年龄 */
function clientAge() {
	var clientAge = echarts.init(document.getElementById('clientAge'));
	option = {
		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		},
		series: [{
			name: '游客年龄',
			type: 'pie',
			radius: '55%',
			center: ['50%', '50%'],
			color: allColor,
			labelLine: {
				normal: {
					show: true
				}
			},
			label: {
				normal: {
					show: true
				}
			},
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
				emphasis: {
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				}
			}
		}]
	};
	clientAge.setOption(option);
}

/* 游客职业 */
function clientJob() {
	var clientJob = echarts.init(document.getElementById('clientJob'));
	var dataAll = [389, 259, 209, 262, 324, 632];
	var colorList = allColor;
	var yAxisData = ['生产操作人员', '管理者和企业主', '个体经营者', '服务人员', '文职人员', '专业技术人员'];
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
			x: '30%',
			y: '20%',
			width: '60%',
			height: '70%'
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
	clientJob.setOption(option);
}

/* 游客手机应用类型 */
function phoneType() {
	var phoneType = echarts.init(document.getElementById('phoneType'));
	
	option = {
		tooltip: {
			show: true,
			formatter: "{b}：{c}%"
		},
		xAxis: {
			data: ['商城', '视频', '通讯', '地图', '音乐','支付', '实用工具', '生活', '拍照', '实用工具'],
			axisLabel: {
				interval: 0,
				inside: false,
				rotate: 60,
				textStyle: {
					fontSize: 12,
					color: '#fff'
				}
			},
			axisTick: {
				show: false
			},
			axisLine: {
				show: false
			},
			z: 10
		},
		yAxis: {
			axisLine: {
				show: false
			},
			axisTick: {
				show: false
			},
			splitLine: {
				show: false
			},
			axisLabel: {
				show: false,
				textStyle: {
					color: '#fff'
				}
			}
		},
		dataZoom: [{
			type: 'inside',
			start: 0,
			end: 100
		}],
		series: [{
			type: 'bar',
			barMaxWidth: 50,
			itemStyle: {
				normal: {
					color: '#1ac8ff'
				}
			},
			label: {
				normal: {
					show: true,
					position: 'top',
					formatter: '{c}%',
					textStyle: {
						color: '#fff'
					}
				}
			},
			data: ['26', '18', '56', '67', '32','15', '44', '13', '24', '19']
		}],
	};
	phoneType.setOption(option);
}

/* 游客消费水平 */
function paymentLevel() {
	var paymentLevel = echarts.init(document.getElementById('paymentLevel'));
	var dataAll = [389, 259, 209, 262];
	var colorList = [
		'#7098F6'
	];
	var yAxisData = ['20岁以下', '20~30岁', '40~50岁', '50岁以上'];
	var option8 = {
		title: [{
			top: 40,
			left: '73%',
			text: '',
			textStyle: {
				color: '#fff',
				fontWeight: 'normal',
				fontSize: 18
			}
		}],
		tooltip: {},
		legend: [{
			orient: '',
			icon: '',
			left: '15%',
			top: '70%',
			textStyle: {
				color: '#fff'
			},
			data: ['男性 58.4%', '女性 41.6%']
		}],
		grid: [{
			show: false,
			left: '35%',
			top: '35%',
			containLabel: true,
			width: '30%',
			height: '40%'
		}],
		color: ['#2466e0', '#f6534d'],
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
			data: [],
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
		radar: {
			// shape: 'circle',
			radius: '50%',
			startAngle: 50,
			splitArea: {
				areaStyle: ""
			},
			center: ['50%', '50%'],
			indicator: [{
					name: '200元以上',
					max: 25000
				},
				{
					name: '100-200元',
					max: 25000
				},
				{
					name: '51-100元',
					max: 25000
				},
				{
					name: '20-50元',
					max: 25000
				},
				{
					name: '20元以下',
					max: 25000
				}
			]
		},
		series: [{
			name: '游客消费水平',
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
				value: [4300, 10000, 12000, 15000],
				name: '游客消费水平(游客数)'
			}]
		}]
	};
	paymentLevel.setOption(option8);
}

function stopTime(){
	var stopTime = echarts.init(document.getElementById('stopTime'));
	option = {
		series: [{
	        type: 'pie',
	        radius: ['20%', '50%'],
			color: allColor,
	        roseType: 'area',
	        color:allColor,
	        zlevel: 2,
	        label: {
	            normal:{
		            show: true,
		            formatter: '{b}\n{d}%'
	            }
	        },
	        data: [{
                value: 346,
                name: '一天'
            },
            {
                value: 423,
                name: '二天'
            },
            {
                value: 289,
                name: '三天'
            },
            {
                value: 478,
                name: '四天'
            },
            {
                value: 197,
                name: '五天'
            }]
	    }]
	};
	stopTime.setOption(option);
}
/* 游客热力图 */
function heatMap() {
	var map = new AMap.Map("container", {
		resizeEnable: true,
		center: [121.641562, 29.800154],
		zoom: 11
	});
//	map.setMapStyle("amap://styles/c36ff2cfd036dd274b0d5e3d77ca45c8");
	if(!isSupportCanvas()) {
		alert('热力图仅对支持canvas的浏览器适用,您所使用的浏览器不能使用热力图功能,请换个浏览器试试~')
	}
	//详细的参数,可以查看heatmap.js的文档 http://www.patrick-wied.at/static/heatmapjs/docs.html
	//参数说明如下:
	/* visible 热力图是否显示,默认为true
	 * opacity 热力图的透明度,分别对应heatmap.js的minOpacity和maxOpacity
	 * radius 势力图的每个点的半径大小
	 * gradient  {JSON} 热力图的渐变区间 . gradient如下所示
	 *	{
	 .2:'rgb(0, 255, 255)',
	 .5:'rgb(0, 110, 255)',
	 .8:'rgb(100, 0, 255)'
	 }
	 其中 key 表示插值的位置, 0-1
	 value 为颜色值
	 */
	var heatmap;
	map.plugin(["AMap.Heatmap"], function() {
		//初始化heatmap对象
		heatmap = new AMap.Heatmap(map, {
			radius: 25, //给定半径
			opacity: [0, 0.8]
			/*,gradient:{
			 0.5: 'blue',
			 0.65: 'rgb(117,211,248)',
			 0.7: 'rgb(0, 255, 0)',
			 0.9: '#ffea00',
			 1.0: 'red'
			 }*/
		});
		//设置数据集：该数据为北京部分“公园”数据
		heatmap.setDataSet({
			data: heatmapData,
			max: 100
		});
	});
	//判断浏览区是否支持canvas
	function isSupportCanvas() {
		var elem = document.createElement('canvas');
		return !!(elem.getContext && elem.getContext('2d'));
	}
}

/* 未来客流预测 */
function clientFlowF(xData, yData) {
	var clientFlowF = echarts.init(document.getElementById('clientFlowF'));
	var xData = xData || ['05-01', '05-02', '05-03', '05-04', '05-05', '05-06'];
	var yData = yData || [1052, 3486, 2516, 4123, 1968, 2654];
	var option = {
		color: ['#fff955'],
		tooltip: {
			trigger: 'axis'
		},
		grid: {
			left: '3%',
			right: '7%',
			top: '10%',
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
				lineStyle: {
					color: '#fff'
				}
			},
			splitLine: {
				show: false,
				lineStyle: {
					color: ['#fff'],
					type: 'solid',
					opacity: 0.5
				}
			},
			data: xData
		},
		yAxis: {
			type: 'value',
			textStyle: {

			},
			axisLine: {
				lineStyle: {
					color: '#fff'
				}
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: '#fff',
					type: 'solid',
					opacity: 0.05
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
	clientFlowF.setOption(option);
}
/*未来一周*/
$('#week').on('click', week);

function week() {
	$(this).addClass('active');
	$('#month').removeClass('active');
	clientFlowF()
}
/*未来一月*/
$('#month').on('click', month);

function month() {
	var xData = ['05-01', '05-02', '05-03', '05-04', '05-05', '05-06', '05-07','05-08', '05-09', '05-10', '05-11', '05-12', '05-13', '05-14','05-15', '05-16', '05-17', '05-18', '05-19', '05-20', '05-21','05-22', '05-23', '05-24', '05-25', '05-26', '05-27', '05-28', '05-29', '05-30', '05-31'];
	var yData = [];
	for(var i = 0; i < xData.length; i++) {
		yData.push(100 * Math.random())
	}
	$(this).addClass('active');
	$('#week').removeClass('active');
	clientFlowF(xData, yData);
}
/* 湖区游客实时统计 */
function clientFlow({color, isToday} = {color:'#34d5e0'}) {
	var clientFlow = echarts.init(document.getElementById('clientFlow'));
	var shiXdata = isToday ? ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"] : ["05-01", "05-02", "05-03", "05-04", "05-05", "05-06", "05-07", "05-08"];
	var shiYdata =isToday ? [152, 140, 265, 345, 254, 198, 375, 465, 296, 358, 128] :  [52, 140, 265, 145, 198, 375, 465, 296];
	var option = {
		tooltip: {
			trigger: 'axis'
		},
		grid: {
			left: '3%',
			right: '7%',
			top: '10%',
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
					opacity: 0.5
				}
			},
			axisTick: {
				show: false
			},
			data: shiXdata
		},
		yAxis: {
			type: 'value',
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
				show: false,
				lineStyle: {
					color: ['#fff'],
					type: 'solid',
					opacity: 0.5
				}
			}
		},
		series: [{
			name: '客流人数',
			type: 'line',
			sampling: 'average',
			itemStyle: {
				normal: {
					color: '#34d5e0'
				}
			},
			areaStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
						offset: 0,
						color: '#134e9b'
					}, {
						offset: 1,
						color: color
					}])
				}
			},
			markLine: {
	            symbol: 'none',
	            data: [{
	                yAxis:400,
	                valueIndex: 1,
	                lineStyle: {
	                    normal: {
	                        color: '#c79b14',
	                        type: 'solid',
	                        width:2
	                    }
	                },
	                label: {
	                    normal: {
	                        show:true,
	                        position:'middle',
	                        formatter: '景区最大承载： {c}人'
	                    }
	                }
	            }]
	        },
			data: shiYdata
		}]
	};
	clientFlow.setOption(option);
}

/* 景区客流同比map */
function clientFlowC(xData) {
	var clientFlowC = echarts.init(document.getElementById('clientFlowC'));
	var option = {
		color: ["#03abe3","#1f63de"],
		tooltip: {
			trigger: 'axis',
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		legend: {
			data: ['往年', '当年', '增长率'],
			align: 'right',
			textStyle: {
				color: '#fff'
			},
			selectedMode: false,
			top: 10,
			right: 10
		},
		grid: {
			top: '25%',
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true
		},
	    dataZoom: [
	        {
	            type: 'inside'
	        }
	    ],
		xAxis: [{
			type: 'category',
			name: '',
			nameTextStyle: {
				color: '#fff'
			},
			axisLabel: {
				textStyle: {
					interval: 0,
					color: '#fff'
				}
			},
			axisLine: {
				lineStyle: {
					color: "#fff"
				}
			},
			data: xData || ['05-01', '05-02', '05-03', '05-04', '05-05', '05-06']
		}],
		yAxis: [{
				type: 'value',
				name: '游客数',
				splitNumber:3,
				nameTextStyle: {
					color: '#fff'
				},
				axisLabel: {
					formatter: '{value}',
					textStyle: {
						interval: 0,
						color: '#fff'
					}
				},
				axisLine: {
					lineStyle: {
						color: "#fff"
					}
				}
			},
			{
				type: 'value',
				name: '增长率',
				splitNumber:3,
				nameTextStyle: {
					color: '#fff'
				},
				axisLabel: {
					formatter: '{value}%',
					textStyle: {
						interval: 0,
						color: '#fff'
					}
				},
				axisLine: {
					lineStyle: {
						color: "#fff"
					}
				},
				splitLine: {
					show: false
				}
			}
		],
		splitLine: {
			show: false,
			lineStyle: {
				color: '#fff',
				type: 'solid',
				opacity: 0.5
			}
		},
		series: [{
			name: '往年',
			type: 'bar',
			barGap: 0, //柱间距离
			data: [1052, 3486, 2516, 4123, 1968, 2654]
		}, {
			name: '当年',
			type: 'bar',
			barGap: 0, //柱间距离
			data: [1268, 5895, 3245, 2569, 3548, 6852]
		}, {
			name: '增长率',
			type: 'line',
			symbolSize: 10,
			symbol: 'circle',
			yAxisIndex:1,
			itemStyle: {
				normal: {
					color: '#c79b14',
					barBorderRadius: 0,
					label: {
						show: true,
						position: 'top',
						formatter: function(p) {
							return p.value > 0 ? (p.value) : '';
						}
					}
				}
			},
			data: [12,21,32,0,5,45]
		}]
	};
	clientFlowC.setOption(option);
}
/*景区客流同比*/
$('#realClientFlow').on('click', realClientFlow);

function realClientFlow() {
	$(this).addClass('active');
	$('#festivalClientFlowC').removeClass('active');
	clientFlowC()
}
/*景区客流同比*/
$('#festivalClientFlowC').on('click', festivalClientFlowC);

function festivalClientFlowC() {
	var xData = ['201601-201701', '201602-201702', '201603-201703', '201604-201704', '201605-201705']
	$(this).addClass('active');
	$('#realClientFlow').removeClass('active');
	clientFlowC(xData)
}
/* 景区实时客流 */
$('#realClient').on('click',realClient);
function realClient() {
	$(this).addClass('active');
	$('.timeChoose').eq(0).addClass('active').siblings().removeClass('active');
	$('#todayClient').removeClass('active');
  	clientFlow({color: '#34d5e0', isToday: true})
}
/* 景区日客流 */
$('#todayClient').on('click',todayClient);
function todayClient() {
  $(this).addClass('active');
  $('.timeChoose').eq(1).addClass('active').siblings().removeClass('active');
  $('#realClient').removeClass('active');
  clientFlow({color: '#34d561', isToday: false})
}
function partViews(self){
	var index=$(self).index();
	$(self).addClass('active').siblings().removeClass('active');
	$('.partViews').eq(index).addClass('active').siblings().removeClass('active');
}

/* 游客来源组成 */
function chinaMap(self){
	$(self).addClass('active').siblings().removeClass('active');
	sourcePart2();
	$('.sourceParts').eq(0).addClass('active').siblings().removeClass('active');
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
	        top:'50%'
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
			name: '游客人数',
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
}

function worldMaps(self){
	$(self).addClass('active').siblings().removeClass('active');
	sourcePart2();
	$('.sourceParts').eq(1).addClass('active').siblings().removeClass('active');
	var arr=[	{name: "Australia", value: [265,0]},
				{name: "Russia", value: [293,1]},
				{name: "Canada", value: [366,2]},
				{name: "Armenia", value: [537,3]},
				{name: "China", value: [1000,4]}
			];
	if(arr.length==0){
		return;
	}
	var max=arr[0].value;
	var worldMap = echarts.init(document.getElementById('worldMap'));

	option = {
		title: {
	        text: '国家排名TOP5',
	        textStyle: {
                color: '#fff',
                fontSize:18
            },
	        left: 45,
	        top:'50%'
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
			name: '游客人数',
			type: 'map',
			mapType: 'world',
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
	worldMap.setOption(option);
}
function provinceMap(self){
	$(self).addClass('active').siblings().removeClass('active');
	sourcePart1();
	$('.sourceParts').eq(2).addClass('active').siblings().removeClass('active');
	var arr=[	{name: "威海市", value: [265,0]},
				{name: "烟台市", value: [293,1]},
				{name: "潍坊市", value: [366,2]},
				{name: "济南市", value: [537,3]},
				{name: "青岛市", value: [1000,4]}
			];
	if(arr.length==0){
		return;
	}
	var max=arr[0].value;
	var provinceMap = echarts.init(document.getElementById('provinceMap'));

	option = {
		title: {
	        text: '省内排名TOP5',
	        textStyle: {
                color: '#fff',
                fontSize:18
            },
	        left: 45,
	        top:'50%'
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
			name: '游客人数',
			type: 'map',
			mapType: '山东',
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
	provinceMap.setOption(option);
}
function sourcePart1(self) {
	if(!self){
		$('.sheng').addClass('active').siblings().removeClass('active');
	}
	$(self).addClass('active').siblings().removeClass('active');
	var sourcePart1 = echarts.init(document.getElementById('sourcePart'));
	option = {
		tooltip: {
			trigger: 'item',
			formatter: "{b}:{d}%",
		},
		color: allColor,
		legend: {
			x: 'center',
			bottom: 5,
			textStyle: {
				color: '#fff',
				fontSize: 12
			},
			data: ['25%', '75%'],
		},
		series: [{
			name: '停车时长',
			type: 'pie',
			radius: '55%',
			center: ['50%', '50%'],
			data: [{
					value: 25,
					name: '省内'
				},
				{
					value: 75,
					name: '省外'
				}
			],
			itemStyle: {
				normal: {
					label: {
						show: true,
						formatter: "{b}:{d}%",
					}
				},
				labelLine: {
					show: true
				},
				emphasis: {
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				}
			}
		}]
	};
	sourcePart1.setOption(option);
}
function sourcePart2(self) {
	if(!self){
		$('.jing').addClass('active').siblings().removeClass('active');
	}
	$(self).addClass('active').siblings().removeClass('active');
	var sourcePart2 = echarts.init(document.getElementById('sourcePart'));
	option = {
		tooltip: {
			trigger: 'item',
			formatter: "{b}:{d}%",
		},
		color: allColor,
		legend: {
			x: 'center',
			bottom: 5,
			textStyle: {
				color: '#fff',
				fontSize: 12
			},
			data: ['25%', '75%'],
		},
		series: [{
			name: '停车时长',
			type: 'pie',
			radius: '55%',
			center: ['50%', '50%'],
			data: [{
					value: 15,
					name: '境内'
				},
				{
					value: 85,
					name: '境外'
				}
			],
			itemStyle: {
				emphasis: {
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				}
			},
			itemStyle: {
				normal: {
					label: {
						show: true,
						formatter: "{b}:{d}%",
					}
				},
				labelLine: {
					show: true
				}
			}
		}]
	};
	sourcePart2.setOption(option);
}
//左侧一级目录点击

$('.ul-img li').each(function() {
	var index = $(this).index();
	$(this).click(function() {
		$(this).addClass('change').siblings().removeClass('change');
		$('.navList').hide();
		$(this).find('.navList').show();
		$('.payway').each(function(){
			$(this).find('.paywayList').eq(0).addClass('active').siblings().removeClass('active');
		})
		if(index == 8) {

		} else {
			$('.rightMain').show();
			$('.rightList').eq(index).addClass('active').siblings().removeClass('active');
			$('.navListMain2').hide();
			$('.navListMain1').hide();
			if(index == 0) {
				$('#deviceWel').show();
				$('#devicePark,#deviceWifi ').hide();
				$('#wifi, #park').removeClass('active');

			} else if(index == 1) {
				clientFn();
			} else if(index == 2) {
				clientSourceFn();
			} else if(index == 3) {
				clientPicFn();
			} else if(index == 4) {
				clientPayFn();
			} else if(index == 5) {
				mediaFn();
			} else if(index == 6) {
				attentionFn();
			}
		}

	})
})

/* 支付方式统计 */
function payWay1(self) {
	$(self).addClass('active').siblings().removeClass('active');
	var payWay1 = echarts.init(document.getElementById('payWay'));
	option = {
		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b}: {c} ({d}%)",

		},
		series: [{
				name: '访问来源',
				type: 'pie',
				hoverAnimation: false,
				legendHoverLink: false,
				radius: ['40%', '42%'],
				center: ['50%', '50%'],
				color: ['#915872', '#3077b7', '#9a8169', '#3f8797', '#5b8144', '#307889', '#9c6a79'],
				label: {
					normal: {
						position: 'inner'
					}
				},
				labelLine: {
					normal: {
						show: false
					},

				},
				tooltip: {
					show: false,

				},

				data: [{
						value: 223,
						name: ''
					},
					{
						value: 589,
						name: ''
					},
					{
						value: 342,
						name: ''
					},
					{
						value: 546,
						name: ''
					},
					{
						value: 124,
						name: ''
					},
					{
						value: 690,
						name: ''
					},
					{
						value: 456,
						name: ''
					}
				]
			},
			{
				name: '支付方式',
				type: 'pie',
				radius: ['42%', '55%'],
				center: ['50%', '50%'],
				color: allColor,
				label: {
					normal: {
						formatter: '{b}\n{d}%'
					},

				},
				data: [{
						value: 435,
						name: '微信支付'
					},
					{
						value: 679,
						name: '支付宝'
					},
					{
						value: 848,
						name: '银联卡'
					},
					{
						value: 348,
						name: '现金'
					},
					{
						value: 679,
						name: 'POS机'
					}
				]
			}
		]
	};
	payWay1.setOption(option);
}
function payWay2(self) {
	$(self).addClass('active').siblings().removeClass('active');
	var payWay2 = echarts.init(document.getElementById('payWay'));
	option = {
		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b}: {c} ({d}%)",

		},
		series: [{
				name: '访问来源',
				type: 'pie',
				hoverAnimation: false,
				legendHoverLink: false,
				radius: ['40%', '42%'],
				center: ['50%', '50%'],
				color: ['#915872', '#3077b7', '#9a8169', '#3f8797', '#5b8144', '#307889', '#9c6a79'],
				label: {
					normal: {
						position: 'inner'
					}
				},
				labelLine: {
					normal: {
						show: false
					},

				},
				tooltip: {
					show: false,

				},

				data: [{
						value: 321,
						name: ''
					},
					{
						value: 456,
						name: ''
					},
					{
						value: 648,
						name: ''
					},
					{
						value: 248,
						name: ''
					},
					{
						value: 479,
						name: ''
					},
					{
						value: 548,
						name: ''
					},
					{
						value: 748,
						name: ''
					}
				]
			},
			{
				name: '支付方式',
				type: 'pie',
				radius: ['42%', '55%'],
				center: ['50%', '50%'],
				color: allColor,
				label: {
					normal: {
						formatter: '{b}\n{d}%'
					},

				},
				data: [{
						value: 321,
						name: '微信支付'
					},
					{
						value: 456,
						name: '支付宝'
					},
					{
						value: 648,
						name: '现金'
					},
					{
						value: 248,
						name: '银联卡'
					},
					{
						value: 479,
						name: 'POS机'
					}
				]
			}
		]
	};
	payWay2.setOption(option);
}

/*热销商品*/
function hotBuy() {
	var hotBuy = echarts.init(document.getElementById('hotBuy'));
	option = {
		tooltip: {
			trigger: 'item',
			formatter: "{b}:\n{d}%",
		},
		series: [{
			name: '热销商品',
			type: 'pie',
			radius: '55%',
			center: ['50%', '50%'],
			color: allColor,
			data: [{
					value: 335,
					name: '小吃'
				},
				{
					value: 310,
					name: '纪念品'
				},
				{
					value: 234,
					name: '茶叶'
				},
				{
					value: 135,
					name: '衣服'
				},
				{
					value: 348,
					name: '玫瑰花'
				}
			],
			itemStyle: {
				normal: {
					label: {
						show: true,
						formatter: "{b}:\n{d}%",
					}
				},
				labelLine: {
					show: true
				},
				emphasis: {
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				}
			}
		}]
	};
	hotBuy.setOption(option);
}

function paycount1(self) {
	$(self).addClass('active').siblings().removeClass('active');
	var paycount1 = echarts.init(document.getElementById('outLineCount'));
	var option = {
		color: allColor,
		title: {
			left: '70',
			top: '14',
			textStyle: {
				left: '50%',
				color: '#fff',
				fontSize: 16
			}
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		legend: {
			data: ['儿童票', '成人票'],
			align: 'right',
			textStyle: {
				color: '#fff'
			},
			selectedMode: false,
			top: 14,
			right: 10
		},
		grid: {
			top: '25%',
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true
		},
		dataZoom: [{
			type: 'inside'
		}],
		xAxis: [{
			type: 'category',
			name: '',
			nameTextStyle: {
				color: '#fff'
			},
			axisLabel: {
				textStyle: {
					interval: 0,
					color: '#fff'
				}
			},
			data: ['05-01', '05-02', '05-03', '05-04', '05-05', '05-06']
		}],
		yAxis: [{
			type: 'value',
			name: '销量',
			splitNumber:3,
			nameTextStyle: {
				color: '#fff'
			},
			axisLabel: {
				formatter: '{value}',
				textStyle: {
					interval: 0,
					color: '#fff'
				}
			}
		}],
		splitLine: {
			show: false,
			lineStyle: {
				color: '#fff',
				type: 'solid',
				opacity: 0.5
			}
		},
		series: [{
			name: '儿童票',
			type: 'bar',
			barGap: 0, //柱间距离
			data: [986, 2896, 3516, 2123, 1968, 3654]
		}, {
			name: '成人票',
			type: 'bar',
			barGap: 0, //柱间距离
			data: [758, 5495, 4245, 3569, 2548, 4852]
		}]
	};
	paycount1.setOption(option);
}
function paycount2(self) {
	$(self).addClass('active').siblings().removeClass('active');
	var paycount2 = echarts.init(document.getElementById('outLineCount'));
	var option = {
		color: allColor,
		title: {
			left: '70',
			top: '14',
			textStyle: {
				left: '50%',
				color: '#fff',
				fontSize: 16
			}
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		legend: {
			data: ['儿童票', '成人票'],
			align: 'right',
			textStyle: {
				color: '#fff'
			},
			selectedMode: false,
			top: 14,
			right: 10
		},
		grid: {
			top: '25%',
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true
		},
		dataZoom: [{
			type: 'inside'
		}],
		xAxis: [{
			type: 'category',
			name: '',
			nameTextStyle: {
				color: '#fff'
			},
			axisLabel: {
				textStyle: {
					interval: 0,
					color: '#fff'
				}
			},
			data: ['05-01', '05-02', '05-03', '05-04', '05-05', '05-06']
		}],
		yAxis: [{
			type: 'value',
			name: '销量',
			splitNumber:3,
			nameTextStyle: {
				color: '#fff'
			},
			axisLabel: {
				formatter: '{value}',
				textStyle: {
					interval: 0,
					color: '#fff'
				}
			}
		}],
		splitLine: {
			show: false,
			lineStyle: {
				color: '#fff',
				type: 'solid',
				opacity: 0.5
			}
		},
		series: [{
			name: '儿童票',
			type: 'bar',
			barGap: 0, //柱间距离
			data: [1052, 3486, 2516, 4123, 1968, 2654]
		}, {
			name: '成人票',
			type: 'bar',
			barGap: 0, //柱间距离
			data: [1268, 5895, 3245, 2569, 3548, 6852]
		}]
	};
	paycount2.setOption(option);
}
function OTACount() {
	var OTACount = echarts.init(document.getElementById('OTACount'));
	option = {
		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b}: {c} ({d}%)"
		},
		series: [{
			type: 'pie',
			name: '统计渠道',
			center: ['50%', '50%'],
			radius: ['45%', '70%'],
			avoidLabelOverlap: false,
			labelLine: {
				normal: {
//					length: 5,
//					length2: 5,
					lineStyle: {
						color: '#fff'
					}
				}
			},
			color: allColor,
			label: {
				normal: {
					formatter: '{b}\n{d}%',
					borderWidth: 20,
					borderRadius: 4,
					rich: {
						a: {
							color: '#333',
							fontSize: 12,
							lineHeight: 20
						},
						b: {
							fontSize: 12,
							lineHeight: 20,
							color: '#333'
						}
					}
				}
			},
			data: [{
					value: 16,
					name: '遨游'
				},
				{
					value: 25,
					name: '春秋旅游'
				},
				{
					value: 19,
					name: '芒果'
				},
				{
					value: 76,
					name: '途牛'
				},
				{
					value: 65,
					name: '携程'
				},
				{
					value: 45,
					name: '驴妈妈'
				},
				{
					value: 32,
					name: '其他'
				}
			]
		}]
	};
	OTACount.setOption(option);
}

function buyLevel() {
	var buyLevel = echarts.init(document.getElementById('buyLevel'));
	option = {
		tooltip: {},
		radar: {
			indicator: [{
				text: '吃 15%',
				max: 5000

			}, {
				text: '住 12%',
				max: 5000
			}, {
				text: '行 13%',
				max: 5000
			}, {
				text: '游 16%',
				max: 5000
			}, {
				text: '购 17%',
				max: 5000
			}, {
				text: '娱 13%',
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
				value: [1268, 2541, 1435, 1568, 2214, 1758],
				name: '消费结构'
			}],

		}]
	};
	buyLevel.setOption(option);
}

function evaluateChart() {
	var evaluateChart = echarts.init(document.getElementById('evaluateChart'));
	var option = {
		tooltip: {
			trigger: 'axis'
		},
		grid: {
			left: '10%',
			right: '10%',
			top: '12%',
			bottom: '10%',
			containLabel: true
		},
		xAxis: {
			type: 'category',
			boundaryGap: false,
			axisLabel: {
				textStyle: {
					color: '#5AD1FF',
					fontSize: 12,
					align: 'center'
				}
			},
			axisLine: {
				lineStyle: {
					color: "#5AD1FF",
					opacity: 0.5
				}
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: ['#5AD1FF'],
					type: 'solid',
					opacity: 0.5
				}
			},
			axisTick: {
				show: false
			},
			data: ['2017-01-01', '2017-01-02', '2017-01-03', '2017-01-04', '2017-01-05', '2017-01-06', '2017-01-07']
		},
		yAxis: {
			type: 'value',
			name: '数量',
			nameTextStyle: {
				fontSize: 12
			},
			allowDecimals: 'false',
			min: 0,
			axisLabel: {
				formatter: '{value}',
				textStyle: {
					color: '#5AD1FF',
					fontSize: 12
				}
			},
			axisLine: {
				lineStyle: {
					color: "#5AD1FF"
				}
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: ['#5AD1FF'],
					type: 'solid',
					opacity: 0.5
				}
			}
		},
		series: [{
			name: '',
			type: 'line',
			sampling: 'average',
			symbol: 'circle',
			symbolSize: 6,
			itemStyle: {
				normal: {
					color: '#5494fe'
				}
			},
			areaStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
						offset: 0,
						color: 'rgba(255,255,255,0)'
					}, {
						offset: 1,
						color: '#34d5e0'
					}])
				}
			},
			data: [504, 364, 758, 689, 364, 968, 556]
		}]
	};
	evaluateChart.setOption(option);
}

function PublicOpinionCount(){
	var PublicOpinionCount = echarts.init(document.getElementById('PublicOpinionCount'));
	option = {
		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b}: {c} ({d}%)"
		},
		legend: {
			show:false,
			bottom: 0,
			left: 'center',
			textStyle: {
				color: '#fff',
				fontSize: 12
			},
			data:['微信','网页','微博','报刊','论坛','客户端']
		},
		series: [{
			type: 'pie',
			name: '统计方式',
			center: ['50%', '50%'],
			radius: ['45%', '65%'],
			avoidLabelOverlap: false,
			labelLine: {
				normal: {
//					length: 5,
//					length2: 5,
					lineStyle: {
						color: '#fff'
					}
				}
			},
			color: allColor,
			label: {
				normal: {
					formatter: '{b}\n{d}%',
					borderWidth: 20,
					borderRadius: 4,
					rich: {
						a: {
							color: '#333',
							fontSize: 12,
							lineHeight: 20
						},
						b: {
							fontSize: 12,
							lineHeight: 20,
							color: '#333'
						}
					}
				}
			},
			data: [{
					value: 16,
					name: '微信'
				},
				{
					value: 75,
					name: '网页'
				},
				{
					value: 69,
					name: '微博'
				},
				{
					value: 48,
					name: '报刊'
				},
				{
					value: 35,
					name: '论坛'
				},
				{
					value: 24,
					name: '客户端'
				}
			]
		}]
	};
	PublicOpinionCount.setOption(option);
}

function sentimentAnalysis(){
	var sentimentAnalysis = echarts.init(document.getElementById('sentimentAnalysis'));
	var type = '情感分';
	var val = 90;
	option = {
	    tooltip: {
	        formatter: "{a} <br/>{b} : {c}%"
	    },
	    series: [{
	        //背景刻度
	        name: '背景刻度',
	        type: 'gauge',
	        splitNumber: 5, //刻度数量
	        min: -100,
	        max: 100, 
	        startAngle:180,
	        radius: '80%', //刻度尺寸略小
	        endAngle: 0,
	        zlevel: 20,
	        axisLine: {
	            show: false,
	            lineStyle: {
	                width: 0,
	                shadowBlur: 0,
	                color: [
	                    [1, '#fff']
	                ]
	            }
	        },
	        axisTick: {
	            show: false,
	            lineStyle: {
	                color: '#fff',
	                width: 1
	            },
	            length: 10,
	            splitNumber: 3
	        },
	        splitLine: {
	            show: true,
	            length: 10,
	            lineStyle: {
	                color: '#fff'
	            }
	        },
	        axisLabel: {
	            show: false,
	        },
	        detail: {
	            show: false
	        }
	    }, {
	        //进度轴线
	        name: '进度',
	        type: 'gauge',
	        radius: '85%', //进度轴尺寸略大
	        zlevel: 40,
	        startAngle: 180,
			endAngle: 0,
	        axisLine: {
	            show: false,
	            lineStyle: {
	                width: 0,
	                shadowBlur: 0,
	                color: [
	                    [1, '#fff']
	                ]
	
	            }
	        },
	        axisTick: {
	            show: false
	        },
	        splitLine: {
	            show: false
	        },
	        axisLabel: {
	            show: false
	        },
	        detail: {
	            offsetCenter: [
	                0, '20%'
	            ], // x, y，单位px
	            textStyle: {
	                color: '#ffb706',
	                fontSize: 24
	            },
	            formatter: '{value}分'
	        },
	        pointer: {
	            show: false,
	            length: '70%',
	            width: 14
	        }, // 其他演示在itemStyle中调试
	        // 不是整个canvas的title
	        title: {
	            color: '#fff',
	            fontSize: 14,
	            offsetCenter: [0, '-30%']
	        },
	        data: [
	            // data数据为实时数据
	            {
	                name: type,
	                value: val
	            }
	        ]
	    }, {
	        name: '进度展示条',
	        type: 'pie',
	        radius: ['65%', '85%'],
	        avoidLabelOverlap: false,
	        silent: true,
	        zlevel: 1,
	       	startAngle: 210,
					endAngle: -30,
	        label: {
	            normal: {
	                show: false
	            },
	            emphasis: {
	                show: false
	            }
	        },
	        labelLine: {
	            normal: {
	                show: false
	            }
	        },
	        data: [{
	            // 展示数据
	            value: val * 2.7, //270(度数)*80(展示数据具体值)*0.01(百分占比常数)
	            name: '显示进度条',
	            itemStyle: {
	                normal: {
	                    color: {
	                        type: 'linear',
	                        x: 0,
	                        y: 0,
	                        x2: 0,
	                        y2: 1,
	                        colorStops: [{
	                            offset: 0,
	                            color: '#0ae5fb' // 0% 处的颜色
	                        }, {
	                            offset: 1,
	                            color: '#3c57b9' // 100% 处的颜色
	                        }],
	                        globalCoord: false // 缺省为 false
	                    },
	                    shadowColor: 'rgba(0, 0, 0, 0.2)',
	                    shadowBlur: 10
	                }
	            }
	        }, {
	            // 空白数据
	            value: 240 * (1 - val * 0.01), //270*(1-80*0.01)
	            name: '隐藏进度条',
	            itemStyle: {
	                normal: {
	                    color: 'none',
	                     
	                    
	                }
	            }
	        }, {
	            // 占位数据(写死)
	            value: 90,
	            name: '空白部分',
	            itemStyle: {
	                normal: {
	                    color: 'none'
	                }
	            }
	        }]
	    }]
	};
	sentimentAnalysis.setOption(option);
}

function sentimentTrend(){
	var sentimentTrend = echarts.init(document.getElementById('sentimentTrend'));
	var shiXdata = ["05-01", "05-02", "05-03", "05-04", "05-05", "05-06", "05-07", "05-08", "05-09", "05-10", "05-11"];
	var shiYdata1 = [152, 140, 265, 345, 254, 198, 375, 465, 296, 358, 128];
	var shiYdata2 = [124, 110, 201, 379, 468, 688, 298, 257, 389, 729, 549];
	var shiYdata3 = [189, 145, 195, 465, 256, 433, 154, 685, 105, 486, 356];
	var option = {
		tooltip: {
			trigger: 'axis'
		},
		grid: {
			left: '3%',
			right: '7%',
			top: '20%',
			bottom: '5%',
			containLabel: true
		},
		legend: {
			top: 0,
			right: 10,
			textStyle: {
				color: '#fff',
				fontSize: 12
			},
			data:['正面','中性','负面']
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
					color: "#fff",
					opacity: 0.5
				}
			},
			splitLine: {
				show: true,
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
			name:'转载量',
			type: 'value',
			splitNumber:3,
			axisLabel: {
				textStyle: {
					color: '#fff'
				}
			},
			axisLine: {
				lineStyle: {
					color: "#fff",
					opacity: 0.5
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
		series: [
			{
				name: '正面',
				type: 'line',
				sampling: 'average',
				symbol: 'none',
				itemStyle: {
					normal: {
						color: '#34d5e0'
					}
				},
				areaStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
							offset: 0,
							color: 'rgba(255,255,255,0)'
						}, {
							offset: 1,
							color: '#34d5e0'
						}])
					}
				},
				data: shiYdata2
			},
			{
				name: '中性',
				type: 'line',
				sampling: 'average',
				symbol: 'none',
				itemStyle: {
					normal: {
						color: '#c79c14'
					}
				},
				areaStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
							offset: 0,
							color: 'rgba(255,255,255,0)'
						}, {
							offset: 1,
							color: '#c79c14'
						}])
					}
				},
				data: shiYdata1
			},
			{
				name: '负面',
				type: 'line',
				sampling: 'average',
				symbol: 'none',
				itemStyle: {
					normal: {
						color: '#7f9cfb'
					}
				},
				areaStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
							offset: 0,
							color: 'rgba(255,255,255,0)'
						}, {
							offset: 1,
							color: '#7f9cfb'
						}])
					}
				},
				data: shiYdata3
			},
		]
	};
	sentimentTrend.setOption(option);
}

function themePart(){
	var themePart = echarts.init(document.getElementById('themePart'));
	var JosnList=[{
	    name: "Jayfee",
	    value: 666
	}, {
	    name: "Nancy",
	    value: 520
	}, {
	    name: "生活资源",
	    value: "999"
	}, {
	    name: "供热管理",
	    value: "888"
	}, {
	    name: "供气质量",
	    value: "777"
	}, {
	    name: "生活用水管理",
	    value: "688"
	}, {
	    name: "一次供水问题",
	    value: "588"
	}, {
	    name: "交通运输",
	    value: "516"
	}, {
	    name: "城市交通",
	    value: "515"
	}, {
	    name: "环境保护",
	    value: "483"
	}, {
	    name: "房地产管理",
	    value: "462"
	}, {
	    name: "城乡建设",
	    value: "449"
	}, {
	    name: "社会保障与福利",
	    value: "429"
	}, {
	    name: "社会保障",
	    value: "407"
	}, {
	    name: "文体与教育管理",
	    value: "406"
	}, {
	    name: "公共安全",
	    value: "406"
	}, {
	    name: "公交运输管理",
	    value: "386"
	}, {
	    name: "出租车运营管理",
	    value: "385"
	}, {
	    name: "供热管理",
	    value: "375"
	}, {
	    name: "市容环卫",
	    value: "355"
	}, {
	    name: "自然资源管理",
	    value: "355"
	}, {
	    name: "粉煤灰污染",
	    value: "284"
	}, {
	    name: "房屋安全",
	    value: "223"
	}, {
	    name: "供电管理",
	    value: "223"
	}, {
	    name: "燃气管理",
	    value: "152"
	}, {
	    name: "教育管理",
	    value: "152"
	}, {
	    name: "医疗纠纷",
	    value: "152"
	}, {
	    name: "执法监督",
	    value: "152"
	}, {
	    name: "设备安全",
	    value: "152"
	}, {
	    name: "政务建设",
	    value: "152"
	}, {
	    name: "县区、开发区",
	    value: "152"
	}, {
	    name: "宏观经济",
	    value: "152"
	}, {
	    name: "低保管理",
	    value: "92"
	}, {
	    name: "文娱市场管理",
	    value: "72"
	}, {
	    name: "城市交通秩序管理",
	    value: "72"
	}, {
	    name: "工业排放污染",
	    value: "41"
	}, {
	    name: "破坏森林资源",
	    value: "41"
	}, {
	    name: "市场收费",
	    value: "41"
	}, {
	    name: "生产资金",
	    value: "41"
	}, {
	    name: "停供",
	    value: "21"
	}, {
	    name: "基础教育",
	    value: "21"
	}, {
	    name: "职业教育",
	    value: "21"
	}, {
	    name: "物业资质管理",
	    value: "21"
	}];
	option = {
	    tooltip: {
	        show: true
	    },
	    series: [{
	        name: '主题分析',
	        type: 'wordCloud',
	        sizeRange: [6, 66],
	        rotationRange: [-45, 90],
	        textPadding: 0,
	        autoSize: {
	            enable: true,
	            minSize: 12
	        },
	        textStyle: {
	            normal: {
	                color: function () {  
                        return allColor[parseInt(Math.random() * 10)];  
                    }  
	            },
	            emphasis: {
	                shadowBlur: 10,
	                shadowColor: '#333'
	            }
	        },
	        data: JosnList
	    }]
	};
	themePart.setOption(option);
}

function PublicOpinionExponentTrend(){
	var PublicOpinionExponentTrend = echarts.init(document.getElementById('PublicOpinionExponentTrend'));
	var shiXdata = ["05-01", "05-02", "05-03", "05-04", "05-05", "05-06", "05-07", "05-08", "05-09", "05-10", "05-11"];
	var shiYdata = [152, 140, 265, 345, 254, 198, 375, 465, 296, 358, 128];
	var option = {
		tooltip: {
			trigger: 'axis'
		},
		grid: {
			left: '3%',
			right: '7%',
			top: '20%',
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
					color: "#fff",
					opacity: 0.5
				}
			},
			splitLine: {
				show: true,
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
			name:'数量',
			type: 'value',
			splitNumber:3,
			axisLabel: {
				textStyle: {
					color: '#fff'
				}
			},
			axisLine: {
				lineStyle: {
					color: "#fff",
					opacity: 0.5
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
		series: [
			{
				name: '报道数量',
				type: 'line',
				sampling: 'average',
				symbol: 'emptyCircle',
				itemStyle: {
					normal: {
						color: '#34d5e0'
					}
				},
				areaStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
							offset: 0,
							color: 'rgba(255,255,255,0)'
						}, {
							offset: 1,
							color: '#34d5e0'
						}])
					}
				},
				data: shiYdata
			}
		]
	};
	PublicOpinionExponentTrend.setOption(option);
}
function showThisPic(self){
	$(self).parents('.huaxiang').siblings('.huaxiang').addClass('active').addClass('bounceInRight');
	$(self).parents('.huaxiang').removeClass('bounceInLeft').removeClass('active');
	/* 游客驻足时间*/
	stopTime();
}
function showThisPic2(self){
	$(self).parents('.huaxiang').siblings('.huaxiang').addClass('active').addClass('bounceInLeft');
	$(self).parents('.huaxiang').removeClass('bounceInRight').removeClass('active');
}
function showThisPic3(self){
	$(self).parents('.yunying').siblings('.yunying').addClass('active').addClass('bounceInRight');
	$(self).parents('.yunying').removeClass('bounceInLeft').removeClass('active');
	/* 景区运营分析*/
	spotOperation();
	/* 出行方式*/
	travelWays();
	/* 景区消费结构*/
	consumptionStructure();
	/* 票务销售汇总*/
	ticketSales();
}
function showThisPic4(self){
	$(self).parents('.yunying').siblings('.yunying').addClass('active').addClass('bounceInLeft');
	$(self).parents('.yunying').removeClass('bounceInRight').removeClass('active');
}

function spotOperation(){
	var spotOperation = echarts.init(document.getElementById('spotOperation'));
	option = {
		tooltip: {
			trigger: 'axis'
		},
		grid: {
			left: '2%',
			right: '2%',
			top: '20%',
			bottom: '2%',
			containLabel: true
		},
		legend: {
			textStyle: {
				color: '#fff',
				fontSize: 12,
			},
			data: ['旅游收入', '客流量']
		},
		xAxis: [{
			type: 'category',
			axisTick: {
				alignWithLabel: true
			},
			axisLine: {
				lineStyle: {
					color: "#fff",
					opacity: 0.5
				}
			},
			data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
		}],
		yAxis: [{
			type: 'value',
			name: '单位：万元',
			position: 'right',
			axisLabel: {
				textStyle: {
					color: '#fff',
					fontSize: 12
				}
			},
			axisLine: {
				lineStyle: {
					color: "#fff",
					opacity: 0.5
				}
			},
			splitLine: {
				show: false,
				lineStyle: {
					color: ['#fff'],
					type: 'solid',
					opacity: 0.5
				}
			},
			axisLabel: {
				formatter: '{value}'
			}
		}, {
			type: 'value',
			name: '单位：万人',
			position: 'left',
			axisLabel: {
				textStyle: {
					color: '#fff',
					fontSize: 12
				}
			},
			axisLine: {
				lineStyle: {
					color: "#fff",
					opacity: 0.5
				}
			},
			splitLine: {
				show: false,
				lineStyle: {
					color: ['#fff'],
					type: 'solid',
					opacity: 0.5
				}
			},
		}],
		series: [{
			name: '旅游收入',
			type: 'line',
			stack: '总量',
			symbol: 'emptyCircle',
			symbolSize: 6,
			itemStyle: {
				normal: {
					color: '#d1b36d'
				}
			},
			data: [1, 13, 37, 35, 15, 13, 25, 21, 6, 45, 32, 2]
		}, {
			name: '客流量',
			type: 'bar',
			yAxisIndex: 1,
			stack: '总量',
			itemStyle: {
				normal: {
					color: '#1ac8ff'
				}
			},
			data: [209, 236, 325, 439, 507, 576, 722, 879, 938, 1364, 1806, 1851]
		}]
	};
	spotOperation.setOption(option);
}

function travelWays(){
	var travelWays = echarts.init(document.getElementById('travelWays'));
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
	travelWays.setOption(option);
}
function consumptionStructure(){
	var consumptionStructure = echarts.init(document.getElementById('consumptionStructure'));
	option = {
		tooltip: {
			trigger: 'item',
			formatter: "{b}\n{d}%"
		},
		series: [{
			name: '消费结构',
			type: 'pie',
			radius: '55%',
			center: ['50%', '50%'],
			color: allColor,
			data: [{
					value: 335,
					name: '吃'
				},
				{
					value: 310,
					name: '住'
				},
				{
					value: 234,
					name: '行'
				},
				{
					value: 135,
					name: '游'
				},
				{
					value: 348,
					name: '购'
				},
				{
					value: 248,
					name: '娱'
				}
			],
			itemStyle: {
				normal: {
					label: {
						show: true,
						formatter: "{b}\n{d}%",
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
	consumptionStructure.setOption(option);
}

function ticketSales(){
	var ticketSales = echarts.init(document.getElementById('ticketSales'));
	option = {
		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b}: {c} ({d}%)"
		},
		series: [{
			type: 'pie',
			name: '销售统计',
			center: ['50%', '50%'],
			radius: ['45%', '70%'],
			avoidLabelOverlap: false,
			labelLine: {
				normal: {
//					length: 5,
//					length2: 5,
					lineStyle: {
						color: '#fff'
					}
				}
			},
			color: allColor,
			label: {
				normal: {
					formatter: '{b}\n{d}%',
					borderWidth: 20,
					borderRadius: 4,
					rich: {
						a: {
							color: '#333',
							fontSize: 12,
							lineHeight: 20
						},
						b: {
							fontSize: 12,
							lineHeight: 20,
							color: '#333'
						}
					}
				}
			},
			data: [{
					value: 711,
					name: '散客'
				},
				{
					value: 6325,
					name: '售票口'
				},
				{
					value: 2134,
					name: '自助'
				},
				{
					value: 3487,
					name: '团队'
				},
				{
					value: 7865,
					name: '网络'
				}
			]
		}]
	};
	ticketSales.setOption(option);
}
