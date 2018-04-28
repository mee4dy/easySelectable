/*
Author: mee4dy@gmail.com
*/
(function($){
	//selectable html elements
	$.fn.easySelectable = function(options){
		var el = $(this);
		var options = $.extend({
			'item': 'li',
			'state': true,
			onSelecting: function(el){

			},
			onSelected: function(el){

			},
			onUnSelected: function(el){
				
			}
		}, options);
		el.on('dragstart', function(event) { event.preventDefault(); });
		el.off('mouseover');
		el.addClass('easySelectable');
		if(options.state){
			el.find(options.item).addClass('es-selectable');
	  		el.on('mousedown', options.item, function(e){
	  			$(this).trigger('start_select');
				var offset = $(this).offset();
				var hasClass = $(this).hasClass('es-selected');
				var prev_el = false;
				el.on('mouseover', options.item, function(e){
					if(prev_el==$(this).index()) return true;
					prev_el = $(this).index();
					var hasClass2 = $(this).hasClass('es-selected');
					if(!hasClass2){
						$(this).addClass('es-selected').trigger('selected');
						el.trigger('selected');
						options.onSelecting($(this));
						options.onSelected($(this));
					}
					else{
						$(this).removeClass('es-selected').trigger('unselected');
						el.trigger('unselected');
						options.onSelecting($(this))
						options.onUnSelected($(this));
					}
				});
				if(!hasClass){
					$(this).addClass('es-selected').trigger('selected');
					el.trigger('selected');
					options.onSelecting($(this));
					options.onSelected($(this));
				}
				else{
					$(this).removeClass('es-selected').trigger('unselected');
					el.trigger('unselected');
					options.onSelecting($(this));
					options.onUnSelected($(this));
				}
				var relativeX = (e.pageX - offset.left);
				var relativeY = (e.pageY - offset.top);
			});
			$(document).on('mouseup', function(){
				el.off('mouseover');
		    });
		}
		else{
			el.off('mousedown');
		}
	};
})(jQuery);