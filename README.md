# jQuery table-sort plugin

[jQuery table-sort plugin](https://github.com/anuary/jquery-table-sort/) ([demonstration](https://dev.anuary.com/b2f9b84e-11b9-5d84-818e-053fcc313c0d/)) is a jQuery plugin to sort tables by `td` content, `data-ay-weight`, or a mix of both.

The script will add `ay-sorted-asc` and `ay-sorted-desc` to the corresponding `th`.

## Usage

`ayTableSort` does not take any arguments. Every column is sorted by default. This might change in the next release. Furthermore, if you require initial sorting on page load, then such should be done on server side and (optionally) the approriate class referencing the sorting added to the corresponding `th`.

    <script type="text/javascript">
    $(function(){
    	$('table').ayTableSort();
    });
    </script>
    <table>
    	<thead>
    		<tr>
    			<th class="name sorted-asc">Name</th>
    			<th>Age</th>
    			<th>Price</th>
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
* Allow to whitelist sotable columns.

## License & Notes

The BSD License - Copyright (c) 2012 [Gajus Kuizinas](http://anuary.com/gajus).