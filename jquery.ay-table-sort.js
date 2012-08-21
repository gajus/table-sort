/**
 * jQuery table-sort v0.0.1
 * https://github.com/anuary/jquery-table-sort
 *
 * Licensed under the BSD.
 * https://github.com/anuary/jquery-table-sort/blob/master/LICENSE
 *
 * Author: Gajus Kuizinas @anuary
 */
(function($){
	$.fn.ayTableSort	= function(){
		this.each(function(){
			var table	= $(this);
		
			table.find('thead th').on('click', function()
			{
				$(this).siblings().removeClass('sorted-asc sorted-desc');
				
				if($(this).hasClass('sorted-asc'))
				{
					$(this).removeClass('sorted-asc').addClass('sorted-desc');
					
					var sort	= 1;
				}
				else
				{
					$(this).removeClass('sorted-desc').addClass('sorted-asc');
					
					var sort	= 0;
				}				
				
				var index	= $(this).index();
				
				var data	= table.find('tbody').clone();
				
				data		= data.find('tr').sort(function(a, b)
				{
					var a	= $(a).find('td').eq(index);
					var b	= $(b).find('td').eq(index);
					
					var a	= a.data('ay-weight') === undefined ? a.text() : a.data('ay-weight');
					var b	= b.data('ay-weight') === undefined ? b.text() : b.data('ay-weight');
					
					var a	= !isNaN(parseFloat(a)) ? parseFloat(a) : a;
					var b	= !isNaN(parseFloat(b)) ? parseFloat(b) : b;
					
					if(a == b)
					{
						return 0;
					}
					
					return (sort ? a > b : a < b) ? -1 : 1;
				});
				
				table.find('tbody').html(data);
			});
		});
	};
})($);