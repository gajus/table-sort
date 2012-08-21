/**
 * jQuery table-sort v0.0.3
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
			
			table.find('thead th.ay-sort').on('click', function()
			{
				// Cannot use .siblings() because th might be not under the same <tr>
				$(this).parents('thead').find('th').not($(this)).removeClass('ay-sort-asc ay-sort-desc');
				
				if($(this).hasClass('ay-sort-asc'))
				{
					$(this).removeClass('ay-sort-asc').addClass('ay-sort-desc');
					
					var sort	= 1;
				}
				else
				{
					$(this).removeClass('ay-sort-desc').addClass('ay-sort-asc');
					
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