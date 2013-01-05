# jQuery table-sort plugin

[jQuery table-sort plugin](https://github.com/gajus/table-sort/) ([demonstration](https://dev.anuary.com/b2f9b84e-11b9-5d84-818e-053fcc313c0d/)) is a jQuery plugin to sort tables by `td` content or `data-ay-sort-weight`, if the latter is provided.

The script will add `ay-sort-asc` and `ay-sort-desc` to the corresponding `th`.

## Usage

Sortable `th` need to have `ay-sort` class. By default, nothing is sortable.

`th` has an optional `data-ay-sort-index` attribute to specify the sortable column index in `tbody` (zero-based). If table data is formatted (e.g. "USD 20.00", "10 cm") you need to explicitly state the sortable value using `data-ay-sort-weight` `td` attribute. If table has more than one `tbody` you can exclude the `tbody` you don't want sort by adding `ay-sort-no` class.

Furthermore, if you require initial sorting on a page load, then such should be done on server side and (optionally) the approriate class referencing the sorting added to the corresponding `th`.

        <script type="text/javascript">
    $(function(){
    	$.ay.tableSort({target: $('table'), debug: false});
    });
    </script>
    <table>
    	<thead>
    		<tr>
    			<th class="name ay-sort sorted-asc">Name</th>
    			<th class="ay-sort">Age</th>
    			<th class="ay-sort">Price</th>
    		</tr>
    	</thead>
    	<tbody class="ay-sort-no">
    		<tr>
    			<th colspan="3">Rated Best Voice Actor</th>
    		</tr>
    		<tr>
    			<td>Timothy</td>
    			<td>30</td>
    			<td data-ay-weight="90">USD 90.00/hr</td>
    		</tr>
    	</tbody>
    	<tbody>
    		<tr>
    			<td>Ann</td>
    			<td>23</td>
    			<td data-ay-weight="50.0">USD 50.0/hr</td>
    		</tr>
    		<tr>
    			<td>Becker</td>
    			<td>20</td>
    			<td data-ay-weight="100.0">USD 100.00/hr</td>
    		</tr>
    		<tr>
    			<td>Meg</td>
    			<td>31</td>
    			<td data-ay-weight="70.30">USD 70.30/hr</td>
    		</tr>
    	</tbody>
    </table>

## Roadmap

* Add initial sorting.

## License & Notes

The BSD License - Copyright (c) 2012 Gajus Kuizinas.