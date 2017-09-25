$(document).ready(function(){
	var sub = $('#sub');
	
	var activeRow;
	var activeMenu;
	
	var timer;
	
	var mouseInSub = false; // 鼠标是否在二级菜单里面
	sub.on('mouseenter',function(e){
		mouseInSub = true;
	})
	.on('mouseleave',function(e){
		mouseInSub = false;
	});
	
	var mouseTrack = []; //创建鼠标,记录鼠标的位置
	
	var moveHandler = function(e) {
		mouseTrack.push({
			x: e.pageX,
			y: e.pageY
		});
		//我们只要保存最新的位置 和 上一次的位置
		if (mouseTrack.length > 3) {
			mouseTrack.shift(); //多余的我们就把它弹出
		}
	};
	
	$('#test')
	.on('mouseenter',function(e){
		sub.removeClass('none');
		
		$(document).bind('mousemove',moveHandler); // 绑定
	})
	.on('mouseleave',function(e){
		sub.addClass('none');
		if (activeRow) {
			activeRow.removeClass('active');
			activeRow = null;
		}
		if (activeMenu) {
			activeMenu.addClass('none');
			activeMenu = null;
		}
		
		$(document).unbind('mousemove',moveHandler); // 解绑
	})
	.on('mouseenter','li',function(e){
		if (!activeRow) {
			activeRow = $(e.target).addClass('active');
			activeMenu = $('#' + activeRow.data('id'));
			activeMenu.removeClass('none');
			return;
		}
		
		if (timer) { // debounce 去抖技术原理
			clearTimeout(timer);
		}
		
		var currMousePos = mouseTrack[mouseTrack.length - 1];
		var leftCorner = mouseTrack[mouseTrack.length - 2];
		
		var delay = needDelay(sub, leftCorner, currMousePos);
		if (delay) {
			timer = setTimeout(function() {
				if (mouseInSub) {
					return;
				}
				// 把上一次激活的给不激活,同时不显示
				activeRow.removeClass('active');
				activeMenu.addClass('none');
				// 把当前点击的设置为 激活,同时显示
				activeRow = $(e.target);
				activeRow.addClass('active');
				activeMenu = $('#' + activeRow.data('id'));
				activeMenu.removeClass('none');
				timer = null; // debounce 去抖技术原理
			}, 300);
		} else{
			var prevActiveRow = activeRow;
			var prevActiveMenu = activeMenu;
			
			activeRow = $(e.target);
			activeMenu = $('#' + activeRow.data('id'));
			
			prevActiveRow.removeClass('active');
			prevActiveMenu.addClass('none');
			
			activeRow.addClass('active');
			activeMenu.removeClass('none');
		}	
	});
});