$(function(){
	var citycode=0;
	var todayData1=[];
	var followData=[];
	var todayData2=[];
	$.ajax({
	    url : 'http://service.envicloud.cn:8082/v2/citycode/C2L5DTEWMZAXNDC2MZI0ODM0MZM5/宁波',
	    type : "get",
	    dataType : "json",
	    cache : false,
	    async : false,
	    success : function(data) {
	        citycode=data.citycode;
	        $.ajax({
		        url : 'http://service.envicloud.cn:8082/v2/weatherforecast/C2L5DTEWMZAXNDC2MZI0ODM0MZM5/'+citycode+'',
		        type : "get",
		        dataType : "json",
		        cache : false,
		        async : false,
		        success : function(data) {
		        	var zhiliang=data.suggestion.air.brf;
				    followData=data.forecast.slice(1,data.forecast.length-4);
				    todayData1=data.forecast.shift();
		            $.ajax({
				        url : 'http://service.envicloud.cn:8082/v2/weatherlive/C2L5DTEWMZAXNDC2MZI0ODM0MZM5/'+citycode+'',
				        type : "get",
				        dataType : "json",
				        cache : false,
				        async : false,
				        success : function(data) {
							todayData2=data;
//									console.log(todayData2)
				        }
				    });
				    $('.todayTem').html(Math.round(todayData2.temperature)+'℃');
					$('.todayTemR').html('今日气温：'+Math.round(todayData1.tmp.min)+'~'+Math.round(todayData1.tmp.max)+'℃');
					$('.tdate').html('湿度：'+Math.round(todayData2.humidity)+'%');
					$('.Tph').html('天气状况：'+todayData2.phenomena);
					$('.tphem').html('降雨量：'+todayData2.rain+'mm');
					$('.tphem2').html('体感温度：'+todayData2.feelst+'℃');
					$('#zhiliang').html('空气质量：'+zhiliang);
					addImgToWeather($('.image1'),todayData2.phenomena);
					addImgToWeather($('.image2'),followData[0].cond.cond_d);
					addImgToWeather($('.image3'),followData[1].cond.cond_d);
					$('.nextData1').html(Math.round(followData[0].tmp.min)+'℃~'+Math.round(followData[0].tmp.max)+'℃');
					$('.nextData2').html(Math.round(followData[1].tmp.min)+'℃~'+Math.round(followData[1].tmp.max)+'℃');
		        }
		    });
	    }
	});
})
function addImgToWeather(dom,phenomena){
	if(phenomena=='晴'){
		dom.attr('src','../../../img/weather/qing.png')
	}else if(phenomena=='阴'){
		dom.attr('src','../../../img/weather/yin.png')
	}else if(phenomena=='晴间多云'){
		dom.attr('src','../../../img/weather/duoyun.png')
	}else if(phenomena=='霾'){
		dom.attr('src','../../../img/weather/mai.png')
	}else if(phenomena=='多云'){
		dom.attr('src','../../../img/weather/duoyun.png')
	}else if(phenomena=='阵雨'){
		dom.attr('src','../../../img/weather/zhenyu.png')
	}else if(phenomena=='雷阵雨'){
		dom.attr('src','../../../img/weather/leizhenyu.png')
	}else if(phenomena=='雷阵雨伴有冰雹'){
		dom.attr('src','../../../img/weather/leizhenyuAndbingbao.png')
	}else if(phenomena=='小雨'){
		dom.attr('src','../../../img/weather/xiaoyu.png')
	}else if(phenomena=='中雨'){
		dom.attr('src','../../../img/weather/zhongyu.png')
	}else if(phenomena=='冻雨'){
		dom.attr('src','../../../img/weather/dongyu.png')
	}else if(phenomena=='大雨'){
		dom.attr('src','../../../img/weather/dayu.png')
	}else if(phenomena=='暴雨'){
		dom.attr('src','../../../img/weather/baoyu.png')
	}else if(phenomena=='大暴雨'){
		dom.attr('src','../../../img/weather/dabaoyu.png')
	}else if(phenomena=='特大暴雨'){
		dom.attr('src','../../../img/weather/tedabaoyu.png')
	}else if(phenomena=='阵雪'||phenomena=='小雪'){
		dom.attr('src','../../../img/weather/xiaoxue.png')
	}else if(phenomena=='雨夹雪'){
		dom.attr('src','../../../img/weather/yujiaxue.png')
	}else if(phenomena=='中雪'){
		dom.attr('src','../../../img/weather/zhongxue.png')
	}else if(phenomena=='大雪'){
		dom.attr('src','../../../img/weather/daxue.png')
	}
}