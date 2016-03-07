//计算屏幕大小
function screen () {

	var screenWidth = $(window).width(); //计算宽度
	var zoomWidth =  screenWidth/1920;

	var screenHeight = $(window).height() //计算高度
	var zoomHeight = screenHeight/1080;

	// zoomWidth = zoomWidth - 0.009; //宽度有点偏差 减去一丢丢子

	$(".wrap").css({

		 "transform":"scale("+zoomWidth+","+zoomHeight+")"	

	})
	$(".wrap").addClass("wrapWidth");	
}

// screen ()
function  main() {
	

setTimeout(function  () {
	var mainleftBg = null;	 //背景颜色的index
	var mainleft = $(".mainleft");
	var mainleftImage = $(".mainleft img");
	var yuleftGreen = $(".yuleftGreen");
	// 左侧的二级页面 鼠标划出划入动画功能
	mainleft.hover(function  () {
		var mainleftHoverBg = $(this).index();

		if (mainleftHoverBg != mainleftBg) {
			$(this).css({
				"background-color":"#e1e1e1",
				
			})	
		}else{

		}


	},function  () {
		var mainleftHoverBg = $(this).index();
		if (mainleftHoverBg != mainleftBg) {
			mainleft.css({

			})
			$(this).css({
				"background-color":"#ffffff"
			})	
		}else{

		}
	})
// 左侧的二级页面 鼠标点击动画功能
	mainleft.on("click",function  () {
		var index = $(this).index();
		mainleftBg = $(this).index();
		mainleft.css({
			"background-color":"#ffffff",
			"color":"black"
		})

		$(this).css({
			
			"background-color":"#1fd273",
			"color":"white"
		})
		mainleftImage.each(function(i){

		   this.src = "images/l" + i + ".png";
		 });
		
		mainleftImage.eq(index).attr("src","images/r"+index+".png")
		// 左侧的7像素的绿色小边
		yuleftGreen.css({
			display:"none"
		})
		yuleftGreen.eq(index).css({
			display:"block"
		})
	})	

	//点击顶部 左侧的div划出

	var yuClickBol = true;
	var mainleftsBOL = null;
	$(".yuClick").on("click",function  () {

		if (yuClickBol) {

			$(".lefts").addClass("yuLeftTranstion");
			// setTimeout(function  () {
			// 	$(".left").css({
			// 		width:0
			// 	})
			// },200)

			yuClickBol =false

			
		}else{

			$(".lefts").removeClass("yuLeftTranstion");

			if (mainleftsBOL) {
				$(".pagetaps").css({
					"display":"none"
				})
				mainleftsBOL = false;
			};

			yuClickBol = true
		}

	})

	// 一级菜单点击隐藏/显示

		$(".mainlefts").on("click",function  () {
				mainleftsBOL = true;
		
				// $(".Mask").css({
				// 	"display":"none"
				// })
				$(".lefts").addClass("yuLeftTranstion");
				yuClickBol =false;

				$(".pagetaps").css({
					"display":"block"
				})
			
			

		})

	},100)	
}
main()



