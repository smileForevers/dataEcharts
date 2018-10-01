var newData=[{
	"name":"宁波市旅游中心",
	"data": [
		{
		"name": "宁波市中区",
		"data": [
				{
					"name":"三江口"
				},
				{
					"name":"天一广场"
				},
				{
					"name":"月湖公园"
				},
				{
					"name":"宁波大剧院"
				},
				{
					"name":"琴桥"
				},
				{
					"name":"东部新城"
				},
				{
					"name":"鄞州公园"
				}
			]
		},
		{
		"name": "北仑",
		"data": [
				{
					"name":"北仑港"
				},
				{
					"name":"凤凰山乐园"
				},
				{
					"name":"大碶疏港立交"
				},
				{
					"name":"大碶中学"
				}
			]
		},
		{
		"name": "奉化",
		"data": [
				{
					"name":"大成桥"
				},
				{
					"name":"中山桥"
				},
				{
					"name":"惠政大桥"
				},
				{
					"name":"兴奉桥"
				},
				{
					"name":"莼湖"
				},
				{
					"name":"滕头"
				},
				{
					"name":"雪窦山"
				}
			]
		},
		{
		"name": "溪口",
		"data": [
				{
					"name":"剡溪大桥"
				},
				{
					"name":"湖山桥"
				},
				{
					"name":"蒋氏故居"
				},
				{
					"name":"银凤广场"
				},
				{
					"name":"蒋氏故里"
				},
				{
					"name":"雪窦山"
				}
			]
		},
		{
		"name": "慈溪",
		"data": [
				{
					"name":"旦山公园"
				},
				{
					"name":"慈和桥"
				},
				{
					"name":"会展中心"
				},
				{
					"name":"教场山公园"
				},
				{
					"name":"宗兴中路"
				},
				{
					"name":"坎墩镇"
				}
			]
		},
		{
		"name": "余姚",
		"data": [
				{
					"name":"玉皇山公园"
				},
				{
					"name":"阳明公园"
				},
				{
					"name":"兰墅大桥"
				},
				{
					"name":"最良桥"
				},
				{
					"name":"交通大楼"
				},
				{
					"name":"四明山"
				},
				{
					"name":"泗门华润"
				},
				{
					"name":"四海大道"
				},
				{
					"name":"泗门嘉悦城"
				},
				{
					"name":"泗门华联"
				}
			]
		},
		{
		"name": "宁海",
		"data": [
				{
					"name":"潘天寿广场"
				},
				{
					"name":"人民大道"
				},
				{
					"name":"中大街"
				}
			]
		}
	]
}]
var map;
var markers=[];
var infoWindow;
$(function(){
	var token = sessionStorage.getItem('token');
	if(!token) {
    	location.href = 'emergencyCommand.html?code=0'
  	} 
	var datas = {
			list: newData
		};
	var html = template('scriptDiv', datas);
	document.getElementById('navMenu').innerHTML = html;
	map = new AMap.Map("map", {
		zoom: 13,
		center: [116.40, 39.90]
	});
	map.setMapStyle("amap://styles/c36ff2cfd036dd274b0d5e3d77ca45c8");
	$('.navMenu li a').on('click', function() {
		var parent = $(this).parent().parent(); //获取当前页签的父级的父级
		var labeul = $(this).parent("li").find(">ul")
		if($(this).parent().hasClass('open') == false) {
			//展开未展开
			parent.find('ul').slideUp(300);
			parent.find("li").removeClass("open");
			parent.find('li a').removeClass("active").find(".arrow").removeClass("open");
			parent.find('li a .layui-icon').html('&#xe623;');
			$(this).find('.layui-icon').html('&#xe625;');
			$(this).parent("li").addClass("open").find(labeul).slideDown(300);
			$(this).addClass("active").find(".arrow").addClass("open");
		} else {
			$(this).find('.layui-icon').html('&#xe623;');
			$(this).parent("li").removeClass("open").find(labeul).slideUp(300);
			if($(this).parent().find("ul").length > 0) {
				$(this).removeClass("active").find(".arrow").removeClass("open");
			} else {
				$(this).addClass("active");
			}
		}
	});
	$('.bottomTitle').click(function(){
		var index=$(this).index();
		$(this).addClass("active").siblings().removeClass('active');
		$('.tableList').eq(index).addClass("active").siblings().removeClass('active');
	})
})

function addMarkerToMap(num){
	map.remove(markers); 
	closeInfoWindow()
	markers=[];
	var title,str;
	var title1 = '车辆信息';
	var title2 = '人员信息';
	var str1="<div class='clearfloat contentList'>"
			+"<p class='fl contentListMain1'>"
				+"<span class='contentListMainLeft'>车牌：</span>"
				+"<span class='contentListMainRight'>京AB2345</span>"
			+"</p>"
			+"<p class='fr contentListMain2'>"
				+"<span class='contentListMainLeft'>颜色：</span>"
				+"<span class='contentListMainRight'>黄色</span>"
			+"</p>"
		+"</div>"
		+"<div class='clearfloat contentList'>"
			+"<p class='fl contentListMain1'>"
				+"<span class='contentListMainLeft'>司机：</span>"
				+"<span class='contentListMainRight'>李想</span>"
			+"</p>"
			+"<p class='fr contentListMain2'>"
				+"<span class='contentListMainLeft'>方向：</span>"
				+"<span class='contentListMainRight'>正北</span>"
			+"</p>"
		+"</div>"
		+"<div class='clearfloat contentList'>"
			+"<p class='fl contentListMain1'>"
				+"<span class='contentListMainLeft'>联系方式：</span>"
				+"<span class='contentListMainRight'>18618114785</span>"
			+"</p>"
			+"<p class='fr contentListMain2'>"
				+"<span class='contentListMainLeft'>违章记录：</span>"
				+"<span class='contentListMainRight'>有</span>"
			+"</p>"
		+"</div>"
		+"<div class='clearfloat contentList'>"
			+"<span class='contentListMainLeft'>速度：</span>"
			+"<span class='contentListMainRight'>100km/h</span>"
		+"</div>"
		+"<div class='clearfloat contentList'>"
			+"<span class='contentListMainLeft'>时间：</span>"
			+"<span class='contentListMainRight'>2018-06-01 15:26:45</span>"
		+"</div>"
		+"<div class='clearfloat contentList'>"
			+"<span class='contentListMainLeft'>状态：</span>"
			+"<span class='contentListMainRight'>车辆熄火，精准定位</span>"
		+"</div>"
		+"<div class='clearfloat contentList contentList3'>"
			+"<span class='contentListMainLeft fl contentListMainLeft1'>位置：</span>"
			+"<span class='contentListMainRight fl contentListMainRight1'>北京市海淀区西二旗地铁站北京市海淀区西二旗地铁站</span>"
		+"</div>"
		+"<div class='contentList contentList2 lineHeightAround'>"
			+"<img src='../../img/shishishipin.png'/>"
			+"<img src='../../img/lishijilu.png' onclick='showHistoryLine()' />"
			+"<img src='../../img/duijiang.png'/>"
			+"<img src='../../img/zhipairenwu.png'/>"
		+"</div>";
	var str2="<div class='clearfloat contentList'>"
				+"<p class='fl contentListMain1'>"
					+"<span class='contentListMainLeft'>姓名：</span>"
					+"<span class='contentListMainRight'>李想</span>"
				+"</p>"
				+"<p class='fr contentListMain2'>"
					+"<span class='contentListMainLeft'>角色：</span>"
					+"<span class='contentListMainRight'>总指挥</span>"
				+"</p>"
			+"</div>"
			+"<div class='clearfloat contentList'>"
				+"<p class='fl contentListMain1'>"
					+"<span class='contentListMainLeft'>司机：</span>"
					+"<span class='contentListMainRight'>李想</span>"
				+"</p>"
				+"<p class='fr contentListMain2'>"
					+"<span class='contentListMainLeft'>方向：</span>"
					+"<span class='contentListMainRight'>正北</span>"
				+"</p>"
			+"</div>"
			+"<div class='clearfloat contentList'>"
				+"<span class='contentListMainLeft'>联系方式：</span>"
				+"<span class='contentListMainRight'>18618114785</span>"
			+"</div>"
			+"<div class='clearfloat contentList contentList3'>"
				+"<span class='contentListMainLeft fl contentListMainLeft1'>位置：</span>"
				+"<span class='contentListMainRight fl contentListMainRight1'>北京市海淀区西二旗地铁站北京市海淀区西二旗地铁站</span>"
			+"</div>"
			+"<div class='contentList contentList2 lineHeightAround'>"
				+"<img src='../../img/duijiang.png'/>"
				+"<img src='../../img/zhipairenwu.png'/>"
			+"</div>";
	var icons='';
	if(num==0){
		title=title1;
		str=str1;
		icons='../../img/warningCar.png';
	}else if(num==1){
		title=title1;
		str=str1;
		icons='../../img/stopCar.png';
	}else if(num==2){
		title=title1;
		str=str1;
		icons='../../img/moveCar.png';
	}else if(num==3){
		title=title2;
		str=str2;
		icons='../../img/staff.png';
	}
	var marker = new AMap.Marker({
	    position: new AMap.LngLat(116.39,39.9),
	    offset: new AMap.Pixel(-10, -10),
	    icon: icons // 添加 Icon 图标 URL
	});
	markers.push(marker);	
	map.add(markers);
	AMap.event.addListener(marker, 'click', function() {
        infoWindow.open(map, marker.getPosition());
    });
    
    var content = [];
    content.push(str);
	infoWindow = new AMap.InfoWindow({
        isCustom: true,  //使用自定义窗体
        content: createInfoWindow(title, content),
        offset: new AMap.Pixel(16, -30)
    });
}
	

//构建自定义信息窗体
function createInfoWindow(title, content) {
    var info = document.createElement("div");
    info.className = "info";
    // 定义顶部标题
    var top = document.createElement("div");
    var titleD = document.createElement("div");
    var closeX = document.createElement("p");
    top.className = "info-top";
    titleD.innerHTML = title;
    closeX.innerHTML = "×";
    closeX.className = "info-close";
    closeX.onclick = closeInfoWindow;
    top.appendChild(titleD);
    top.appendChild(closeX);
    info.appendChild(top);
	// 定义中部内容
	var middle = document.createElement("div");
    middle.innerHTML = content;
    info.appendChild(middle);
    return info;
}

//关闭信息窗体
function closeInfoWindow() {
    map.clearInfoWindow();
}

function showHistoryLine(){
	closeInfoWindow(); 
	$('.easyuiMain').width('65%');
	$('.progressbar-text').width('100%');
	$('.result').eq(1).addClass('active').siblings().removeClass('active');
	$('.rightBottom').eq(1).addClass('active').siblings().removeClass('active');
}
