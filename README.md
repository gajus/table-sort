# jQuery table-sort plugin

[jQuery table-sort plugin](https://github.com/anuary/jquery-table-sort/) ([demonstration](https://dev.anuary.com/b2f9b84e-11b9-5d84-818e-053fcc313c0d/)) is a jQuery plugin to sort tables by `td` content or `data-ay-weight`, if the latter is provided.

The script will add `ay-sort-asc` and `ay-sort-desc` to the corresponding `th`.

## Usage

`ayTableSort` does not take any arguments. Sortable `th` are indicated `ay-sort` class. By default, nothing is sortable. Furthermore, if you require initial sorting on a page load, then such should be done on server side and (optionally) the approriate class referencing the sorting added to the corresponding `th`.

    <script type="text/javascript">
    $(function(){
    	$('table').ayTableSort();
    });
    </script>
    <table>
    	<thead>
    		<tr>
    			<th class="ay-sort name sorted-asc">Name</th>
    			<th class="ay-sort">Age</th>
    			<th class="ay-sort">Price</th>
    		</tr>
    	</thead>
    	<tbody>
    		<tr>
    			<td>Ann</td>
    			<td>23</td>
    			<td data-ay-weight="5.0">USD 5.0</td>
    		</tr>
    		<tr>
    			<td>Becker</td>
    			<td>20</td>
    			<td data-ay-weight="10.0">USD 10.00</td>
    		</tr>
    		<tr>
    			<td>Meg</td>
    			<td>31</td>
    			<td data-ay-weight="10.30">USD 10.30</td>
    		</tr>
    	</tbody>
    </table>

## Roadmap

* Add initial sorting.

## License & Notes

The BSD License - Copyright (c) 2012 [Gajus Kuizinas](http://anuary.com/gajus).