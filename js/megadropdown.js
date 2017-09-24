$(document).ready(function(){
	var sub = $('#sub');
	
	var activeRow;
	var activeMenu;
	
	$('#test')
	.on('mouseenter',function(e){
		sub.removeClass('none');
	})
	.on('mouseleave',function(e){
		sub.addClass('none');
		
		if (activeRow) {
			activeRow.removeClass('active');
			activeRow = null;
		}
		
	});
});